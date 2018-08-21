import { s3Posts, s3Routes } from "../routes"
import axios from "axios"

export const numPages = 3

export default {
  state: {
    loadedPosts: [],
    currentPost: {},
    loadedPages: [],
    currentPage: 0
  },

  actions: {
    loadPage: async context => {
      let resultRoutes = []

      if (
        context.state.currentPage < numPages &&
        !context.state.loadedPages[context.state.currentPage]
      ) {
        let res = await axios.get(
          `${s3Routes}/${context.state.currentPage}.json`
        )
        if (res.data) {
          resultRoutes = res.data
          context.commit("PAGE_LOADED", {
            routes: resultRoutes
          })

          return await context.dispatch("loadPosts", resultRoutes)
        }
      }
    },
    loadPosts: async (context, postsRoutes) => {
      let resultPosts = []

      for (const route of postsRoutes) {
        if (!context.getters.posts(route)) {
          let res = await axios.get(`${s3Posts}/${route}.json`)

          if (res.data) {
            const post = res.data
            post.route = route

            if (post.author) {
              let authorArr = []
              for (const author of post.author.split(" ")) {
                await context.dispatch("loadAuthor", author)
                authorArr.push(context.getters.getAuthor(author))
              }
              if (authorArr.length === 1) {
                post.author = authorArr[0]
              } else {
                post.author = authorArr
              }
            }

            resultPosts.push(post)

            context.commit("POST_LOADED", post)
          }
        } else {
          resultPosts.push(context.getters.posts(route))
        }
      }

      if (resultPosts.length === 1) {
        return resultPosts[0]
      } else if (resultPosts.length > 1) {
        return resultPosts
      }
    },
    setCurrentPost: (context, postRoute) => {
      if (
        !context.state.currentPost ||
        context.state.currentPost.route !== postRoute
      ) {
        context.commit("SET_CURRENT_POST", postRoute)
      }
    }
  },

  mutations: {
    POST_LOADED: (state, post) => {
      state.loadedPosts.push(post)
    },
    SET_CURRENT_POST: (state, postRoute) => {
      state.currentPost = postRoute
    },
    PAGE_LOADED: (state, payload) => {
      state.loadedPages[state.currentPage] = payload.routes
      state.currentPage += 1
    },
    SET_CURRENT_PAGE: (state, page) => {
      state.currentPage = page
    }
  },

  getters: {
    posts: state => routes => {
      let posts = []
      if (!Array.isArray(routes)) {
        routes = [routes]
      }

      routes.forEach(route => {
        let foundPost = state.loadedPosts.find(post => post.route === route)
        if (foundPost) {
          posts.push(foundPost)
        }
      })

      if (posts.length <= 1) {
        return posts[0]
      } else {
        return posts
      }
    }
  }
}
