<template>
  <post-card :post="$store.getters.getPost(caneCreekViscosetReview)">
    <div slot="media">

    </div>
  </post-card>
</template>

<script>
  import PostCard from '../Card/PostCard'
  import ImageLink from '../Images/ImageLink'

  import {caneCreekViscosetReview} from '../../scripts/routes'

  export default {
    name: 'cane-creek-viscoset-review-promo',
    components: {
      PostCard,
      ImageLink
    },
    data() {
      return {
        caneCreekViscosetReview: caneCreekViscosetReview
      }
    }
  }
</script>
