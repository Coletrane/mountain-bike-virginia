import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _a28448ca = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _581b4e25 = () => import('../pages/spec-mines-oct-29-2017.vue' /* webpackChunkName: "pages/spec-mines-oct-29-2017" */).then(m => m.default || m)
const _1b15dc6d = () => import('../pages/relaunch.vue' /* webpackChunkName: "pages/relaunch" */).then(m => m.default || m)
const _4e3b3028 = () => import('../pages/dody-ridge-run-fall-2017.vue' /* webpackChunkName: "pages/dody-ridge-run-fall-2017" */).then(m => m.default || m)
const _30d120ed = () => import('../pages/creature-2017-recap.vue' /* webpackChunkName: "pages/creature-2017-recap" */).then(m => m.default || m)
const _79ac5dc6 = () => import('../pages/first-ride-2018.vue' /* webpackChunkName: "pages/first-ride-2018" */).then(m => m.default || m)
const _1596d9da = () => import('../pages/pivot-switchblade-review.vue' /* webpackChunkName: "pages/pivot-switchblade-review" */).then(m => m.default || m)
const _72c39702 = () => import('../pages/results.vue' /* webpackChunkName: "pages/results" */).then(m => m.default || m)



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
			component: _a28448ca,
			name: "index"
		},
		{
			path: "/spec-mines-oct-29-2017",
			component: _581b4e25,
			name: "spec-mines-oct-29-2017"
		},
		{
			path: "/relaunch",
			component: _1b15dc6d,
			name: "relaunch"
		},
		{
			path: "/dody-ridge-run-fall-2017",
			component: _4e3b3028,
			name: "dody-ridge-run-fall-2017"
		},
		{
			path: "/creature-2017-recap",
			component: _30d120ed,
			name: "creature-2017-recap"
		},
		{
			path: "/first-ride-2018",
			component: _79ac5dc6,
			name: "first-ride-2018"
		},
		{
			path: "/pivot-switchblade-review",
			component: _1596d9da,
			name: "pivot-switchblade-review"
		},
		{
			path: "/results",
			component: _72c39702,
			name: "results"
		}
    ],
    
    
    fallback: false
  })
}
