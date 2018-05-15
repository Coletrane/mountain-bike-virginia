<template>
  <post-card :post="post">
    <div slot="words">
      <div class="promo">
        21st annual Middle Mountain Momma at the gorgeous <a
        href="http://www.dcr.virginia.gov/state-parks/douthat#general_information">Douthat
        State Park.</a> The
        first race in the XXC Marathon Series! Classes: Youth: 7mi, Junior: 11mi, Classic: 21mi, XXC:
        44mi.
        <nuxt-link :to="{name: 'results-middle-mountain-momma-2018'}">
          View the results.
        </nuxt-link>
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
      <ride-with-gps-switcher :gps-routes="[
            {
              name: 'youth',
              url: 'https://rwgps-embeds.com/embeds?type=route&id=27285133&sampleGraph=true'
            },
            {
              name: 'beginner',
              url: 'https://rwgps-embeds.com/embeds?type=route&id=27285230&sampleGraph=true'
            },
            {
              name: 'xc',
              url: 'https://rwgps-embeds.com/embeds?type=route&id=4047388&sampleGraph=true'
            },
            {
              name: 'xxc',
              url: 'https://rwgps-embeds.com/embeds?type=route&id=26778887&sampleGraph=true'
            }
          ]"/>
    </div>
  </post-card>
</template>
<script>
  import PostCard from '../Card/PostCard'
  import RideWithGpsSwitcher from '../Iframes/RideWithGpsSwitcher'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

  import {s3Pages} from '../../scripts/routes'

  import promoCard from '../../assets/mixins/promo-card'

  export default {
    name: 'middle-mt-momma-2018-promo',
    components: {
      PostCard,
      RideWithGpsSwitcher,
      FontAwesomeIcon
    },
    mixins: [
      promoCard
    ],
    data() {
      return {
        faFacebook: faFacebook,
        mmmImg: `${s3Pages}/middle-mt-momma-2018/`
      }
    }
  }
</script>
