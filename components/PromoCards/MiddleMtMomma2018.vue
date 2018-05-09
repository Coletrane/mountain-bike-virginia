<template>
  <post-card :post="post">
    <div slot="words">
      <div class="promo">

      </div>
    </div>
    <div slot="media">
      <image-link :post="post"/>
    </div>
  </post-card>
</template>
<script>
  import PostCard from '../Card/PostCard'
  import RideWithGpsSwitcher from '../Iframes/RideWithGpsSwitcher'
  import ImageLink from '../Images/ImageLink'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

  import { s3Pages } from '../../scripts/routes'

  export default {
    name: 'middle-mt-momma-2018-promo',
    components: {
      PostCard,
      RideWithGpsSwitcher,
      ImageLink,
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
