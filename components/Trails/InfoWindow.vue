<template>
  <div class="mtbva-info-window">
    <nuxt-link v-if="route && route.name"
               :to="route">
      <h3>
        {{title}}
      </h3>
    </nuxt-link>
    <div v-else>
      <h3>
        {{title}}
      </h3>
    </div>
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
        type: String,
        required: true
      },
      description: {
        type: String,
        required: false,
        default: 'no description available'
      },
      route: {
        type: String,
        required: false
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