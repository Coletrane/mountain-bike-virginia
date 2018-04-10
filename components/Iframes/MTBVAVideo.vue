<template>
  <video v-if="$store.state.misc.loaded"
         width="100%"
         :preload="preload"
         :autoplay="autoplay"
         :muted="muted"
         :loop="loop">
    <source :src="src" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</template>

<script>
  export default {
    name: 'mtbva-video',
    props: {
      src: {
        type: String,
        required: true
      },
      preload: {
        type: Boolean,
        required: false,
        default: false
      },
      autoplay: {
        type: Boolean,
        required: false,
        default: false
      },
      muted: {
        type: Boolean,
        required: false,
        default: false
      },
      loop: {
        type: Boolean,
        required: false,
        default: false
      }
    }
  }
</script>

<style scoped>

</style>