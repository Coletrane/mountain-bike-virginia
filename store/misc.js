export default {
  state: {
    showMenu: false,
    loaded: false,
    googleMapsAttached: false
  },

  actions: {
    toggleMenu: (context) => {
      context.commit('TOGGLE_MENU')
    },
    closeMenu: (context) => {
      context.commit('CLOSE_MENU')
    },
    onLoad: (context) => {
      context.commit('ON_LOAD')
    },
    googleMapsAttached: (context) => {
      context.commit('GOOGLE_MAPS_ATTACHED')
    }
  },

  mutations: {
    TOGGLE_MENU: (state) => {
      state.showMenu = !state.showMenu
    },
    CLOSE_MENU: (state) => {
      state.showMenu = false
    },
    ON_LOAD: (state) => {
      state.loaded = true
    },
    GOOGLE_MAPS_ATTACHED: (state) => {
      state.googleMapsAttached = true
    }
  }
}
