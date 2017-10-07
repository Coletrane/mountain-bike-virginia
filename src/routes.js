import Vue from 'vue'
import Router from 'vue-router'

import Blog from './pages/blog/Blog.vue'
import Results from './pages/results/Results.vue'
import Relaunch from './pages/relaunch/Relaunch.vue'
import Creature2017 from './pages/creature2017/Creature2017.vue'

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