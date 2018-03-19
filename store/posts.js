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
        routes.creature2017Recap,
        routes.relaunch,
        routes.creature2016
      ]
    ]
  },

  actions: {
    loadPosts: async (context, postsRoutes) => {
      let returnPosts = []

      for (const route of postsRoutes) {
        if (!context.getters.getPost(route)) {
          let res = await axios.get(`${routes.s3Posts}/${route}.json`)

          if (res.data) {
            const post = res.data
            post.route = route

            if (post.author) {
              post.author = await context.dispatch('loadAuthor', post.author)
            }

            returnPosts.push(post)

            context.commit('SET_POST', post)
          }
        } else {
          returnPosts.push(context.getters.getPost(route))
        }
      }

      if (returnPosts.length === 1) {
        return returnPosts[0]
      } else if (returnPosts.length > 1) {
        return returnPosts
      }
    },
    incrementPage: async (context) => {
      const newPage = context.state.currentPage + 1
      let posts = []

      if (!context.state.loadedPages.includes(newPage)) {
        posts = await context.dispatch('loadPosts', context.state.pages[newPage - 1])
        context.commit('SET_CURRENT_PAGE', newPage)
      }

      return posts
    }
  },

  mutations: {
    SET_POST: (state, post) => {
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
