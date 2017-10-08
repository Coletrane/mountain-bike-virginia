import Vue from 'vue'
import Router from 'vue-router'

const Blog = () => import('./pages/blog/Blog.vue')
const Results = () => import('./pages/results/Results.vue')
const Relaunch = () => import('./pages/relaunch/Relaunch.vue')
const Creature2017 = () => import('./pages/creature2017/Creature2017.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/results',
      name: 'results',
      component: Results,
    },
    {
      path: '/relaunch',
      name: 'relaunch',
      component: Relaunch,
    },
    {
      path: '/creature2017',
      name: 'creature2017',
      component: Creature2017
    }
  ]
})