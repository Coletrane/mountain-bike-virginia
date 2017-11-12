import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _5ba4c862 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _077cef7e = () => import('../pages/spec-mines-oct-29-2017/index.vue' /* webpackChunkName: "pages/spec-mines-oct-29-2017/index" */).then(m => m.default || m)
const _3b4e2049 = () => import('../pages/relaunch/index.vue' /* webpackChunkName: "pages/relaunch/index" */).then(m => m.default || m)
const _6f8a44f7 = () => import('../pages/creature-2017-recap/index.vue' /* webpackChunkName: "pages/creature-2017-recap/index" */).then(m => m.default || m)
const _84f11f22 = () => import('../pages/pivot-switchblade-review/index.vue' /* webpackChunkName: "pages/pivot-switchblade-review/index" */).then(m => m.default || m)
const _a6cf54ee = () => import('../pages/results/index.vue' /* webpackChunkName: "pages/results/index" */).then(m => m.default || m)



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
			component: _5ba4c862,
			name: "index"
		},
		{
			path: "/spec-mines-oct-29-2017",
			component: _077cef7e,
			name: "spec-mines-oct-29-2017"
		},
		{
			path: "/relaunch",
			component: _3b4e2049,
			name: "relaunch"
		},
		{
			path: "/creature-2017-recap",
			component: _6f8a44f7,
			name: "creature-2017-recap"
		},
		{
			path: "/pivot-switchblade-review",
			component: _84f11f22,
			name: "pivot-switchblade-review"
		},
		{
			path: "/results",
			component: _a6cf54ee,
			name: "results"
		}
    ],
    fallback: false
  })
}
