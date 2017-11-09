require('newrelic')
const { existsSync } = require('fs')
const { resolve } = require('path')
const { Nuxt } = require('nuxt')
const express = require('express')
const compression = require('compression')
const history = require('connect-history-api-fallback')
const favicon = require('serve-favicon')
const sitemap = require('sitemap')
const routes = require('./routes')

const options = require('./nuxt.config')
const PORT = 9002
const staticRoot = resolve(__dirname, './dist')

const nuxt = new Nuxt(options)

let urls = []
routes.appRoutes.forEach(route => {
  let priority
  if (route === '/') {
    priority = 1.0
  } else {
    priority = 0.8
  }

  urls.push({
    url: route,
    changefreq: 'weekly',
    priority: priority
  })
})
const app = express()
  , sm = sitemap.createSitemap({
      hostname: 'http://bikeva.com',
      cacheTime: 600000,
      urls: urls
})

app.use(compression())

// Check if project is built for production
const distDir = resolve(nuxt.options.rootDir, nuxt.options.buildDir || '.nuxt', 'dist')
if (!existsSync(distDir)) {
  console.error('> No build files found, please run `nuxt build` before launching `npm start`') // eslint-disable-line no-console
  process.exit(1)
}

// app.use(history())

app.use(express.static(staticRoot))


// app.get('/sitemap.xml', (req, res) => {
//   sm.toXML((err, xml) => {
//     if (err) {
//       return res.status(500).end()
//     }
//     res.header('Content-Type', 'application/xml')
//     res.send(xml)
//   })
// })

// nuxt.listen(process.env.PORT || PORT, function() {
//   console.log('Mountain Bike Virginia running on port', PORT)
// })
app.listen(process.env.PORT || PORT, function() {
  console.log('Environment: ', process.env.NODE_ENV)
  console.log('Mountain Bike Virginia running on port', PORT)
})
