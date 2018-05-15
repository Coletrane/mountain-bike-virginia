<template>
  <post-card :post="post">
    <div slot="words">
      <div class="promo">
        A true quiver killer, the Rocky Mountain Instinct is a do it all bike that manages to tear up downhills and tear
        down uphills. Cole and Kyle Inman keep their motif of riding the same bike, and take them out at the <a
        href="http://www.underdogbikesva.com/">Underdog Bikes </a> Rocky Mountain Demo.
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
    name: 'rocky-mountain-instinct-review-promo',
    components: {
      PostCard,
      ImageLink
    },
    mixins: [
      promoCard
    ]
  }
</script>