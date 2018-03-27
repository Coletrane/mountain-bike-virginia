<template>
  <div class="mtbva-info-window">
    <nuxt-link v-if="title.link && title.link.name"
               :to="route">
      <h3>
        {{title.text}}
      </h3>
    </nuxt-link>
    <div v-else>
      <h3>
        {{title.text}}
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
        type: Object,
        required: true
      },
      description: {
        type: String,
        required: false,
        default: 'no description available'
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