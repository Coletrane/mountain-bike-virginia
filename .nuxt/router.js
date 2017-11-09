import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _0d6fbade = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _6f50e8fd = () => import('../pages/spec-mines-oct-29-2017/_slug.vue' /* webpackChunkName: "pages/spec-mines-oct-29-2017/_slug" */).then(m => m.default || m)
const _a8e0cff6 = () => import('../pages/relaunch/_slug.vue' /* webpackChunkName: "pages/relaunch/_slug" */).then(m => m.default || m)
const _08c8802b = () => import('../pages/creature-2017-recap/_slug.vue' /* webpackChunkName: "pages/creature-2017-recap/_slug" */).then(m => m.default || m)
const _171e602b = () => import('../pages/pivot-switchblade-review/_slug.vue' /* webpackChunkName: "pages/pivot-switchblade-review/_slug" */).then(m => m.default || m)
const _74c06abd = () => import('../pages/results/_slug.vue' /* webpackChunkName: "pages/results/_slug" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _0d6fbade,
			name: "index"
		},
		{
			path: "/spec-mines-oct-29-2017/:slug?",
			component: _6f50e8fd,
			name: "spec-mines-oct-29-2017-slug"
		},
		{
			path: "/relaunch/:slug?",
			component: _a8e0cff6,
			name: "relaunch-slug"
		},
		{
			path: "/creature-2017-recap/:slug?",
			component: _08c8802b,
			name: "creature-2017-recap-slug"
		},
		{
			path: "/pivot-switchblade-review/:slug?",
			component: _171e602b,
			name: "pivot-switchblade-review-slug"
		},
		{
			path: "/results/:slug?",
			component: _74c06abd,
			name: "results-slug"
		}
    ],
    fallback: false
  })
}
