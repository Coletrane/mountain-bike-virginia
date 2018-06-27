import { s3Banners } from "../scripts/routes"

export default {
  state: {
    banners: [
      {
        url: "https://viralstyle.com/store/angelo-wash/Sketchcollect",
        img: `${s3Banners}/sketch-collect-banner.jpg`
      },
      {
        url: "https://www.visitroanokeva.com/",
        img: `${s3Banners}/virginias-blue-ridge.jpg`
      },
      {
        url: "https://parkwaybrewing.com/",
        img: `${s3Banners}/parkway.jpg`
      },
      {
        url: "https://www.deschutesbrewery.com/",
        img: `${s3Banners}/deschutes.jpg`
      },
      {
        url: "http://jackmasonstavern.com/",
        img: `${s3Banners}/jack-masons-tavern.jpg`
      }
    ]
  },

  actions: {
    randomBanner: context => {
      const notDisplayed = context.state.banners.filter(banner => {
        return !banner.displayed
      })

      let random
      if (notDisplayed.length > 0) {
        random = notDisplayed[Math.floor(Math.random() * notDisplayed.length)]
        context.state.banners.map(banner => {
          if (banner.url === random.url) {
            context.dispatch("bannerDisplayed", banner)
          }
        })
      }

      return random
    },
    bannerDisplayed: (context, banner) => {
      context.commit("BANNER_DISPLAYED", banner)
    },
    emptyBanners: context => {
      context.commit("EMPTY_BANNERS")
    }
  },

  mutations: {
    BANNER_DISPLAYED: (state, banner) => {
      state.banners.find(ban => ban.url === banner.url).displayed = true
    },
    ALL_BANNERS_LOADED: state => {},
    EMPTY_BANNERS: state => {
      state.banners.map(banner => (banner.displayed = false))
    }
  },

  getters: {
    allBannersDisplayed: state => {
      const displayedBanners = state.banners.filter(banner => {
        return banner.displayed === true
      })
      return displayedBanners.length === state.banners.length
    }
  }
}
