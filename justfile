set export

build:
  npm run dist

clean:
  rm -rf _site

preview:
  npm run run

LOCAL_IP := `ip addr show dev docker0 | grep inet | xargs | cut -f 2 -d ' ' | cut -f 1 -d '/'`

produce-resume-pdf:
  @rm $(pwd)/files/resume.pdf || echo ""
  podman run -d --rm -p 4001:3000 docker.io/gotenberg/gotenberg:8.20 || echo ""
  echo "Calling ${LOCAL_IP}:4001 to generate resume from ${LOCAL_IP}:8081/work.";
  curl --request \
    POST http://localhost:4001/forms/chromium/convert/url \
    --form url=http://${LOCAL_IP}:8081/work/ \
    --form marginTop="0.2in" \
    --form marginBottom="0.2in" \
    --output $(pwd)/files/resume.pdf

deploy: clean build sequoia-publish sequoia-inject ship

sequoia-publish:
  npx sequoia publish

sequoia-inject:
  npx sequoia inject -o _site

ship:
  # Replace the files on the Web server.
  # NOTE: Toggle some sort of "alert" about this happening.
  rsync --archive --delete-delay --verbose --recursive _site/* www.jacky.wtf:/var/www/html

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
