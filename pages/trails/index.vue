<template>
  <div>
    <m-t-b-v-a-header :image="headerImage"
                      title="Trails"/>
    <banner :static-banner="dragonsBackTshirt"/>
    <div class="main-content"
         :style="{backgroundImage: backgroundImage.backgroundImage
      }">
      <m-t-b-project/>
    </div>
  </div>
</template>
<script>
import MTBVAHeader from "../../components/Header/MTBVAHeader"
import Banner from "../../components/Das/Banner"
import MTBProject from "../../components/Iframes/MTBProject"

import backgroundImage from "../../assets/mixins/background-image"

import { home } from "../../assets/head-tags"
import { headTags } from "../../assets/functions"
import { s3Pages, s3Banners } from "../../scripts/routes"
import { dragonsBackTshirt } from "../../assets/static-banners"

export default {
  name: "trails",
  components: {
    MTBVAHeader,
    Banner,
    MTBProject
  },
  mixins: [backgroundImage],
  data() {
    return {
      dragonsBackTshirt: dragonsBackTshirt
    }
  },
  head() {
    return headTags(`${home.title} Trails`, home.description, home.keywords, {
      route: this.$route.path.substring(1),
      ogImage: "carvins-cove-trail-map.jpg"
    })
  },
  data() {
    return {
      headerImage: `${s3Pages}/trails/middle-mt.jpg`
    }
  }
}
</script>
