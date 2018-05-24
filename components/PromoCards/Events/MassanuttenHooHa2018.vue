<template>
  <post-card :post="post">
    <div slot="media">
      <image-link :post="post"/>
    </div>
    <div slot="words">
      <div class="blog-p">
        <a :href="post.register">
          <font-awesome-icon :icon="faBicycle"/>
          Register on BikeReg
        </a>
      </div>
      <div class="blog-p">
        <a :href="post.fbEvent">
          <font-awesome-icon :icon="faFacebook"/>
          Facebook Event
        </a>
      </div>
      <div v-html="post.description"></div>
    </div>
  </post-card>
</template>
<script>
  import PostCard from '../../Card/PostCard'
  import ImageLink from '../../Images/ImageLink'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faBicycle from '@fortawesome/fontawesome-free-solid/faBicycle'
  import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

  import promoCard from '../../../assets/mixins/promo-card'

  export default {
    name: 'events-massanutten-hoo-ha-2018-promo',
    components: {
      PostCard,
      ImageLink,
      FontAwesomeIcon
    },
    mixins: [
      promoCard
    ],
    data() {
      return {
        faBicycle: faBicycle,
        faFacebook: faFacebook
      }
    }
  }
</script>
