import Vuex from 'vuex'
import {races} from '../assets/results'

const createStore = () => {
  return new Vuex.Store({

    state: {
      page: 1,
      iframesDeferred: false,
      currentRaceName: races[0],
      loadedRaces: [],
      showMenu: false
    },

    mutations: {
      changePage (state, page) {
        state.page = page
      },
      deferIframes (state) {
        state.iframesDeferred = true
      },
      selectRace (state, race) {
        state.currentRaceName = race
      },
      addRace (state, race) {
        if (!state.loadedRaces.find(loaded => loaded.name === race.name)) {
          state.loadedRaces.push(race)
        }
      },
      toggleMenu (state) {
        state.showMenu = !state.showMenu
      },
      closeMenu (state) {
        state.showMenu = false
      }
    },

    getters: {
      currentRacePath: state => {
        return state.currentRaceName.split(' ').join('-').toLowerCase()
      },
      currentRace: state => {
        return state.loadedRaces.find(race => race.name === state.currentRaceName)
      }
    }

  })
}

export default createStore
