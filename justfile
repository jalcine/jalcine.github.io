set export

LOCAL_IP := `ip addr show dev docker0 | grep inet | xargs | cut -f 2 -d ' ' | cut -f 1 -d '/'`
WEB_PORT := "1993"

build:
  npm run dist

clean:
  rm -rf _site

preview:
  npm run run -- --port ${WEB_PORT}

produce-resume-pdf:
  @rm $(pwd)/files/Jacky-Alcine_resume.pdf || echo ""
  podman run -d --rm -p 4001:3000 docker.io/gotenberg/gotenberg:8.20 || echo ""
  echo "Calling ${LOCAL_IP}:4001 to generate resume from ${LOCAL_IP}:${WEB_PORT}/work.";
  curl --request \
    POST http://localhost:4001/forms/chromium/convert/url \
    --form url=http://${LOCAL_IP}:${WEB_PORT}/work/ \
    --form marginTop="0.2in" \
    --form marginBottom="0.2in" \
    --output $(pwd)/files/Jacky-Alcine_resume.pdf

deploy: clean build produce-resume-pdf sequoia ship-nfs websub

sequoia: sequoia-publish sequoia-inject

sequoia-publish:
  npx sequoia publish

sequoia-inject:
  npx sequoia inject -o _site

websub:
		curl https://pubsubhubbub.superfeedr.com \
				-d hub.mode=publish \
				-d hub.url\[\]=https://www.jacky.wtf/essays/feed.atom \
				-d hub.url\[\]=https://www.jacky.wtf/links/feed.atom \
				-d hub.url\[\]=https://www.jacky.wtf/weeknotes/feed.atom \
				-d hub.url\[\]=https://www.jacky.wtf/essays/ \
				-d hub.url\[\]=https://www.jacky.wtf/links/ \
				-d hub.url\[\]=https://www.jacky.wtf/weeknotes/ \
				-d hub.url\[\]=https://www.jacky.wtf/

ship-nfs:
	(cd _site && rsync --archive --delete-delay --verbose --recursive . jacky.wtf:/home/public/ --exclude=vendor/bundle)

