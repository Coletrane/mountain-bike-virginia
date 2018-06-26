<template>
  <div class="related-posts">
    <div v-for="(post, i) in posts"
         class="related-post">
      <component v-if="pageComponents.length >= i && getPageComponent(post.route)"
                 :is="getPageComponent(post.route)"
                 :post-at-bottom="post"/>
    </div>
  </div>
</template>
<script>
export default {
  name: "related-posts",
  props: {
    posts: {
      required: true
    }
  },
  data() {
    return {
      pageComponents: []
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener("scroll", this.handleScroll)
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener("scroll", this.handleScroll)
    }
  },
  methods: {
    handleScroll() {
      const bottomScrollPosition = window.innerHeight + window.scrollY

      if (this.pageComponents.length < this.posts.length) {
        const relatedPost = this.$el.children[this.pageComponents.length - 1]
        let blogPost
        if (relatedPost && relatedPost.firstChild) {
          blogPost = relatedPost.firstChild
        }

        // No related posts have been loaded
        if (!blogPost && bottomScrollPosition > this.$el.offsetTop) {
          this.loadPageComponent(this.pageComponents.length)
          // The first related post has been loaded
        } else if (
          blogPost &&
          blogPost.offsetHeight &&
          bottomScrollPosition > this.$el.offsetTop + blogPost.offsetHeight
        ) {
          this.loadPageComponent(this.pageComponents.length)
        }
      }
      //TODO
      // this.updateTitle()
    },
    updateTitle() {
      if (process.browser) {
        const bottomScrollPosition = window.innerHeight + window.scrollY
        const offsetHeights = Array.prototype.slice
          .call(this.$el.children)
          .map(child => {
            return child.offsetHeight
          })
        offsetHeights.forEach((height, i, arr) => {
          for (let j = 0; j < i; j++) {
            offsetHeights[i] += offsetHeights[j]
          }
        })

        // Original post
        if (window.scrollY < this.$el.offsetTop) {
          document.title = this.$parent.post.title
          // TODO: figure out if I want to do pushState
          // https://github.com/vuejs/vue-router/issues/703
          // window.history.pushState(
          //   {},
          //   this.$parent.post.title,
          //   this.$route.path)
        } else {
          offsetHeights.forEach((height, i, arr) => {
            const realHeight = height + this.$el.offsetHeight
            const isMiddlePost =
              arr[i + 1] &&
              realHeight < arr[i + 1] &&
              bottomScrollPosition < arr[i + 1]
            const isLastPost = !arr[i + 1] && bottomScrollPosition > arr[i - 1]
            if (isMiddlePost || isLastPost) {
              console.log(this.posts[i].title)
              document.title = this.posts[i].title
            }
          })
        }
      }
    },
    async loadPageComponent(i) {
      const post = this.posts[i]
      const component = {
        route: post.route,
        component: async () => await import(`@/pages/${post.route}`)
      }
      this.pageComponents.push(component)
    },
    getPageComponent(route) {
      const pageComponent = this.pageComponents.find(component => {
        return component.route === route
      })

      if (pageComponent) {
        return pageComponent.component
      }
    }
  }
}
</script>
<style scoped>
.related-posts {
  padding-top: 2rem;
}

.related-post {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.related-posts-title {
  text-align: center;
  color: white;
  font-weight: 800;
  margin: 0;
}
</style>
