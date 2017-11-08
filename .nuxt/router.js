import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _b6eda334 = () => import('../pages/Blog.vue' /* webpackChunkName: "pages/Blog" */).then(m => m.default || m)
const _832a1ce6 = () => import('../pages/App.vue' /* webpackChunkName: "pages/App" */).then(m => m.default || m)
const _1cfc4426 = () => import('../pages/BlogPost.vue' /* webpackChunkName: "pages/BlogPost" */).then(m => m.default || m)
const _e8eb02fa = () => import('../pages/spec-mines-oct-29-2017/SpecMinesOct292017.vue' /* webpackChunkName: "pages/spec-mines-oct-29-2017/SpecMinesOct292017" */).then(m => m.default || m)
const _63f09d9b = () => import('../pages/relaunch/Relaunch.vue' /* webpackChunkName: "pages/relaunch/Relaunch" */).then(m => m.default || m)
const _678ce1f5 = () => import('../pages/creature2017recap/Creature2017Recap.vue' /* webpackChunkName: "pages/creature2017recap/Creature2017Recap" */).then(m => m.default || m)
const _205ed0ee = () => import('../pages/pivot-switchblade-review/PivotSwitchbladeReview.vue' /* webpackChunkName: "pages/pivot-switchblade-review/PivotSwitchbladeReview" */).then(m => m.default || m)
const _2f92cb6e = () => import('../pages/results/Results.vue' /* webpackChunkName: "pages/results/Results" */).then(m => m.default || m)



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
			path: "/Blog",
			component: _b6eda334,
			name: "Blog"
		},
		{
			path: "/App",
			component: _832a1ce6,
			name: "App"
		},
		{
			path: "/BlogPost",
			component: _1cfc4426,
			name: "BlogPost"
		},
		{
			path: "/spec-mines-oct-29-2017/SpecMinesOct292017",
			component: _e8eb02fa,
			name: "spec-mines-oct-29-2017-SpecMinesOct292017"
		},
		{
			path: "/relaunch/Relaunch",
			component: _63f09d9b,
			name: "relaunch-Relaunch"
		},
		{
			path: "/creature2017recap/Creature2017Recap",
			component: _678ce1f5,
			name: "creature2017recap-Creature2017Recap"
		},
		{
			path: "/pivot-switchblade-review/PivotSwitchbladeReview",
			component: _205ed0ee,
			name: "pivot-switchblade-review-PivotSwitchbladeReview"
		},
		{
			path: "/results/Results",
			component: _2f92cb6e,
			name: "results-Results"
		}
    ],
    fallback: false
  })
}
