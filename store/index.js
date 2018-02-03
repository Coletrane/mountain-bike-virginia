import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({

    state: {
      page: 1,
      iframesDeferred: false
    },

    mutations: {
      changePage (state, page) {
        state.page = page
      },
      deferIframes (state) {
        state.iframesDeferred = true
      }
    }

  })
}

export default createStore
