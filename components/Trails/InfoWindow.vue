<template>
  <div class="mtbva-info-window">
    <nuxt-link :to="route">
      <h1>
        {{title}}
      </h1>
    </nuxt-link>
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
        required: true
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