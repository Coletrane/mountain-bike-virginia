const path = require('path')
const express = require('express')
const compression = require('compression')
const history = require('connect-history-api-fallback')
const favicon = require('serve-favicon')
const sitemap = require('sitemap')
const routes = require('./routes')
const fs = require('fs')

const PORT = 9002

const root = path.join(__dirname, './dist')

// const server = fs.readFileSync(root + '/server.js')
const index = fs.readFileSync(root + '/index.html')
const renderer = require('vue-server-renderer').createBundleRenderer(index)

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
app.use(history())

app.use(express.static(root))
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

app.get('*', (req, res) => {
  renderer.renderToString(
    { url: req.url },
    (err, html) => {
      if (err) {
        console.log(err)
        return res.sendStatus(500)
      }
      res.send(index)
    }
  )
})


app.listen(process.env.PORT || PORT, function() {
  console.log('Environment: ', process.env.NODE_ENV)
  console.log('Mountain Bike Virginia running on port', PORT)
})
