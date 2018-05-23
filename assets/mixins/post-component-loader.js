import {routeToComponentFilename} from '../functions'

export default {
  data() {
    return {
      postComponents: [],
      postComponentsLoaded: false
    }
  },
  async created() {
    // RelatedPosts.vue
    if (this.posts) {
      for (const post of this.posts) {
        await this.loadPostComponent(post.route)
      }
      if (this.postComponents.length ===
          this.posts.length) {
        this.postComponentsLoaded = true
      }
      // AbstractPage.vue
    } else {
      for (const postRoute of this.$store.state.routes.pages[this.page]) {
        await this.loadPostComponent(postRoute)
        if (this.postComponents.length ===
          this.$store.state.routes.pages[this.page].length) {
          this.postComponentsLoaded = true
        }
      }
    }
  },
  methods: {
    async loadPostComponent(postRoute) {
      const filename = routeToComponentFilename(postRoute)
      try {
        let esComponent = await import(`@/components/PromoCards/${filename}`)
        const component = {
          route: postRoute,
          component: esComponent.default
        }
        this.postComponents.push(component)
      } catch (err) {
        // Website is in middle of a deployment and routes json is out of sync with .js files on the server
        this.postComponents.push({
          route: postRoute,
          component: '404'
        })
      }
    },
    getPostComponent(postRoute) {
      const postComponent = this.postComponents.find(component => {
        return component.route === postRoute
      })

      if (postComponent && postComponent.component) {
        return postComponent.component
      }
    }
  }
}