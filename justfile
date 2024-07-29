build:
  bun run dist

clean:
  rm -rf _site

preview:
  bun run run

deploy: clean build
  rsync --delete --verbose --recursive _site/* foot@jacky.wtf:/var/www/html/
