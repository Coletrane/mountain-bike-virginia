import * as routes from '../scripts/routes'
import axios from 'axios'

export default {
  state: {
    loadedPosts: [],
    totalPages: 2,
    currentPage: 1,
    loadedPages: [1],
    pages: [
      [
        routes.battleAtBlackhorse2018,
        routes.battleAtBlackhorse2018Video,
        routes.ravenwoodRide,
        routes.tuesdayNightLightsVideoFeb2018,
        routes.rockstarVa2018,
        routes.middleMtMomma2018,
        routes.gravelocity2018,
        routes.firstRide2018
      ],
      [
        routes.dodyRidgeRunFall2017,
        routes.specMines29Oct17,
        routes.pivotSwitchbladeReview,
        routes.gravelocity2017Video,
        routes.creature2017Recap
      ]
    ]
  },

  actions: {
    loadPosts: async ({commit, state}, postsRoutes) => {
      let posts = []

      for (const route of postsRoutes) {
        if (!state.loadedPosts.includes(route)) {
          let res = await axios.get(`${routes.s3Posts}/${route}.json`)

          if (res.data) {
            let post = res.data
            post.route = route
            posts.push(post)
          }
        }
      }

      commit('SET_POSTS', posts)

      if (posts.length === 1) {
        return posts[0]
      } else {
        return posts
      }
    },
    setCurrentPage: ({commit, state}, page) => {
      commit('SET_CURRENT_PAGE', page)
      if (!state.loadedPages.includes(page)) {
        state.loadedPages.push(page)
      }
    }
  },

  mutations: {
    SET_POSTS: (state, posts) => {
      state.loadedPosts.push(posts)

      // Sort the posts based on the page order
      let newPosts = []
      state.pages.forEach(page => {
        page.forEach(post => {
          let existingPost = state.loadedPosts.find(p => p.route === post.route)
          if (existingPost) {
            newPosts.push(existingPost)
          }
        })
      })

      state.loadedPosts = newPosts
    },
    SET_CURRENT_PAGE: (state, page) => {
      state.currentPage = page
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
