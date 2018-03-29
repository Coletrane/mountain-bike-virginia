<template>
  <post-card :post="$store.getters.getPost(guerrillaGravityPedalheadReview)"
             no-author>
    <div slot="words">
      <div class="promo">

      </div>
    </div>
    <div slot="media">
      <image-link :post="$store.getters.getPost(guerrillaGravityPedalheadReview)"/>
    </div>
  </post-card>
</template>

<script>
  import PostCard from '../Card/PostCard'
  import ImageLink from '../Images/ImageLink'

  import {guerrillaGravityPedalheadReview} from '../../scripts/routes'

  export default {
    name: 'guerrilla-gravity-pedalhead-review-promo',
    components: {
      PostCard,
      ImageLink
    },
    data() {
      return {
        guerrillaGravityPedalheadReview: guerrillaGravityPedalheadReview
      }
    }
  }
</script>
