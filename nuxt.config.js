const routes = require("./routes")
const sitemapRoutes = routes.appRoutes.map(route => {
  return {
    url: route,
    changefreq: "daily",
    priority: 1,
    lastmodISO: new Date().toISOString()
  }
})

module.exports = {
  head: {
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {name: "robots", content: "index, follow"},
      {name: "revisit-after", content: "3 month"},
      {name: "fb:app_id", content: "1426359417419881"}
    ],
    link: [
      {rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"},
      {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        integrity: "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",
        crossorigin: "anonymous"
      },
      // { rel: 'apple-touch-icon'}
      {rel: "icon", type: "image/x-icon", href: "/favicon.ico"}
    ]
  },
  plugins: [
    {src: "~/plugins/vuetify", ssr: true},
    {src: "~/plugins/vue-scrollto", ssr: false},
    {src: "~/plugins/vue-lazyload", ssr: true}
  ],
  css: [
    "vuetify/dist/vuetify.min.css"
  ],
  build: {
    extractCss: true,
    vendor: [
      "vuetify",
      "vue-scrollto",
      "vue-lazyload"
    ]
  },
  modules: [
    "@nuxtjs/sitemap",
    ["@nuxtjs/google-analytics",
      {
        id: "UA-107968765-1"
      }
    ]
  ],
  sitemap: {
    path: "/sitemap.xml",
    hostname: "http://bikeva.com",
    cacheTime: 1000 * 60 * 15,
    generate: false, // Enable me when using nuxt generate,
    exclude: routes.appRoutes,
    routes: sitemapRoutes
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  }
}
