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
  head() {
    const post = this.$store.getters.posts(getRoute(this.$route.matched))
    const enduroPost = {
      route: post.route,
      imgRoute: "creatureduro.jpg",
      title: "Creatureduro: Carvins Cove Enduro Mountain Bike Race",
      schema: {
        "@context": schemaOrg,
        type: schemaTypes.event,
        startDate: new Date("Oct 6, 2018"),
        location: {
          name: "Sherwood Archery Inc.",
          address: {
            "@type": schemaTypes.address,
            streetAddress: "2720 Timberview Rd",
            addressLocality: "Roanoke",
            postalCode: "24019",
            addressRegion: "VA",
            addressCountry: "US"
          }
        }
      }
    }
    const xxcPost = {
      route: post.route,
      imgRoute: post.imgRoute,
      title: "Creature from Carvins Cove XC and XXC Marathon Mountain Bike Race",
      schema: {
        "@context": schemaOrg,
        type: schemaTypes.event,
        startDate: new Date("Oct 7, 2018"),
        location: {
          name: "Carvins Cove Reservoir Boat Dock",
          address: {
            "@type": schemaTypes.address,
            streetAddress: "9644 Reservoir Rd",
            addressLocality: "Roanoke",
            postalCode: "24019",
            addressRegion: "VA",
            addressCountry: "US"
          }
        }
      }
    }
    return {
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        getSchemaObj(buildEvent(enduroPost, post.promo)),
        getSchemaObj(buildEvent(xxcPost, post.promo))
      ]
    }
  },
  data() {
    return {
      gpsRoutes: creatureCourses
    }
  }
}
</script>
