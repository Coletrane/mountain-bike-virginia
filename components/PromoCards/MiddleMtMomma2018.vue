<template>
  <post-card :post="post">
    <div slot="words">
      <div class="promo">
        Wilson Creek runs clean and cool most of the time, gurgling over a 1930’s dam pretending to be a lovely clear running trout stream flowing lazily southward out of Douthat State Park in the Alleghany Highlands of Virginia. I hate Wilson Creek.
      </div>
      <div>
        <nuxt-link :to="{name: 'results-middle-mountain-momma-2018'}">
          View the results.
        </nuxt-link>
      </div>
    </div>
    <div slot="media">
      <image-link :post="post"/>
    </div>
  </post-card>
</template>
<script>
  import PostCard from '../Card/PostCard'
  import ImageLink from '../Images/ImageLink'

  import promoCard from '../../assets/mixins/promo-card'

  export default {
    name: 'middle-mt-momma-2018-promo',
    components: {
      ImageLink,
      PostCard,
    },
    mixins: [
      promoCard
    ]
  }
</script>
