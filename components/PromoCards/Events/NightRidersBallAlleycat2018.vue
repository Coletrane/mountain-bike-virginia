<template>
  <post-card :post="post">
    <div slot="media">
      <image-link :post="post"/>
    </div>
    <div slot="words">
      {{post.description}}
    </div>
  </post-card>
</template>

<script>
  import PostCard from '../../Card/PostCard'
  import ImageLink from '../../Images/ImageLink'

  import promoCard from '../../../assets/mixins/promo-card'

  export default {
    name: 'events-night-riders-ball-alleycat-2018-promo',
    components: {
      PostCard,
      ImageLink
    },
    mixins: [
      promoCard
    ]
  }
</script>
