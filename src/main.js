if (!global._babelPolyfill) require('babel-polyfill')

import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Meta from 'vue-meta'
import router from './router'

Vue.use(Meta)
Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  App
})

