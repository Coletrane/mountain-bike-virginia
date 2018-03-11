import * as routes from '../scripts/routes'
import axios from 'axios'

export default {
  state: {
    posts: []
  },

  actions: {
    getPosts: async ({commit, state}) => {
      let res
      try {
        res = await axios.get(routes.s3Posts)
      } catch (err) {
        console.log(err)
      }

      let posts = res.data
      Object.keys(posts).forEach((post) => {
        if (state.authors) {
          posts[post].author = state.authors[posts[post].author]
        }
        posts[post].route = routes[posts[post].route]
      })

      commit('setPosts', posts)

      return posts
    }
  },

  mutations: {
    setPosts (state, posts) {
      state.posts = posts
    }
  }
}
