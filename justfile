set export

build:
  bun run dist

clean:
  rm -rf _site

preview:
  bun run run

LOCAL_IP := `ip addr show dev wlp170s0 | grep inet | xargs | cut -f 2 -d ' ' | cut -f 1 -d '/'`

produce-resume-pdf:
  @rm $(pwd)/files/Jacky_Alcine-resume.pdf || echo ""
  @docker run -d --rm -p 3001:3000 gotenberg/gotenberg:8 2>/dev/null || echo ""
  curl --request \
    POST http://localhost:3001/forms/chromium/convert/url \
    --form url=http://${LOCAL_IP}:8080/work/ \
    --form marginTop="0.2in" \
    --form marginBottom="0.2in" \
    -o $(pwd)/files/Jacky_Alcine-resume.pdf

deploy: clean build produce-resume-pdf
  rsync --delete --verbose --recursive _site/* foot@jacky.wtf:/var/www/html/
