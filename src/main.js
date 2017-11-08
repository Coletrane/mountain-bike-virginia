if (!global._babelPolyfill) require('babel-polyfill')

import Vue from 'vue'
import Router from 'vue-router'
import App from '../pages/App.vue'
// import Vuetify from 'vuetify'
import Meta from 'vue-meta'

// Regular server stuff
import '../robots.txt'

Vue.use(Router)
Vue.use(Meta)
// Vue.use(Vuetify)

import routePaths from '../routes.js'

import Blog from '../pages/Blog.vue'
import Results from '../pages/results/Results.vue'
import Relaunch from '../pages/relaunch/Relaunch.vue'
import Creature2017 from '../pages/creature2017recap/Creature2017Recap.vue'
import PivotSwitchblade from '../pages/pivot-switchblade-review/PivotSwitchbladeReview.vue'
import SpecMinesOct292017 from '../pages/spec-mines-oct-29-2017/SpecMinesOct292017.vue'
let routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    name: 'home',
    component: Blog
  },
  {
    name: 'results',
    component: Results,
  },
  {
    name: 'relaunch',
    component: Relaunch,
  },
  {
    name: 'creature2017recap',
    component: Creature2017
  },
  {
    name: 'pivot-switchblade-review',
    component: PivotSwitchblade
  },
  {
    name: 'spec-mines-oct-29-2017',
    component: SpecMinesOct292017
  }
]
routePaths.appRoutes.forEach((path, i, arr) => {
  routes[i + 1].path = path
})

const router = new Router({
  mode: 'history',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0}
  }
})

Vue.prototype.s3 = routePaths.s3Root

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

