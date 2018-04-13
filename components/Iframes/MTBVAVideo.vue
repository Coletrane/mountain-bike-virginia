<template>
  <div class="video-wrapper">
    <video v-if="$store.state.misc.loaded"
           width="100%"
           :preload="preload"
           :autoplay="autoplay"
           :muted="muted"
           :loop="loop"
           :controls="controls">
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
    },
    data () {
      return {
        controls: false
      }
    },
    created () {
      if (process.browser) {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          this.controls = true
        }
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