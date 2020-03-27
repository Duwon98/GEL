#!/usr/bin/env bash

# Exit on error, empty vars error
set -eu

# Install any missing npm packages
yarn

# Production build
yarn --cwd website build

# Reload the app (gracefully to minimise downtime)
pm2 startOrGracefulReload pm2-ecosystem.json

# Update the saved pm2 processes ($PM2_HOME/.pm2/dump.pm2) with those currently running
pm2 save