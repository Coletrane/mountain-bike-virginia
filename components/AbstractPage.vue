<template>
  <div class="abstract-page">
    <div v-if="pageLoaded">
      <div v-for="(postRoute, i) of $store.state.posts.loadedPages[page]">
        <transition-group name="new-page-fade">
            <component v-if="customPromoCard(postRoute)"
                       :is="getPostComponent(postRoute)"
                       key="0"/>
            <component v-else
                       :is="getPostComponent(postRoute)"
                       v-bind="{
                         postRoute: postRoute
                       }"
                       key="1"/>
        </transition-group>
        <banner v-if="(i + 1) % 3 === 0"/>
        <div v-if="!getPostComponent(postRoute) &&
                    getPostComponent(postRoute) !== 404"
             class="post-card-placeholder">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Banner from './Das/Banner'

  import {routeToComponentFilename} from '../assets/functions'
  import {schemaTypes} from '../assets/schmea-types'

  export default {
    name: 'abstract-page',
    props: {
      page: {
        type: Number,
        required: true
      }
    },
    components: {
      Banner,
    },
    data() {
      return {
        postComponents: []
      }
    },
    async created() {
      for (const postRoute of this.$store.state.posts.loadedPages[this.page]) {
        await this.loadPostComponent(postRoute)
      }
    },
    computed: {
      pageLoaded() {
        const loadedPage = this.$store.state.posts.loadedPages[this.page]
        const loadedPosts = this.$store.getters.posts(loadedPage)
        return loadedPage &&
               loadedPosts &&
               loadedPosts.length === loadedPage.length
      }
    },
    methods: {
      async loadPostComponent(postRoute) {
        const filename = routeToComponentFilename(postRoute)
        let postComponent = {
          route: postRoute
        }
        try {
          const esModule = await import(`@/components/PromoCards/${filename}`)
          postComponent.component = esModule.default
        } catch (err) {
          // No custom PostCard component
          const post = this.$store.getters.posts(postRoute)
          if (!post) {
            console.log(postRoute, this.$store.getters.posts(postRoute))
            console.log(this.$store.state.posts.loadedPosts.find(post => post.route === postRoute) )
          }
          if (post && post.ytSrc) {
            const videoPromo = await import('@/components/Card/VideoPromoCard')
            postComponent.component = videoPromo.default
          } else if (post && post.schema.type === schemaTypes.article) {
            const blogPromo = await import('@/components/Card/BlogPostPromoCard')
            postComponent.component = blogPromo.default
          } else {
            // Website is in middle of a deployment and routes json is out of sync with .js files on the server
            postComponent.component === 404
          }
        } finally {
          this.postComponents.push(postComponent)
        }
      },
      getPostComponent(postRoute) {
        const postComponent = this.postComponents.find(comp => {
          return comp.route === postRoute
        })

        if (postComponent && postComponent.component) {
          return postComponent.component
        }
      },
      customPromoCard(postRoute) {
        const postComponent = this.getPostComponent(postRoute)
        // TODO: evaluate optional chaining here
        return postComponent &&
               postComponent.component &&
               postComponent.component !== 404 &&
               postComponent.component.name !== 'video-promo-card' &&
               postComponent.component.name !== 'blog-post-promo-card'
      }
    }
  }
</script>
<style>
  .post-card-placeholder {
    width: 100%;
    height: 500px;
  }

  .new-page-fade-enter-to {
    transition: opacity 1s;
  }

  .new-page-fade-enter {
    opacity: 0;
  }
</style>