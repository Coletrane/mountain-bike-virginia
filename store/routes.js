import {s3Routes} from '../scripts/routes'
import axios from 'axios'

export default {
  state: {
    pages: [],
    currentPage: -1,
    loadedPages: [],
    numberOfPages: 2
  },

  actions: {
    loadPage: async (context, pageNum) => {
      let resultRoutes = []

      if (pageNum < context.state.numberOfPages) {
        let res = await axios.get(`${s3Routes}/${pageNum}.json`)

        if (res.data) {
          resultRoutes = res.data

          context.commit('PAGE_LOADED', {
            routes: resultRoutes,
            page: pageNum
          })
        }
      }

      return resultRoutes
    },
    setCurrentPage: async (context, pageNum) => {
      let resultRoutes = []

      resultRoutes = await context.dispatch('loadPage', pageNum)
      if (resultRoutes.length > 0) {
        context.commit('SET_CURRENT_PAGE', pageNum)
      }

      return resultRoutes
    }
  },

   mutations: {
      PAGE_LOADED: (state, payload) => {
        state.loadedPages.push(payload.page)
        state.pages[payload.page] = payload.routes
      },
     SET_CURRENT_PAGE: (state, page) => {
        state.currentPage = page
     }
   }
}
