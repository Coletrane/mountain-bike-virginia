<template>
  <div>
    <m-t-b-v-a-header :image="headerImage"
                      title="Trails"/>
    <banner/>
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

import { s3Pages } from "../../scripts/routes"

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
      headerImage: `${s3Pages}/trails/carvins-cove-trail-map.jpg`
    }
  }
}
</script>
<style scoped>
</style>
