<template>
  <div>
    <img v-if="!loaded"
         :src="loadingImg"/>
    <iframe v-if="$store.state.misc.loaded"
            v-show="loaded"
            :src="url"
            scrolling='no'>
    </iframe>
  </div>
</template>
<script>
  import iframeLoader from '../../assets/mixins/iframe-loader'

  export default {
    name: 'ride-with-gps',
    props: {
      url: {
        required: true,
        type: String
      }
    },
    mixins: [
      iframeLoader
    ],
    watch: {
      url() {
        this.loaded = false
        this.iframeListener()
      }
    }
  }
</script>
<style scoped>

  iframe, div {
    width: 100%;
    border: none;
    height: 800px;
  }

  @media (max-width: 700px) {
    iframe, div {
      height: 600px;
    }
  }

  @media (max-width: 400px) {
    iframe, div  {
      height: 450px;
    }
  }

  img {
    width: 50%;
    height: auto;
    display: block;
    padding-top: 25%;
    margin-left: auto;
    margin-right: auto;
  }

  /*iOS safari is a joke*/
  iframe {
    width: 1px;
    min-width: 100%;
  }
</style>
