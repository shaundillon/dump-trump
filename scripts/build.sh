#!/usr/bin/env bash
yarn build
cp public/js/background.js build/background.js
cp manifest.json build/manifest.json
cp public/css/style.css build/style.css
cp public/images/icon.png build/icon.png
