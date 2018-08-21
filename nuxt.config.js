const routes = require("./scripts/dev/build-routes-json")
const s3Routes = require("./routes")
require("dotenv").config()
const webpack = require("webpack")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin

module.exports = {
  css: [
    {
      src: "@/static/MyriadPro-Bold/styles.css",
      lang: "css"
    },
    {
      src: "bootstrap/dist/css/bootstrap-reboot.css",
      lang: "css"
    },
    {
      src: "bootstrap/dist/css/bootstrap-grid.css",
      lang: "css"
    }
  ],
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "index, follow" },
      { name: "revisit-after", content: "1 week" },
      { property: "fb:app_id", content: "1426359417419881" }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Lato"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: s3Routes.s3Favicons + "/apple-touch-icon.png?v=eE5JONrEL8"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: s3Routes.s3Favicons + "/favicon-32x32.png?v=eE5JONrEL8"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: s3Routes.s3Favicons + "/favicon-16x16.png?v=eE5JONrEL8"
      },
      {
        rel: "manifest",
        href: s3Routes.s3Favicons + "/site.webmanifest?v=eE5JONrEL8"
      },
      {
        rel: "mask-icon",
        href: s3Routes.s3Favicons + "/safari-pinned-tab.svg?v=eE5JONrEL8",
        color: "#3d7635"
      },
      {
        rel: "shortcut icon",
        href: s3Routes.s3Favicons + "/favicon.ico?v=eE5JONrEL8"
      }
    ]
  },
  plugins: [{ src: "~/plugins/vue-lazyload", ssr: false }],
  build: {
    extractCss: true,
    analyze: {
      analyzerMode: "static"
    },
    extend(config, { isDev, isClient }) {
      if (!isDev && process.env.ANALYZE) {
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: "static",
            generateStatsFile: true,
            openAnalyzer: true,
            logLevel: "info"
          })
        )
        return config
      }
    }
  },
  modules: [
    "@nuxtjs/sitemap",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-107968765-1"
      }
    ],
    "@nuxtjs/axios"
  ],
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://bikeva.com",
    cacheTime: 1000 * 60 * 60 * 24,
    generate: true,
    // Hack to prevent duplicates, remove when 1.0 is released
    exclude: ["/**/*"],
    routes: routes.routes.map(route => {
      return {
        url: route,
        changefreq: "daily",
        priority: 1,
        lastmodISO: new Date().toISOString()
      }
    })
  },
  render: {
    static: {
      maxAge: 1000 * 60 * 60 * 24
    }
  },
  router: {
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
    middleware: ["close-menu", "empty-das", "current-post"]
  },
  loading: {
    color: "#3d7635",
    height: "5px"
  },
  env: {
    prodWeather: process.env.WEATHER_PROD,
    testWeather: process.env.WEATHER_TEST,
    google: process.env.GOOGLE
  }
}
