import * as routes from '../scripts/routes'
import axios from 'axios'

export default {
  state: {
    posts: [],
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
    getPosts: async ({commit, state}, page) => {
      let posts = []

      Object.keys(posts).forEach((post) => {
        if (state.authors) {
          posts[post].author = state.authors[posts[post].author]
        }
        posts[post].route = routes[posts[post].route]
      })

      commit('setPosts', posts)

      return posts
    },
    getPost: async ({commit, state}, route) => {
      if (routes.appRoutes.includes(route)) {
        let res = await axios.get(`${routes.s3Posts}/${route}.json`)

        if (res.data) {
          let post = res.data
          post.route = route

          commit('addPost', post)

          return post
        } else {
          throw new Error('not a route')
        }
      }
    },
    setCurrentPage: ({commit, state}, page) => {
      commit('setCurrentPage', page)
      if (!state.loadedPages.includes(page)) {
        state.loadedPages.push(page)
      }
    },
    setCurrentPost: ({commit, state}, post) => {
      commit('setCurrentPost', post)
    },
    setCurrentRelatedPosts: ({commit, state}, posts) => {
      commit('setCurrentRelatedPosts', posts)
    }
  },

  mutations: {
    addPost: (state, post) => {
      const postExists = Object.keys(state.posts)
        .find(p => p.route === post.route)
      if (!postExists) {
        state.posts.push(post)

        // Sort the posts based on the page order
        let newPosts = []
        state.pages[0].forEach(page => {
          page.forEach(post => {
            let existingPost = state.posts.find(p => p.route === post.route)
            if (existingPost) {
              newPosts.push(existingPost)
            }
          })
        })

        state.posts = newPosts
      }
    },
    setCurrentPage: (state, page) => {
      state.currentPage = page
    },
    setCurrentPost: (state, post) => {
      state.currentPost = post
    },
    setCurrentRelatedPosts: (state, posts) => {
      state.currentRelatedPosts = posts
    }
  },

  getters: {
    getPost: state => route => {
      return state.posts.find(post => post.route === route)
    },
    getPosts: state => routes => {
      let posts = []
      routes.forEach(route => {
        let foundPost = state.posts
          .find(post => post.route === route)
        if (foundPost) {
          posts.push(foundPost)
        }
      })
      return posts
    }
  }

}
