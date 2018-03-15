import {races} from '../assets/results'

export default {
  state: {
    currentRaceName: races[0],
    loadedRaces: [],
    showMenu: false,
    loaded: false
  },

  actions: {
    closeMenu (context) {
      context.commit('CLOSE_MENU')
    },
    onLoad (context) {
      context.commit('ON_LOAD')
    }
  },

  mutations: {
    selectRace (state, race) {
      state.currentRaceName = race
    },
    raceLoaded (state, race) {
      state.loadedRaces.push(race)
    },
    toggleMenu (state) {
      state.showMenu = !state.showMenu
    },
    CLOSE_MENU (state) {
      state.showMenu = false
    },
    ON_LOAD (state) {
      state.loaded = true
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
}
