import * as routes from '../scripts/routes'
import axios from 'axios'

export default {
  state: {
    loadedPosts: [],
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
      const newPage = context.rootState.routes.currentPage + 1
      let posts = []

      if (!context.rootState.routes.loadedPages.includes(newPage)) {
        await context.dispatch('setCurrentPage', newPage)
        posts = await context.dispatch('loadPosts', context.rootState.routes.pages[newPage])
      }

      return posts
    }
  },

  mutations: {
    POST_LOADED: (state, post) => {
      state.loadedPosts.push(post)
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
