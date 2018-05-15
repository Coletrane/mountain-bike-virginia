const directories = [
  'videos',
  'events'
]

export default {
  data() {
    return {
      post: this.$store.getters.getPost(this.componentRoute())
    }
  },
  methods: {
    componentRoute() {
      let componentRoute = ''
      let nameSplit = this.$options.name.split('-')
      if (directories.find(dir => dir === nameSplit[0])) {
        componentRoute = `${nameSplit[0]}/`
        nameSplit.splice(0, 1)
      }
      componentRoute += nameSplit.join('-')
      componentRoute = componentRoute.replace('-promo', '')
      return componentRoute
    }
  }
}