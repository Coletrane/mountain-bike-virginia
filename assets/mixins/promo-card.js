import {postDirs} from '../../constants'

export default {
  data() {
    return {
      post: this.$store.getters.posts(this.componentRoute())
    }
  },
  methods: {
    componentRoute() {
      let componentRoute = ''
      let nameSplit = this.$options.name.split('-')
      if (postDirs.find(dir => dir === nameSplit[0])) {
        componentRoute = `${nameSplit[0]}/`
        nameSplit.splice(0, 1)
      }
      componentRoute += nameSplit.join('-')
      componentRoute = componentRoute.replace('-promo', '')
      return componentRoute
    }
  }
}