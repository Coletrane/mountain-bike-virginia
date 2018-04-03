<template>
  <div class="mtbva-info-window">
    <nuxt-link v-if="titleRoute"
               :to="titleRoute">
      <h3>
        {{title.text}}
      </h3>
    </nuxt-link>
    <div v-else>
      <h3>
        {{title.text}}
      </h3>
    </div>
    <img v-if="image"
         v-lazy="image"/>
    <div class="info-window-description"
          v-html="description">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'info-window',
    props: {
      title: {
        type: Object,
        required: true
      },
      image: {
        type: String,
        required: false
      },
      description: {
        type: String,
        required: false,
        default: 'no description available'
      }
    },
    computed: {
      titleRoute() {
        if (this.title.link) {
          const route = this.title.link.split('/')
          return route[route.length - 1]
        }
      }
    }
  }
</script>

<style scoped>
  .mtbva-info-window {
    width: 250px;
  }
  .info-window-description {
    font-size: 1rem;
  }
</style>