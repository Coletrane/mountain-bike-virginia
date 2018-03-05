<template>
  <div>
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

</style>