<template>
  <div class="yt-wrapper embed-responsive embed-responsive-16by9">
    <div class="embed-responsive-item">
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
  </div>
</template>
<script>
import iframeLoader from "../../assets/mixins/iframe-loader"

export default {
  name: "youtube",
  props: {
    src: {
      type: String,
      required: true
    }
  },
  mixins: [iframeLoader]
}
</script>
<style scoped>
img {
  width: 50%;
  height: auto;
  display: block;
  margin: auto;
  background-color: #ffffff;
}
</style>
