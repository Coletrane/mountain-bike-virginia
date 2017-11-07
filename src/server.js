import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Regular server stuff
import '../robots.txt'

export default(context) => {
  router.push(context.url)
  return Promise.resolve(new Vue({
    router,
    App
  }))
}
