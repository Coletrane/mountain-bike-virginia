import {s3Authors, s3StaticImg} from '../scripts/routes'
import axios from 'axios'

export default {
  state: {
    loadedAuthors: []
  },

  actions: {
    loadAuthor: async (context, route) => {
      let resultAuthor

     for (const author of route.split(' ')) {
       if (!context.getters.getAuthor(author)) {
         let res = await axios.get(`${s3Authors}/${author}.json`)

         if (res.data) {
           resultAuthor = res.data
           resultAuthor.imgUrl = `${s3StaticImg}/authors/${resultAuthor.imgUrl}`
           resultAuthor.route = author
           context.commit('AUTHOR_LOADED', resultAuthor)
         }
       } else {
         resultAuthor = context.getters.getAuthor(author)
       }
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
