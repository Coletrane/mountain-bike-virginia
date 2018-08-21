<template>
  <div class="abstract-page">
    <div v-if="pageLoaded">
      <div v-for="(postRoute, i) of $store.state.posts.loadedPages[page]">
        <transition name="new-page-fade">
          <component v-if="getPostComponent(postRoute)"
                     :is="getPostComponent(postRoute)"
                     v-bind="{
                         postRoute: postRoute
                       }"/>
        </transition>
        <banner v-if="(i + 1) % 3 === 0"/>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "./Das/Banner"

import { routeToComponentFilename } from "../scripts/client/functions"

export default {
  name: "abstract-page",
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    Banner
  },
  data() {
    return {
      postComponents: []
    }
  },
  computed: {
    async pageLoaded() {
      const loadedPage = this.$store.state.posts.loadedPages[this.page]
      const loadedPosts = this.$store.getters.posts(loadedPage)
      const pageLoaded =
        loadedPage && loadedPosts && loadedPosts.length === loadedPage.length
      if (pageLoaded) {
        for (const postRoute of loadedPage) {
          await this.loadPostComponent(postRoute)
        }
      }

      return pageLoaded
    }
  },
  methods: {
    async loadPostComponent(postRoute) {
      let post = this.$store.getters.posts(postRoute)

      if (post) {
        const filename = routeToComponentFilename(postRoute)
        let postComponent = {
          route: postRoute
        }
        try {
          const esModule = await import(`@/components/PromoCards/${filename}`)
          postComponent.component = esModule.default
        } catch (err) {
          // No custom PostCard component
          if (post.ytSrc) {
            const videoPromo = await import("@/components/Card/VideoPromoCard")
            postComponent.component = videoPromo.default
          } else {
            const blogPromo = await import("@/components/Card/BlogPostPromoCard")
            postComponent.component = blogPromo.default
          }
        } finally {
          this.postComponents.push(postComponent)
        }
      }
    },
    getPostComponent(postRoute) {
      const postComponent = this.postComponents.find(comp => {
        return comp.route === postRoute
      })

      if (postComponent && postComponent.component) {
        return postComponent.component
      }
    }
  }
}
</script>
<style>
.new-page-fade-enter-to {
  transition: opacity 1s;
}

.new-page-fade-enter {
  opacity: 0;
}
</style>
