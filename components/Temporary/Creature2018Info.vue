<template>
  <div>
    <div class="words">
      <div v-html="post.promo"></div>
      <div class="center">
        <a :href="post.xxcRegister">
          XXC Registration on BikeReg
        </a>
      </div>
      <div class="center">
        <a :href="post.xcRegister">
          XC Registration
        </a>
      </div>
    </div>
    <ride-with-gps-switcher :gps-routes="creatureCourses"
                            class="no-padding"/>
  </div>
</template>
<script>
import ImageLink from "../Images/ImageLink"
import RideWithGpsSwitcher from "../Iframes/RideWithGpsSwitcher"

export default {
  name: "creature-2018-info",
  components: {
    ImageLink,
    RideWithGpsSwitcher
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      creatureCourses: [
        {
          name: "XC",
          url:
            "https://rwgps-embeds.com/embeds?type=trip&id=26039891&sampleGraph=true"
        },
        {
          name: "XXC",
          url:
            "https://rwgps-embeds.com/embeds?type=route&id=25378656&sampleGraph=true"
        }
      ]
    }
  }
}
</script>
<style scoped>
.center {
  text-align: center;
}
</style>
