import {s3Banners} from '../scripts/routes'

export default {
  state: {
    allBannersLoaded: false,
    banners: [
      {
        url: 'https://viralstyle.com/store/angelo-wash/Sketchcollect',
        img: `${s3Banners}/sketch-collect-banner.jpg`
      },
      {
        url: 'https://www.visitroanokeva.com/',
        img: `${s3Banners}/virginias-blue-ridge.jpg`
      }
    ]
  },

  actions: {
    randomBanner: (context) => {
      const notDisplayed = context.state.banners.filter(banner => {
        return !banner.displayed
      })

      let random
      if (notDisplayed.length > 0) {
        random = notDisplayed[Math.floor(Math.random() * notDisplayed.length)]
        context.state.banners.map(banner => {
          if (banner.url === random.url) {
            context.dispatch('bannerDisplayed', banner)
          }
        })
      }

      // Fire off an action to signal all banners are loaded
      if (!context.state.allBannersLoaded &&
          context.state.banners.filter(banner => !banner.displayed).length === 0) {
        context.dispatch('allBannersLoaded')
      }

      return random
    },
    bannerDisplayed: (context, banner) => {
      context.commit('BANNER_DISPLAYED', banner)
    },
    allBannersLoaded: (context) => {
      context.commit('ALL_BANNERS_LOADED')
    },
    emptyBanners: (context) => {
      context.commit('EMPTY_BANNERS')
    }
  },

  mutations: {
    BANNER_DISPLAYED: (state, banner) => {
      state.banners.find(ban => ban.url === banner.url).displayed = true
    },
    ALL_BANNERS_LOADED: (state) => {
      state.allBannersLoaded = true
    },
    EMPTY_BANNERS: (state) => {
      state.allBannersLoaded = false
      state.banners.map(banner => banner.displayed = false)
    }
  },
}