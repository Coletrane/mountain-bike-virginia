<template>
  <blog-post :image="img + 'creatureduro.jpg'"
             :post="post"
             :related-posts="relatedPosts">
    <div slot="content">
      <div class="blog-p" v-html="post.promo"></div>
      <div class="center blog-p">
        <a :href="post.xxcRegister">
          XXC Registration on BikeReg
        </a>
      </div>
      <div class="center blog-p">
        <a :href="post.xcRegister">
          XC Registration
        </a>
      </div>
      <blog-image :src="img + 'creature-2018-flyer.jpg'"/>
      <ride-with-gps-switcher :gps-routes="gpsRoutes"/>
    </div>
  </blog-post>
</template>
<script>
import BlogPost from "@/components/BlogPost"
import BlogImage from "@/components/Images/BlogImage"
import RideWithGpsSwitcher from "../../components/Iframes/RideWithGpsSwitcher"

import blogPost from "@/assets/mixins/blog-post"

import { getSchemaObj, getRoute, buildEvent } from "../../assets/functions"
import { schemaTypes, schemaOrg } from "../../assets/schmea-types"
import { creatureCourses } from "../../components/PromoCards/Events/CreatureFromCarvinsCove2018"

export default {
  name: "events-creature-from-carvins-cove-2018",
  components: {
    RideWithGpsSwitcher,
    BlogImage,
    BlogPost
  },
  mixins: [blogPost],
  data() {
    return {
      gpsRoutes: creatureCourses
    }
  }
}
</script>
