#!/usr/bin/env ruby
# frozen_string_literal: true

ENV['BUNDLE_GEMFILE'] = File.join(__dir__, 'Gemfile')
require 'bundler/setup'
require 'rack'
require 'rack-timeout'
require 'rack/deflater'
require 'rack/attack'

ROOT = File.expand_path(__dir__)
require_relative 'api/app'

# middleware stack (applied outside-in: last wrapper runs first)
app = App
app = Rack::Timeout.new(app, service_timeout: 10) # kill slow requests
app = Rack::Deflater.new(app)                     # gzip response body
app = Rack::Attack.new(app)                       # throttle/block rules (none => no-op)

env = {
  'REQUEST_METHOD' => ENV['REQUEST_METHOD'] || 'GET',
  'PATH_INFO' => ENV['PATH_INFO'] || '/',
  'QUERY_STRING' => ENV['QUERY_STRING'] || '',
  'rack.version' => [1, 6],
  'rack.input' => $stdin,
  'rack.errors' => $stderr,
  'rack.multithread' => false,
  'rack.multiprocess' => true,
  'rack.run_once' => false,
  'rack.url_scheme' => 'https',
  'SERVER_NAME' => ENV['SERVER_NAME'] || 'www.jacky.wtf',
  'SERVER_PORT' => ENV['SERVER_PORT'] || '443',
  'HTTP_HOST' => ENV['HTTP_HOST'] || 'www.jacky.wtf',
  'rack.hijack?' => false
}

status, headers, body = app.call(env)
print "Status: #{status}\r\n"
headers.each { |k, v| print "#{k}: #{v}\r\n" }
print "\r\n"
body.each { |part| print part }
