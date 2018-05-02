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
    name: 'related-posts',
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
        window.addEventListener('scroll', this.handleScroll)
      }
    },
    destroyed() {
      if (process.browser) {
        window.removeEventListener('scroll', this.handleScroll)
      }
    },
    methods: {
      handleScroll() {
        if (this.pageComponents.length < this.posts.length &&
            this.$el.offsetTop < (window.innerHeight + window.scrollY)) {
          this.loadPageComponent(this.pageComponents.length + 1)
        }
      },
      async loadPageComponent(i) {
        const component = {
          route: this.posts[i].route,
          component: async () => await import(`@/pages/${this.posts[i].route}`)
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