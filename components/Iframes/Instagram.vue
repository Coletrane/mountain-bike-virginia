<template>
  <div class="embed-responsive embed-responsive-1by1">
      <img v-if="!loaded"
           :src="loadingImg"/>
      <iframe v-if="$store.state.misc.loaded"
              v-show="loaded"
              class="embed-responsive-item"
              width="100%"
              height="auto"
              frameborder="0"
              allowfullscreen
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
    ]
  }
</script>
<style scoped>
</style>