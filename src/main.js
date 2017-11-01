if (!global._babelPolyfill) require('babel-polyfill')

import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Vuetify from 'vuetify'
import Meta from 'vue-meta'

// Regular server stuff
import '../static/robots.txt'
import '../static/favicons/manifest.json'


Vue.use(Router)
Vue.use(Meta)
Vue.use(Vuetify)

import routePaths from '../routes.js'

const Blog = () => import('./pages/Blog.vue')
const Results = () => import('./pages/results/Results.vue')
const Relaunch = () => import('./pages/relaunch/Relaunch.vue')
const Creature2017 = () => import('./pages/creature2017recap/Creature2017Recap.vue')
const PivotSwitchblade = () => import('./pages/pivot-switchblade-review/PivotSwitchbladeReview.vue')
const SpecMinesOct292017 = () => import('./pages/spec-mines-oct-29-2017/SpecMinesOct292017.vue')
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

var root = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

document.addEventListener('DOMContentLoaded', function () {
  root.$mount('#app')
})
