import {
  s3StaticImg,
  s3Authors
} from '../scripts/routes'
import axios from 'axios'

export default {
  state: {
    loadedAuthors: []
  },

  actions: {
    loadAuthor: async (context, route) => {
      let author

      if (!context.getters.getAuthor(route)) {
        let res = await axios.get(`${s3Authors}/${route}.json`)

        if (res.data) {
          author = res.data
          author.imgUrl = `${s3StaticImg}/${author.imgUrl}`
          author.route = route
          context.commit('SET_AUTHOR', author)
        }
      } else {
        author = context.getters.getAuthor(route)
      }

      return author
    }
  },

  mutations: {
    SET_AUTHOR: (state, author) => {
      state.loadedAuthors.push(author)
    }
  },

  getters: {
    getAuthor: state => route => {
      return state.loadedAuthors.find(author => author.route === route)
    }
  }

}
