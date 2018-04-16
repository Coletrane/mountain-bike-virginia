<template>
  <post-card :post="post"
             no-author>
    <div slot="header">
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
        first race in the XXC Marathon Series! Classes: Youth: 7mi, Junior: 11mi, Classic: 21mi, XXC:
        44mi.
        <nuxt-link :to="{name: 'results-middle-mountain-momma-2017'}">
          View the results from last year.
        </nuxt-link>
        <div>
          <a href="https://www.bikereg.com/county-of-bath-middle-mountain-momma">
            Register on BikeReg.
          </a>
        </div>
        <div>
          <a :href="post.fbEvent">
            Details
            <font-awesome-icon :icon="faFacebook"
                               class="inline-facebook-icon"/>
          </a>
        </div>
      </div>
    </div>
    <div slot="media"
         style="margin-top: -2.8rem;">
      <a :href="post.fbEvent">
        <img v-lazy="mmmImg + 'mmm.png'"
             class="image-smaller">
      </a>

      <m-t-b-v-a-video :src="mmmImg + 'mmm-start.mp4'"
                       autoplay
                       muted
                       preload
                       loop/>
      <ride-with-gps :url="post.rwGps"/>
    </div>
  </post-card>
</template>

<script>
  import PostCard from '../Card/PostCard'
  import RideWithGps from '../Iframes/RideWithGps'
  import MTBVAVideo from '../Iframes/MTBVAVideo'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

  import {s3Pages} from '../../scripts/routes'

  export default {
    name: 'middle-mt-momma-2018-promo',
    components: {
      PostCard,
      RideWithGps,
      MTBVAVideo,
      FontAwesomeIcon
    },
    data() {
      return {
        post: this.$store.getters.getPost('middle-mt-momma-2018'),
        faFacebook: faFacebook,
        mmmImg: `${s3Pages}/middle-mt-momma-2018/`
      }
    }
  }
</script>
