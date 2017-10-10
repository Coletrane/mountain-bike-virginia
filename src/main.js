if (!global._babelPolyfill) require('babel-polyfill')

import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Vuetify from 'vuetify'

import routePaths from '../routes.js'

const Blog = () => import('./pages/Blog.vue')
const Results = () => import('./pages/results/Results.vue')
const Relaunch = () => import('./pages/relaunch/Relaunch.vue')
const Creature2017 = () => import('./pages/creature2017/Creature2017.vue')

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

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0}
  }
})

Vue.use(Vuetify)

var root = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

document.addEventListener('DOMContentLoaded', function () {
  root.$mount('#app')
})
