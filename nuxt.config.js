
const routes = require('./routes')
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
      src: 'bulma/css/bulma.css',
      lang: 'css'
    },
    {
      src: 'font-awesome/css/font-awesome.min.css',
      lang: 'css'
    }
  ],
  head: {
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'robots', content: 'index, follow'},
      {name: 'revisit-after', content: '1 month'},
      {name: 'fb:app_id', content: '1426359417419881'}
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Julius+Sans+One|Lato'
      },
      {
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        integrity: 'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN',
        crossorigin: 'anonymous'
      },
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  plugins: [
    {src: '~/plugins/vue-lazyload', ssr: false}
  ],
  build: {
    extractCss: true,
    vendor: [
      'vue-lazyload'
    ]
  },
  modules: [
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-analytics',
      {
        id: 'UA-107968765-1'
      }
    ]
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'http://bikeva.com',
    cacheTime: 1000 * 60 * 15,
    generate: true,
    exclude: routes.appRoutes,
    routes: sitemapRoutes
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  }
}
