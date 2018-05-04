import { s3Posts } from '../scripts/routes'
import axios from 'axios'

export default {
  state: {
    loadedPosts: [],
    currentPost: {}
  },

  actions: {
    loadPosts: async (context, postsRoutes) => {
      let resultPosts = []

      for (const route of postsRoutes) {
        if (!context.getters.getPost(route)) {
          let res = await axios.get(`${s3Posts}/${route}.json`)

          if (res.data) {
            const post = res.data
            post.route = route

            if (post.author) {
              let authorArr = []
              for (const author of post.author.split(' ')) {
                await context.dispatch('loadAuthor', author)
                authorArr.push(context.getters.getAuthor(author))
              }
              if (authorArr.length === 1) {
                post.author = authorArr[0]
              } else {
                post.author = authorArr
              }
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

      if (!context.rootState.routes.loadedPages.includes(newPage) &&
          context.rootState.routes.numberOfPages > newPage) {
        await context.dispatch('setCurrentPage', newPage)
        posts = await context.dispatch('loadPosts', context.rootState.routes.pages[newPage])
      }

      return posts
    },
    setCurrentPost: (context, postRoute) => {
      if (!context.state.currentPost ||
          context.state.currentPost.route !== postRoute) {
        context.commit('SET_CURRENT_POST', postRoute)
      }
    }
  },

  mutations: {
    POST_LOADED: (state, post) => {
      state.loadedPosts.push(post)
    },
    SET_CURRENT_POST: (state, postRoute) => {
      state.currentPost = postRoute
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
