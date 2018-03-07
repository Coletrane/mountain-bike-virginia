import Vuex from 'vuex'
import {races} from '../assets/results'

const createStore = () => {
  return new Vuex.Store({

    state: {
      page: 1,
      currentRaceName: races[0],
      loadedRaces: [],
      showMenu: false,
      loaded: false,
      googleMapsAttached: false
    },

    mutations: {
      changePage (state, page) {
        state.page = page
      },
      selectRace (state, race) {
        state.currentRaceName = race
      },
      raceLoaded (state, race) {
        state.loadedRaces.push(race)
      },
      toggleMenu (state) {
        state.showMenu = !state.showMenu
      },
      closeMenu (state) {
        state.showMenu = false
      },
      onLoad (state) {
        state.loaded = true
      },
      googleMapsAttached (state) {
        state.googleMapsAttached = true
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
