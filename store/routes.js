import {s3Routes} from '../scripts/routes'
import axios from 'axios'

let initalRoutes = []
const getFirstPage = async () => {
  let res = await axios.get(`${s3Routes}/0.json`)
  if (res.data) {
    initialRoutes = res.data
  }
}

export default {
  state: {
    routes: [initalRoutes],
    currentPage: 0,
    loadedPages: [0]
  },

  actions: {
    loadPage: async (context, pageNum) => {
      let resultRoutes = []

      let res = await axios.get(`${s3Routes}/${pageNum}.json`)

      if (res.data) {
        resultRoutes = res.data

        context.commit('PAGE_LOADED', {
          routes: resultRoutes,
          page: pageNum
        })
      }

      return resultRoutes
    },
    incrementPage: async (context) => {
      let resultRoutes = []
      const newPage = context.state.currentPage + 1

      resultRoutes = await context.dispatch('loadPage', newPage)

      if (resultRoutes.length > 0) {
        context.commit('SET_CURRENT_PAGE')
      }

      return resultRoutes
    }
  },

   mutations: {
      PAGE_LOADED: (state, payload) => {
        state.loadedPages.push(payload.pageNum)
        state.routes[payload.pageNum] = payload.routes
      },
     SET_CURRENT_PAGE: (state, page) => {
        state.currentPage = page
     }
   }
}
