build:
  bun run dist

deploy: build
  rsync --verbose --recursive _site/* foot@jacky.wtf:/var/www/html/
