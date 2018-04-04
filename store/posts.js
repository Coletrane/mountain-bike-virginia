import * as routes from '../scripts/routes'
import axios from 'axios'

const postsOrder = [
  routes.hoopHoleTrailWork2018,
  routes.caneCreekViscosetReview,
  routes.dtSwiss54tRatchetReview,
  routes.battleAtBlackhorse2018,
  routes.battleAtBlackhorse2018Video,
  routes.ravenwoodRide,
  routes.tuesdayNightLightsVideoFeb2018,
  routes.rockstarVa2018,
  routes.middleMtMomma2018,
  routes.gravelocity2018,
  routes.firstRide2018,
  routes.dodyRidgeRunFall2017,
  routes.specMines29Oct17,
  routes.pivotSwitchbladeReview,
  routes.gravelocity2017Video,
  routes.creature2017Recap,
  routes.relaunch,
  routes.creature2016
]

// Will always be 1 less than total pages since last page will have the rest
const postsPerPage = [
  10
]
postsPerPage.push(
  postsOrder.length - postsPerPage.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  })
)

const pages = []
// "Initialize" multi dimensional array
postsPerPage.forEach((perPage, page, arr) => {
  pages[page] = []
})

let postsOrderCount = 0
pages.forEach((page, pageNumber, pagesArr) => {
  for (let i = 0; i < postsPerPage[pageNumber]; i++) {
    pages[pageNumber][i] = postsOrder[postsOrderCount]
    postsOrderCount++
  }
})

export default {
  state: {
    loadedPosts: [],
    currentPage: -1, // This is incremented after posts are loaded in index.vue
    loadedPages: [0],
    pages: pages
  },

  actions: {
    loadPosts: async (context, postsRoutes) => {
      let resultPosts = []

      for (const route of postsRoutes) {
        if (!context.getters.getPost(route)) {
          let res = await axios.get(`${routes.s3Posts}/${route}.json`)

          if (res.data) {
            const post = res.data
            post.route = route

            if (post.author) {
              post.author = await context.dispatch('loadAuthor', post.author)
            }

            resultPosts.push(post)

            context.commit('POST_LOADED', post)
          }
        } else {
          resultPosts.push(context.getters.getPost(route))
        }
      }

      if (resultPosts.length === 1) {
        return resultPosts[0]
      } else if (resultPosts.length > 1) {
        return resultPosts
      }
    },
    incrementPage: async (context) => {
      const newPage = context.state.currentPage + 1
      let posts = []

      if (!context.state.loadedPages.includes(newPage)) {
        posts = await context.dispatch('loadPosts', context.state.pages[newPage])
      }

      context.commit('SET_CURRENT_PAGE', newPage)

      return posts
    }
  },

  mutations: {
    POST_LOADED: (state, post) => {
      state.loadedPosts.push(post)
    },
    SET_CURRENT_PAGE: (state, page) => {
      state.currentPage = page
      if (!state.loadedPages.includes(page)) {
        state.loadedPages.push(page)
      }
    }
  },

  getters: {
    getPost: state => route => {
      return state.loadedPosts.find(post => post.route === route)
    },
    getPosts: state => routes => {
      let posts = []
      routes.forEach(route => {
        let foundPost = state.loadedPosts
          .find(post => post.route === route)
        if (foundPost) {
          posts.push(foundPost)
        }
      })
      return posts
    }
  }
}
