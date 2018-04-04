<template>
  <post-card :post="$store.getters.getPost(middleMtMomma2018)"
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
        <nuxt-link :to="resultsMiddleMountainMomma2017">
          View the results from last year.
        </nuxt-link>
        <div>
          <a href="https://www.bikereg.com/county-of-bath-middle-mountain-momma">
            Register on BikeReg.
          </a>
        </div>
        <div>
          <a :href="$store.getters.getPost(middleMtMomma2018).fbEvent">
            Details
            <font-awesome-icon :icon="faFacebook"
                               class="inline-facebook-icon"/>
          </a>
        </div>
      </div>
    </div>
    <div slot="media"
         style="margin-top: -2.8rem;">
      <a :href="$store.getters.getPost(middleMtMomma2018).fbEvent">
        <img v-lazy="mmmImg + 'mmm.png'"
             class="image-smaller">
      </a>
      <a v-if="$store.state.misc.loaded"
         :href="$store.getters.getPost(middleMtMomma2018.fbEvent)"
         style="text-align: center">
        <img :src="mmmImg + 'mmm-start.gif'"
             alt="Middle Mountain Momma Starting Line"
             style="width: 100%"/>
      </a>
      <ride-with-gps :url="$store.getters.getPost(middleMtMomma2018).rwGps"/>
    </div>
  </post-card>
</template>

<script>
  import PostCard from '../Card/PostCard'
  import RideWithGps from '../Iframes/RideWithGps'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
  
  import {
    middleMtMomma2018,
    resultsMiddleMountainMomma2017,
    s3Pages
  } from '../../scripts/routes'
  
  export default {
    name: 'middle-mt-momma-2018-promo',
    components: {
      PostCard,
      RideWithGps,
      FontAwesomeIcon
    },
    data() {
      return {
        middleMtMomma2018: middleMtMomma2018,
        resultsMiddleMountainMomma2017: resultsMiddleMountainMomma2017,
        faFacebook: faFacebook,
        mmmImg: `${s3Pages}/${middleMtMomma2018}/`
      }
    }
  }
</script>
