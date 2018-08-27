<template>
  <div class="mtbva-trails main-content"
       :style="{
        backgroundImage: backgroundImage.backgroundImage
      }">
    <trailforks/>
    <banner :static-banner="dragonsBackTshirt"/>
  </div>
</template>
<script>
import Banner from "../../components/Das/Banner"
import Trailforks from "../../components/Iframes/Trailforks"

import backgroundImage from "../../mixins/background-image"

import { home } from "../../scripts/client/head-tags"
import { headTags } from "../../scripts/client/functions"
import { s3Pages } from "../../routes"
import { dragonsBackTshirt } from "../../scripts/client/static-banners"

export default {
  name: "trails",
  components: {
    Banner,
    Trailforks
  },
  mixins: [backgroundImage],
  head() {
    return headTags(`${home.title} Trails`, home.description, home.keywords, {
      route: this.$route.path.substring(1),
      ogImage: "middle-mt.jpg"
    })
  },
  data() {
    return {
      dragonsBackTshirt: dragonsBackTshirt
    }
  }
}
</script>
<style scoped>
.mtbva-trails {
  padding-top: 7rem;
}
</style>
