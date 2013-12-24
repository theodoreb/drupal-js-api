#!/bin/sh

rm -rf /home/theodore/dev/tmp/doc/*

cd /home/theodore/dev/DRUPAL/drupal-8
jsdoc -c /home/theodore/dev/JS/drupal-js-api/config.json core/misc core/modules

cd /home/theodore/dev/tmp/doc
find . -type f -name "*.html" -exec tidy -config /home/theodore/dev/tidyconf -m {} \;
