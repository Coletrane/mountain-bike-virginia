
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
      {
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
        integrity: 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm',
        crossorigin: 'anonymous'
      },
      {
        rel: 'stylesheet',
        src: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css',
      },
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js',
        integrity: 'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN',
        crossorigin: 'anonymous'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
        integrity: 'sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q',
        crossorigin: 'anonymous'
      },
      {
        src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
        integrity: 'sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl',
        crossorigin: 'anonymous'
      }
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
    ],
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
