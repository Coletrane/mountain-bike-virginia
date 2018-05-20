<template>
  <div class="embed-responsive embed-responsive-1by1"
       :style="embedStyle">
    <img v-if="!loaded"
         :src="loadingImg"/>
    <iframe v-if="$store.state.misc.loaded"
            v-show="loaded"
            class="embed-responsive-item"
            :src="src">
    </iframe>
  </div>
</template>
<script>
  import iframeLoader from '../../assets/mixins/iframe-loader'

  export default {
    name: 'instagram',
    props: {
      src: {
        type: String,
        required: true
      }
    },
    mixins: [
      iframeLoader
    ],
    data() {
      return {
        embedStyle: {
          paddingTop: '100%'
        }
      }
    },
    created() {
      if (process.browser) {
        window.addEventListener('resize', this.onResize)
        this.onResize()
      }
    },
    destroyed() {
      if (process.browser) {
        window.removeEventListener('resize', this.onResize)
      }
    },
    methods: {
      onResize() {
        if (document.body.clientWidth < 575) {
          this.embedStyle.paddingTop = `${document.body.clientWidth + 160}px`
        } else if (document.body.clientWidth >= 575 &&
                   document.body.clientWidth < 750) {
          this.embedStyle.paddingTop = `${document.body.clientWidth + 98}px`
        } else if (document.body.clientWidth >= 750 &&
                   document.body.clientWidth < 1200) {
          this.embedStyle.paddingTop = `${document.body.clientWidth + 35}px`
        } else {
          this.embedStyle.paddingTop = `${document.body.clientWidth - 225}px`
        }
      }
    }
  }
</script>
<style scoped>
  .embed-responsive-1by1::before {
    padding-top: 0 !important;
  }
</style>
