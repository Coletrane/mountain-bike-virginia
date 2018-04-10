<template>
  <div class="yt-wrapper">
    <iframe v-if="$store.state.misc.loaded"
            width="100%"
            frameborder="0"
            allowfullscreen
            :src="src">
    </iframe>
    <img v-if="loading"
         :src="loadingImg"/>
  </div>
</template>
<script>
  import {s3StaticImg} from '../../scripts/routes'

  export default {
    name: 'youtube',
    props: {
      src: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        loading: true,
        loadingImg: `${s3StaticImg}/loading.gif`
      }
    },
    mounted() {
      if (process.browser) {
        this.$el.addEventListener('onReady', this.onPlayerLoad)
      }
    },
    destroyed() {
      if (process.browser) {
        this.$el.removeEventListener('onReady', this.onPlayerLoad)
      }
    },
    methods: {
      onPlayerLoad() {
        this.loading = false
        this.$el.removeEventListener('onReady', this.onPlayerLoad)
      }
    }
  }
</script>
<style scoped>
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

  img {
    width: 50%;
    height: auto;
    display: block;
    margin: auto;
    background-color: #FFFFFF;
  }
</style>
