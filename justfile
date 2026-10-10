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
GH_PAGES_WORKTREE := ".gh-pages"

# Build and publish _site to the local gh-pages branch, then push it, bypassing CI.
# Checks the gh-pages branch out into a scratch worktree (no throwaway repo),
# mirrors the freshly built site onto it, commits and pushes. History on the
# branch is preserved across deploys.
# Requires Pages Source to be set to "Deploy from a branch: gh-pages"
# (mutually exclusive with the GitHub Actions workflow source).
publish-gh-pages: clean build
  #!/usr/bin/env bash
  set -euo pipefail
  touch _site/.nojekyll
  # Drop any stale worktree, then attach one to the gh-pages branch, creating
  # the branch (from the remote, or as a fresh orphan) if it does not exist yet.
  git worktree remove --force {{GH_PAGES_WORKTREE}} 2>/dev/null || true
  git worktree prune
  if git show-ref --verify --quiet refs/heads/gh-pages; then
    git worktree add {{GH_PAGES_WORKTREE}} gh-pages
  elif git ls-remote --exit-code --heads {{GH_PAGES_REMOTE}} gh-pages >/dev/null 2>&1; then
    git fetch {{GH_PAGES_REMOTE}} gh-pages:gh-pages
    git worktree add {{GH_PAGES_WORKTREE}} gh-pages
  else
    git worktree add --orphan -b gh-pages {{GH_PAGES_WORKTREE}}
  fi
  # Mirror the built site onto the branch (dropping files it no longer produces).
  rsync --archive --delete --exclude .git _site/ {{GH_PAGES_WORKTREE}}/
  git -C {{GH_PAGES_WORKTREE}} add --all
  git -C {{GH_PAGES_WORKTREE}} commit --message "Manual deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)" || echo "Nothing new to deploy."
  git -C {{GH_PAGES_WORKTREE}} push {{GH_PAGES_REMOTE}} gh-pages:gh-pages
  git worktree remove --force {{GH_PAGES_WORKTREE}}

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
