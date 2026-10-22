# frozen_string_literal: true
require 'json'
require 'time'
require 'net/http'
require 'uri'

CONSTELLATION = 'https://constellation.microcosm.blue'.freeze
SOURCE = 'app.bsky.feed.post:embed.external.uri'.freeze
LIKE_SOURCE = 'app.bsky.feed.like:subject.uri'.freeze
USER_AGENT = 'jacky.wtf/1.0 (jacky)'.freeze

# A URL is "referenced in a post" when an app.bsky.feed.post record embeds it
# as an external link. Constellation indexes every such link across the ATProto
# firehose, so we can answer this in real time.
class App
  def self.call(env)
    path = env['PATH_INFO'].to_s
    payload = case path
              when '/refs'
                refs(env['QUERY_STRING'] || '')
              when '/'
                { message: 'jacky.wtf API', version: '1.0', endpoints: ['/api/refs?url=...'] }
              else
                { error: 'not found' }
              end
    [payload[:error] ? 404 : 200, { 'Content-Type' => 'application/json' }, [payload.to_json]]
  end

  def self.refs(query_string)
    url = URI.decode_www_form(query_string || '').to_h['url'].to_s.strip
    return { error: 'missing url' } if url.empty?

    uri = URI.parse(url)
    return { error: 'bad url' } unless uri.is_a?(URI::HTTP) || uri.is_a?(URI::HTTPS)

    links = constellation(uri)
    total = links['total'].to_i
    records = links['records'] || []

    # Approximate "how many of the linking posts have been liked" by checking
    # the first few linking records for app.bsky.feed.like backlinks.
    like_total = 0
    records.first(5).each do |r|
      subject = "at://#{r['did']}/app.bsky.feed.post/#{r['rkey']}"
      like_total += constellation_count(subject, LIKE_SOURCE)
    end

    {
      url: url,
      linked: total.positive?,
      backlinks: total,
      liked: like_total.positive?,
      likes: like_total,
      records: records.map { |r| { did: r['did'], rkey: r['rkey'] } },
      source: SOURCE
    }
  rescue URI::InvalidURIError => e
    { error: "bad url: #{e.message}" }
  rescue StandardError => e
    { error: "upstream: #{e.message}" }
  end

  def self.constellation(url)
    uri = URI("#{CONSTELLATION}/xrpc/blue.microcosm.links.getBacklinks")
    uri.query = URI.encode_www_form(subject: url.to_s, source: SOURCE, limit: 10)
    json_fetch(uri)
  end

  def self.constellation_count(subject, source)
    uri = URI("#{CONSTELLATION}/xrpc/blue.microcosm.links.getBacklinksCount")
    uri.query = URI.encode_www_form(subject: subject.to_s, source: source)
    json_fetch(uri)['total'].to_i
  rescue StandardError
    0
  end

  def self.json_fetch(uri)
    req = Net::HTTP::Get.new(uri)
    req['User-Agent'] = USER_AGENT
    req['Accept'] = 'application/json'
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = uri.is_a?(URI::HTTPS)
    http.open_timeout = 5
    http.read_timeout = 8
    resp = http.request(req)
    return {} unless resp.is_a?(Net::HTTPSuccess)
    JSON.parse(resp.body)
  end
end