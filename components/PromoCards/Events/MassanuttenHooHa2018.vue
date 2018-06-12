<template>
  <post-card :post="post">
    <div slot="media">
      <image-link :post="post"/>
    </div>
    <div slot="words">
      <div class="blog-p">
        Dateline Keezletown, VA, 1989. An ambitious ski manager early adopts the mountain bike thing and throws a whimsically titled event on a lark, complete with equally whimsical log pull and lake jump contests. Though the lake jump and log pull have been left by the trailside, the Hoo-Ha! continued the next 29 years with Kenny Hess still at the helm of one of the most enduring events in mountain bike racing, with a bright forecast for years to come.
      </div>
    </div>
  </post-card>
</template>
<script>
  import PostCard from '../../Card/PostCard'
  import ImageLink from '../../Images/ImageLink'

  import promoCard from '../../../assets/mixins/promo-card'

  export default {
    name: 'events-massanutten-hoo-ha-2018-promo',
    components: {
      PostCard,
      ImageLink,
    },
    mixins: [
      promoCard
    ]
  }
</script>
