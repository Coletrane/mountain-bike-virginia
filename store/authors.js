import {
  s3StaticImg,
  s3Authors
} from '../scripts/routes'
import axios from 'axios'

export default {
  state: {
    authors: []
  },

  actions: {
    getAuthors: async ({commit}) => {
      let res
      try {
        res = await axios.get(s3Authors)
      } catch (err) {
        console.log(err)
      }

      let authors = res.data
      Object.keys(authors).forEach((author) => {
        authors[author].imgUrl = `${s3StaticImg}/${authors[author].imgUrl}`
      })

      commit('setAuthors', authors)

      return authors
    }
  },

  mutations: {
    setAuthors (state, authors) {
      state.authors = authors
    }
  }

}
