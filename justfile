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

deploy: clean build produce-resume-pdf sequoia ship

sequoia: sequoia-publish sequoia-inject

sequoia-publish:
  npx sequoia publish

sequoia-inject:
  npx sequoia inject -o _site

ship:
  # Replace the files on the Web server.
  # NOTE: Toggle some sort of "alert" about this happening.
  # cd into _site and rsync `.` so dotfiles like .well-known/ are included
  # (a `_site/*` glob is shell-expanded and silently skips them).
  (cd _site && rsync --archive --delete-delay --verbose --recursive . www.jacky.wtf:/var/www/html)

GH_PAGES_REMOTE := "https://github.com/jalcine/jalcine.github.io.git"

# Build and force-push _site to the gh-pages branch, bypassing CI.
# Requires Pages Source to be set to "Deploy from a branch: gh-pages"
# (mutually exclusive with the GitHub Actions workflow source).
publish-gh-pages: clean build
  # _site is gitignored, so give it a throwaway repo, push it, then drop it.
  cd _site && \
    touch .nojekyll && \
    git init -q -b gh-pages && \
    git add -A && \
    git commit -q -m "Manual deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)" && \
    git push -f ${GH_PAGES_REMOTE} gh-pages:gh-pages && \
    rm -rf .git

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
