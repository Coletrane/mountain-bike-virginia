<template>
  <div>
    <div class="words">
      <div v-html="post.promo"></div>
      <div class="reg-links">
        <div class="center row">
          <div class="col-12 col-sm-6">
            <a :href="post.enduroRegister">
              Enduro Registration on BikeReg
            </a>
          </div>
          <div class="col-12 col-sm-6">
            <a :href="post.enduroFb">
              Enduro Facebook Event
              <font-awesome-icon :icon="faFacebook"/>
            </a>
          </div>
        </div>
        <div class="center row">
          <div class="col-12 col-sm-6">
            <a :href="post.xcRegister">
              XC Registration
            </a>
          </div>
          <div class="col-12 col-sm-6">
            <a :href="post.xcFb">
              XC Facebook Event
              <font-awesome-icon :icon="faFacebook"/>
            </a>
          </div>
        </div>
        <div class="center row">
          <div class="col-12 col-sm-6">
            <a :href="post.xxcRegister">
              XXC Registration on BikeReg
            </a>
          </div>
          <div class="col-12 col-sm-6">
            <a :href="post.xxcFb">
              XXC Facebook Event
              <font-awesome-icon :icon="faFacebook"/>
            </a>
          </div>
        </div>
      </div>
    </div>
    <ride-with-gps-switcher :gps-routes="creatureCourses"
                            class="no-padding"/>
  </div>
</template>
<script>
import ImageLink from '../Images/ImageLink'
import RideWithGpsSwitcher from '../Iframes/RideWithGpsSwitcher'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'creature-2018-info',
  components: {
    ImageLink,
    RideWithGpsSwitcher,
    FontAwesomeIcon
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      faFacebook: faFacebook,
      creatureCourses: [
        {
          name: 'XC',
          url:
            'https://rwgps-embeds.com/embeds?type=trip&id=26039891&sampleGraph=true'
        },
        {
          name: 'XXC',
          url:
            'https://rwgps-embeds.com/embeds?type=route&id=25378656&sampleGraph=true'
        }
      ]
    }
  }
}
</script>
<style scoped>
.reg-links {
  font-size: 1rem;
}

.center {
  text-align: center;
  margin: 1.5rem 0;
}

.center div {
  padding: 0.5rem 0;
}

.center:first-child {
  margin-top: 0;
}

.center:last-child {
  margin-bottom: 0;
}

.words {
  padding: 0 1rem !important;
}
</style>
