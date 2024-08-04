build:
  bun run dist

clean:
  rm -rf _site

preview:
  bun run run

produce-resume-pdf:
  #!/usr/bin/env bash
  rm files/Jacky_Alcine-resume.pdf
  export local_ip=$(ip addr show dev wlp170s0 | grep inet | xargs | cut -f 2 -d ' ' | cut -f 1 -d '/')
  docker run --name gotenburg -d --rm -p 3001:3000 gotenberg/gotenberg:8 2>/dev/null && sleep 3
  curl --silent --request \
    POST http://localhost:3001/forms/chromium/convert/url \
    --form url=http://${local_ip}:8080/work/ \
    --form marginTop="0.1in" \
    --form marginBottom="0.1in" \
    -o ./files/Jacky_Alcine_resume.pdf

deploy: clean build
  rsync --delete --verbose --recursive _site/* foot@jacky.wtf:/var/www/html/
