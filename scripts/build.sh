#!/usr/bin/env bash
yarn build
cp manifest.json build/manifest.json
cp public/css/style.css build/style.css
