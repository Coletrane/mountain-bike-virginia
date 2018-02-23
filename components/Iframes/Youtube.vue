<template>
  <div class="yt-wrapper">
    <iframe v-if="loaded"
            width="100%"
            frameborder="0"
            allowfullscreen
            :src="src">
    </iframe>
  </div>
</template>
<script>
  export default {
    name: 'youtube',
    props: {
      src: {
        required: true,
        type: String
      }
    },
    data() {
      return {
        loaded: false
      }
    },
    created() {
      if (process.browser) {
        window.addEventListener('load', this.onLoad)
      }
    },
    destroyed() {
      if (process.browser) {
        window.removeEventListener('load', this.onLoad)
      }
    },
    methods: {
      onLoad() {
        this.loaded = true
        window.removeEventListener('load', this.onLoad)
      }
    }
  }
</script>
<style>
  .yt-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
  }

  .yt-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
