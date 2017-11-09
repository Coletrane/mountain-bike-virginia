import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _5ba4c862 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _0aea320e = () => import('../pages/spec-mines-oct-29-2017/_slug.vue' /* webpackChunkName: "pages/spec-mines-oct-29-2017/_slug" */).then(m => m.default || m)
const _39977f01 = () => import('../pages/relaunch/_slug.vue' /* webpackChunkName: "pages/relaunch/_slug" */).then(m => m.default || m)
const _6dd3a3af = () => import('../pages/creature-2017-recap/_slug.vue' /* webpackChunkName: "pages/creature-2017-recap/_slug" */).then(m => m.default || m)
const _885e61b2 = () => import('../pages/pivot-switchblade-review/_slug.vue' /* webpackChunkName: "pages/pivot-switchblade-review/_slug" */).then(m => m.default || m)
const _aa3c977e = () => import('../pages/results/_slug.vue' /* webpackChunkName: "pages/results/_slug" */).then(m => m.default || m)



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
			path: "/spec-mines-oct-29-2017/:slug?",
			component: _0aea320e,
			name: "spec-mines-oct-29-2017-slug"
		},
		{
			path: "/relaunch/:slug?",
			component: _39977f01,
			name: "relaunch-slug"
		},
		{
			path: "/creature-2017-recap/:slug?",
			component: _6dd3a3af,
			name: "creature-2017-recap-slug"
		},
		{
			path: "/pivot-switchblade-review/:slug?",
			component: _885e61b2,
			name: "pivot-switchblade-review-slug"
		},
		{
			path: "/results/:slug?",
			component: _aa3c977e,
			name: "results-slug"
		}
    ],
    fallback: false
  })
}
