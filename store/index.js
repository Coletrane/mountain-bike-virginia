import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({

    state: {
      page: 1
    },

    mutations: {
      changePage(state, page) {
        state.page = page
      }
    }

  })
}

export default createStore
