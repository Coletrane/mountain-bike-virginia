import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({

    state: {
      page: 1,
      iframesDeferred: false,
      currentRaceIdx: 0
    },

    mutations: {
      changePage (state, page) {
        state.page = page
      },
      deferIframes (state) {
        state.iframesDeferred = true
      },
      changeRace (state, race) {
        state.currentRaceIdx = race
      }
    }

  })
}

export default createStore
