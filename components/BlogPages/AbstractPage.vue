<template>
  <div class="abstract-page">
    <div v-for="postRoute of $store.state.posts.pages[page]">

      <transition name="new-page-fade">
        <component v-if="getPostComponent(postRoute)"
                   :is="getPostComponent(postRoute)"/>
      </transition>

      <div v-if="!getPostComponent(postRoute)"
           class="post-card-placeholder">
      </div>

    </div>
  </div>
</template>

<script>
  import {routeToComponentFilename} from '../../assets/functions'

  export default {
    name: 'abstract-page',
    props: {
      page: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        postComponents: [],
        postComponentsLoaded: false
      }
    },
    created() {
      this.loadPostComponents()
    },
    methods: {
      async loadPostComponents() {
        for (const postRoute of this.$store.state.posts.pages[this.page]) {
          const filename = routeToComponentFilename(postRoute)
          let esComponent = await import(`../PromoCards/${filename}`)
          const component = {
            route: postRoute,
            component: esComponent.default
          }
          this.postComponents.push(component)
        }

        if (this.postComponents.length ===
          this.$store.state.posts.pages[this.page].length) {
          this.postComponentsLoaded = true
        }
      },
      getPostComponent(postRoute) {
        const postComponent = this.postComponents.find(component => {
          return component.route === postRoute
        })

        if (postComponent) {
          return postComponent.component
        }
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