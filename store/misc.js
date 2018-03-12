import {races} from '../assets/results'

export default {
  state: {
    page: 1,
    currentRaceName: races[0],
    loadedRaces: [],
    showMenu: false,
    loaded: false
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
    closeMenu (state) {
      state.showMenu = false
    },
    onLoad (state) {
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
