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
    loadAuthors: async (context, authorsRoutes) => {
      let authors = []

      for (const route of authorsRoutes) {
        if (!context.getters.getAuthor(route)) {
          let res = await axios.get(`${s3Authors}/${route}.json`)

          if (res.data) {
            let author = res.data
            author.imgUrl = `${s3StaticImg}/${author.imgUrl}`
            author.route = route
            authors.push(author)
          }
        }
      }

      context.commit('SET_AUTHORS', authors)

      if (authors.length === 1) {
        return authors[0]
      } else {
        return authors
      }
    }
  },

  mutations: {
    SET_AUTHORS: (state, authors) => {
      authors.forEach(author => {
        state.loadedAuthors.push(author)
      })
    }
  },

  getters: {
    getAuthor: state => route => {
      return state.loadedAuthors.find(author => author.route === route)
    }
  }

}
