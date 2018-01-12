import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _5ba4c862 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _c45eaf84 = () => import('../pages/spec-mines-oct-29-2017.vue' /* webpackChunkName: "pages/spec-mines-oct-29-2017" */).then(m => m.default || m)
const _2fdc3374 = () => import('../pages/relaunch.vue' /* webpackChunkName: "pages/relaunch" */).then(m => m.default || m)
const _f2acc076 = () => import('../pages/dody-ridge-run-fall-2017.vue' /* webpackChunkName: "pages/dody-ridge-run-fall-2017" */).then(m => m.default || m)
const _72baa574 = () => import('../pages/creature-2017-recap.vue' /* webpackChunkName: "pages/creature-2017-recap" */).then(m => m.default || m)
const _51a33dcd = () => import('../pages/first-ride-2018.vue' /* webpackChunkName: "pages/first-ride-2018" */).then(m => m.default || m)
const _ba086a28 = () => import('../pages/pivot-switchblade-review.vue' /* webpackChunkName: "pages/pivot-switchblade-review" */).then(m => m.default || m)
const _5505e8f4 = () => import('../pages/results.vue' /* webpackChunkName: "pages/results" */).then(m => m.default || m)



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
			component: _c45eaf84,
			name: "spec-mines-oct-29-2017"
		},
		{
			path: "/relaunch",
			component: _2fdc3374,
			name: "relaunch"
		},
		{
			path: "/dody-ridge-run-fall-2017",
			component: _f2acc076,
			name: "dody-ridge-run-fall-2017"
		},
		{
			path: "/creature-2017-recap",
			component: _72baa574,
			name: "creature-2017-recap"
		},
		{
			path: "/first-ride-2018",
			component: _51a33dcd,
			name: "first-ride-2018"
		},
		{
			path: "/pivot-switchblade-review",
			component: _ba086a28,
			name: "pivot-switchblade-review"
		},
		{
			path: "/results",
			component: _5505e8f4,
			name: "results"
		}
    ],
    
    
    fallback: false
  })
}
