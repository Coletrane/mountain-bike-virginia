const routes = require('./scripts/routes')
const weather = require('./weather-api-key')
require('dotenv').config()

const sitemapRoutes = routes.appRoutes.map(route => {
  return {
    url: route,
    changefreq: 'daily',
    priority: 1,
    lastmodISO: new Date().toISOString()
  }
})

module.exports = {
  css: [
    {
      src: 'bootstrap/dist/css/bootstrap.css',
      lang: 'css'
    }
  ],
  head: {
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'robots', content: 'index, follow'},
      {name: 'revisit-after', content: '1 week'},
      {property: 'fb:app_id', content: '1426359417419881'}
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Julius+Sans+One|Lato'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: routes.s3Favicons + 'apple-touch-icon.png?v=eE5JONrEL8'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: routes.s3Favicons + 'favicon-32x32.png?v=eE5JONrEL8'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: routes.s3Favicons + 'favicon-16x16.png?v=eE5JONrEL8'
      },
      {
        rel: 'manifest',
        href: routes.s3Favicons + 'site.webmanifest?v=eE5JONrEL8'
      },
      {
        rel: 'mask-icon',
        href: routes.s3Favicons + 'safari-pinned-tab.svg?v=eE5JONrEL8',
        color: '#3d7635'
      },
      {
        rel: 'shortcut icon',
        href: 'favicon.ico?v=eE5JONrEL8'
      }
    ]
  },
  plugins: [
    {src: '~/plugins/vue-lazyload', ssr: false}
  ],
  build: {
    extractCss: true
  },
  modules: [
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-analytics',
      {
        id: 'UA-107968765-1'
      }
    ],
    '@nuxtjs/axios'
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'http://bikeva.com',
    cacheTime: 1000 * 60 * 15,
    generate: true,
    routes: sitemapRoutes
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return {x: 0, y: 0}
    },
    middleware: [
      'close-menu'
    ]
  },
  env: {
    prodWeather: process.env.WEATHER_PROD,
    testWeather: process.env.WEATHER_TEST,
    youTube: process.env.YOUTUBE
  }
}
