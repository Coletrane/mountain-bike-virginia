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

import backgroundImage from "../../mixins/background-image"

import { home } from "../../scripts/client/head-tags"
import { headTags } from "../../scripts/client/functions"
import { s3Pages } from "../../routes"
import { dragonsBackTshirt } from "../../scripts/client/static-banners"

export default {
  name: "trails",
  components: {
    MTBVAHeader,
    Banner,
    MTBProject
  },
  mixins: [backgroundImage],
  head() {
    return headTags(`${home.title} Trails`, home.description, home.keywords, {
      route: this.$route.path.substring(1),
      ogImage: "carvins-cove-trail-map.jpg"
    })
  },
  data() {
    return {
      headerImage: `${s3Pages}/trails/middle-mt.jpg`,
      dragonsBackTshirt: dragonsBackTshirt
    }
  }
}
</script>
