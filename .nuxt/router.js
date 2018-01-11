import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _0d6fbade = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _d09d057c = () => import('../pages/spec-mines-oct-29-2017.vue' /* webpackChunkName: "pages/spec-mines-oct-29-2017" */).then(m => m.default || m)
const _4f7bdb6c = () => import('../pages/relaunch.vue' /* webpackChunkName: "pages/relaunch" */).then(m => m.default || m)
const _e8ad786e = () => import('../pages/dody-ridge-run-fall-2017.vue' /* webpackChunkName: "pages/dody-ridge-run-fall-2017" */).then(m => m.default || m)
const _2bbd8ef0 = () => import('../pages/creature-2017-recap.vue' /* webpackChunkName: "pages/creature-2017-recap" */).then(m => m.default || m)
const _1eae4549 = () => import('../pages/first-ride-2018.vue' /* webpackChunkName: "pages/first-ride-2018" */).then(m => m.default || m)
const _b0092220 = () => import('../pages/pivot-switchblade-review.vue' /* webpackChunkName: "pages/pivot-switchblade-review" */).then(m => m.default || m)
const _40554f02 = () => import('../pages/results.vue' /* webpackChunkName: "pages/results" */).then(m => m.default || m)



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
			path: "/spec-mines-oct-29-2017",
			component: _d09d057c,
			name: "spec-mines-oct-29-2017"
		},
		{
			path: "/relaunch",
			component: _4f7bdb6c,
			name: "relaunch"
		},
		{
			path: "/dody-ridge-run-fall-2017",
			component: _e8ad786e,
			name: "dody-ridge-run-fall-2017"
		},
		{
			path: "/creature-2017-recap",
			component: _2bbd8ef0,
			name: "creature-2017-recap"
		},
		{
			path: "/first-ride-2018",
			component: _1eae4549,
			name: "first-ride-2018"
		},
		{
			path: "/pivot-switchblade-review",
			component: _b0092220,
			name: "pivot-switchblade-review"
		},
		{
			path: "/results",
			component: _40554f02,
			name: "results"
		}
    ],
    
    
    fallback: false
  })
}
