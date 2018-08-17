<template>
  <div class="blog">
    <m-t-b-v-a-header :image="img"
                      title="Mountain Bike Virginia"
                      subtitle="Exposing the trove of trails in The Old Dominion"
                      button="Events"
                      buttonLink="https://www.facebook.com/pg/bikevirginia/events/"
                      home-page/>
    <banner :static-banner="dragonsBackTshirt"/>
    <div class="main-content"
         :style="backgroundImage">
      <div v-for="(page, i) of pages">
        <abstract-page v-if="$store.state.posts.currentPage > i"
                       :page="i"/>
        <m-t-b-v-a-footer v-if="i === 0"
                          :copyright="false"
                          :style="{
                            marginTop: '4rem',
                            marginBottom: '4rem'
                          }"/>
      </div>
    </div>
  </div>
</template>
<script>
import MTBVAHeader from "../components/Header/MTBVAHeader"
import Banner from "../components/Das/Banner"
import MTBVAFooter from "../components/Footer/MTBVAFooter"
import AbstractPage from "../components/AbstractPage"

import { home } from "../assets/head-tags"
import { headTags } from "../assets/functions"
import { s3StaticImg, s3Banners } from "../scripts/routes"
import { numPages } from "../store/posts"
import { dragonsBackTshirt } from "../assets/static-banners"

import backgroundImage from "../assets/mixins/background-image"

const foliage = `${s3StaticImg}/foliage.jpg`

export default {
  name: "index",
  components: {
    MTBVAHeader,
    Banner,
    MTBVAFooter,
    AbstractPage
  },
  mixins: [backgroundImage],
  async asyncData(context) {
    return await context.store.dispatch("loadPage")
  },
  head() {
    return headTags(home.title, home.description, home.keywords, {
      route: this.$route.path,
      ogImage: foliage
    })
  },
  data() {
    return {
      img: foliage,
      s3Banners: s3Banners,
      pages: new Array(numPages),
      dragonsBackTshirt: dragonsBackTshirt
    }
  },
  mounted() {
    if (process.browser) {
      window.addEventListener("scroll", this.handleScroll)
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener("scroll", this.handleScroll)
    }
  },
  methods: {
    async handleScroll() {
      if (this.$store.state.posts.currentPage === numPages) {
        window.removeEventListener("scroll", this.handleScroll)
        return
      }
      if (this.loadingMore) {
        return
      }

      const loadThreshold = window.innerHeight + window.scrollY + 5000
      if (loadThreshold >= document.body.offsetHeight) {
        this.loadingMore = true
        await this.loadMore()
        this.loadingMore = false
      }
    },
    async loadMore() {
      await this.$store.dispatch("loadPage")
    }
  }
}
</script>
<style>
.load-more {
  text-align: center;
  padding-top: 2rem;
}

.card-container {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>
