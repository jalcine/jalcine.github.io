build:
  bun run dist

clean:
  rm -rf _site

deploy: clean build
  rsync --delete --verbose --recursive _site/* foot@jacky.wtf:/var/www/html/
