<template>
  <post-card :post="posts.middleMtMomma2018"
             :link="posts.middleMtMomma2018.fbEvent">
    <div slot="author">
      <h4 class="subheading">
        A week before Mother's day, its
        <span style="font-weight: 800;">
                MOMMA'S DAY.
        </span>
      </h4>
    </div>
    <div slot="words">
      <div class="promo">
        21st annual Middle Mountain Momma at the gorgeous <a
        href="http://www.dcr.virginia.gov/state-parks/douthat#general_information">Douthat
        State Park.</a> The
        first race in the XXC VA series! Classes: Youth: 7mi, Junior: 11mi, Classic: 21mi, XXC:
        44mi.
        <nuxt-link to="/results"
                   @click.native="setMMM()">
          View the results from last year.
        </nuxt-link>
        <div>
          <a href="https://www.bikereg.com/county-of-bath-middle-mountain-momma">
            Register on BikeReg.
          </a>
        </div>
        <div>
          <facebook-link :href="posts.middleMtMomma2018.fbEvent"/>
        </div>
      </div>
    </div>
    <div slot="media"
         style="margin-top: -2.8rem;">
      <a :href="posts.middleMtMomma2018.fbEvent">
        <img v-lazy="posts.middleMtMomma2018.extraImgs.logo"
             class="image-smaller">
      </a>
      <a v-if="loaded"
         :href="posts.middleMtMomma2018.fbEvent"
         style="text-align: center">
        <img :src="posts.middleMtMomma2018.extraImgs.start"
             alt="Middle Mountain Momma Starting Line"
             style="width: 100%"/>
      </a>
      <ride-with-gps :url="posts.middleMtMomma2018.rwGps"/>
    </div>
  </post-card>
</template>

<script>
  import PostCard from '../Card/PostCard'
  import RideWithGps from '../Iframes/RideWithGps'
  import FacebookLink from '../Images/FacebookLink'
  import ImageLink from '../Images/ImageLink'

  import {posts} from '../../assets/posts'

  export default {
    name: 'middle-mt-momma-2018-home',
    components: {
      PostCard,
      RideWithGps,
      FacebookLink,
      ImageLink
    },
    data() {
      return {
        posts: posts,
        loaded: false
      }
    },
    created() {
      if (process.browser) {
        window.addEventListener('load', this.onLoad)
      }
    },
    destroyed() {
      if (process.browser) {
        window.removeEventListener('load', this.onLoad)
      }
    },
    methods: {
      onLoad() {
        this.loaded = true
        window.removeEventListener('load', this.onLoad)
      }
    }
  }
</script>
