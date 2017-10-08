import 'babel-polyfill'
import Vue from 'vue'
import router from './routes'
import App from './App.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})