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
    redirect: '/home'
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
    name: 'creature2017',
    component: Creature2017
  }
]
routePaths.forEach((path, i, arr) => {
  routes[i].path = path
})
console.log(routes)
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: routes
})

Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
