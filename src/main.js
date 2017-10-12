if (!global._babelPolyfill) require('babel-polyfill')

import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Vuetify from 'vuetify'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)
Vue.use(Vuetify)

// Regular server stuff
import '../static/robots.txt'
import '../static/sitemap.xml'


import routePaths from '../routes.js'

const Blog = () => import('./pages/Blog.vue')
const Results = () => import('./pages/results/Results.vue')
const Relaunch = () => import('./pages/relaunch/Relaunch.vue')
const Creature2017 = () => import('./pages/creature2017recap/Creature2017Recap.vue')

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
  }
]
routePaths.forEach((path, i, arr) => {
  routes[i + 1].path = path
})

const router = new Router({
  mode: 'history',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0}
  }
})

var root = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

document.addEventListener('DOMContentLoaded', function () {
  root.$mount('#app')
})
