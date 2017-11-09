// New Relic
require('newrelic')
// Modules
const express = require('express')
const { existsSync } = require('fs')
const { resolve } = require('path')
const { Nuxt } = require('nuxt')

const options = require('./nuxt.config')
// Force production mode (no webpack middleware called)
options.dev = false

// Start Nuxt.js
const nuxt = new Nuxt(options)
// Check if project is built for production
const distDir = resolve(nuxt.options.rootDir, nuxt.options.buildDir || '.nuxt', 'dist')
if (!existsSync(distDir)) {
  console.error('> No build files found, please run `nuxt build` before launching `npm start`') // eslint-disable-line no-console
  process.exit(1)
}

const port = process.env.PORT || process.env.npm_package_config_nuxt_port
const host = process.env.HOST || process.env.npm_package_config_nuxt_host

nuxt.listen(port, host)
