<template>
  <post-card :post="$store.getters.getPost(pivotSwitchbladeReview)"
             no-author>
    <div slot="words">
      <div class="promo">
        With over a 5 grand pricetag, the Pivot Switchblade is easily a great deal. It's not
        enduro, it's
        not
        trail. Perhaps they should have called it the Swiss Army. No, that would never fly.
      </div>
    </div>
    <div slot="media">
      <image-link :post="$store.getters.getPost(pivotSwitchbladeReview)"/>
    </div>
  </post-card>
</template>

<script>
  import PostCard from '../Card/PostCard'
  import ImageLink from '../Images/ImageLink'

  export default {
    name: 'pivot-switchblade-review-promo',
    components: {
      PostCard,
      ImageLink
    },
    data() {
      return {
        pivotSwitchbladeReview: pivotSwitchbladeReview
      }
    }
  }
</script>
