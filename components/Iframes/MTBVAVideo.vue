<template>
  <div class="video-wrapper">
  <video v-if="$store.state.misc.loaded"
         width="100%"
         :preload="preload"
         :autoplay="autoplay"
         :muted="muted"
         :loop="loop">
    <source :src="src" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  </div>
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
  .video-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
  }

  .video-wrapper video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
</style>