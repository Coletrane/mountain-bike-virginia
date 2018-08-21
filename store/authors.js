import { s3Authors, s3StaticImg } from "../routes"
import axios from "axios"

export default {
  state: {
    loadedAuthors: []
  },

  actions: {
    loadAuthor: async (context, route) => {
      let resultAuthor

      if (!context.getters.getAuthor(route)) {
        let res = await axios.get(`${s3Authors}/${route}.json`)

        if (res.data) {
          resultAuthor = res.data
          resultAuthor.imgUrl = `${s3StaticImg}/authors/${resultAuthor.imgUrl}`
          resultAuthor.route = route
          context.commit("AUTHOR_LOADED", resultAuthor)
        }
      } else {
        resultAuthor = context.getters.getAuthor(route)
      }

      return resultAuthor
    }
  },

  mutations: {
    AUTHOR_LOADED: (state, author) => {
      state.loadedAuthors.push(author)
    }
  },

  getters: {
    getAuthor: state => route => {
      return state.loadedAuthors.find(author => author.route === route)
    }
  }
}
