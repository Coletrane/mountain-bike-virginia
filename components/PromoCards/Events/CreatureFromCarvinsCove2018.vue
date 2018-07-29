<template>
  <post-card :post="post">
    <div slot="media">
      <image-link :post="post"/>
    </div>
    <div slot="words">
      <div class="promo">
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
        <ride-with-gps-switcher :gps-routes="gpsRoutes"/>
      </div>
    </div>
  </post-card>
</template>
<script>
import PostCard from "@/components/Card/PostCard"
import ImageLink from "@/components/Images/ImageLink"
import RideWithGpsSwitcher from "../../Iframes/RideWithGpsSwitcher"

import promoCard from "@/assets/mixins/promo-card"

export const creatureCourses = [
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

export default {
  name: "events-creature-from-carvins-cove-2018-promo",
  components: {
    PostCard,
    ImageLink,
    RideWithGpsSwitcher
  },
  mixins: [promoCard],
  data() {
    return {
      gpsRoutes: creatureCourses
    }
  }
}
</script>
<style scoped>
.center {
  text-align: center;
}
</style>
