module.exports = {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content:'index, follow'},
      { name: 'revisit-after', content: '3 month'},
      { name: 'fb:app_id', content: '1426359417419881'}
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', integrity: 'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN', crossorigin: 'anonymous'},
      // { rel: 'apple-touch-icon'}
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
    { src: '~/plugins/vuetify.js', ssr: true }
  ],
  css: [
    'vuetify/dist/vuetify.min.css'
  ],
  build: {
    extractCss: true
  },
  env: {
    s3: 'https://s3.amazonaws.com/mtbva',
    baseUrl: 'http://bikeva.com'
  }
}
