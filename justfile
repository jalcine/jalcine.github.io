set export

build:
  npm run dist

clean:
  rm -rf _site

preview:
  npm run run

LOCAL_IP := `ip addr show dev wlp170s0 | grep inet | xargs | cut -f 2 -d ' ' | cut -f 1 -d '/'`

produce-resume-pdf:
  @rm $(pwd)/files/Jacky_Alcine-resume.pdf || echo ""
  podman run -d --rm -p 3001:3000 docker.io/gotenberg/gotenberg:8.20 2>/dev/null || echo ""
  echo "Calling ${LOCAL_IP}:3001 to generate resume.";
  curl --request \
    POST http://localhost:3001/forms/chromium/convert/url \
    --form url=http://${LOCAL_IP}:8080/work/ \
    --form marginTop="0.2in" \
    --form marginBottom="0.2in" \
    -o $(pwd)/files/Jacky_Alcine-resume.pdf

deploy: clean build produce-resume-pdf
  rsync --archive --delete-delay --verbose --recursive _site/* foot@jacky.wtf:/var/www/html/

websub:
		# Send to Superfeeder.
		@curl https://pubsubhubbub.superfeedr.com \
				-d hub.mode=publish \
				-d hub.url\[\]=https://www.jacky.wtf/essays/feed.atom \
				-d hub.url\[\]=https://www.jacky.wtf/links/feed.atom \
				-d hub.url\[\]=https://www.jacky.wtf/weeknotes/feed.atom \
				-d hub.url\[\]=https://www.jacky.wtf/essays/ \
				-d hub.url\[\]=https://www.jacky.wtf/links/ \
				-d hub.url\[\]=https://www.jacky.wtf/weeknotes/ \
				-d hub.url\[\]=https://www.jacky.wtf/
