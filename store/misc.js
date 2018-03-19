export default {
  state: {
    showMenu: false,
    loaded: false
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
    }
  }
}
