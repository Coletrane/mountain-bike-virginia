const path = require('path')
const express = require('express')
const compression = require('compression')
const history = require('connect-history-api-fallback')
const favicon = require('serve-favicon')
const sitemap = require('sitemap')
const routes = require('./routes')

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

const PORT = 9002

const root = path.join(__dirname, './dist')

app.use(compression())
app.use(history())

app.use(express.static(root))
app.use(favicon(root + '/favicon.ico'))
app.use('*/favicon-16x16.png', express.static(root + '/favicon-16x16.png'))
app.use('*/favicon-32x32.png', express.static(root + '/favicon-32x32.png'))
app.use('/robots.txt', express.static(root + '/robots.txt'))
app.use('/manifest.json', express.static(root + '/manifest.json'))
app.get('/sitemap.xml', (req, res) => {
  sm.toXML((err, xml) => {
    if (err) {
      return res.status(500).end()
    }
    res.header('Content-Type', 'application/xml')
    res.send(xml)
  })
})

for (let img in routes.imgRoutes) {
  if (routes.imgRoutes.hasOwnProperty(img)) {
    app.get(img, (req, res) => {
      res.sendFile(img)
    })
  }
}


app.listen(process.env.PORT || PORT, function() {
  console.log('Environment: ', process.env.NODE_ENV)
  console.log('Mountain Bike Virginia running on port', PORT)
})
