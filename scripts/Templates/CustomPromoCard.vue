<template>
  <post-card :post="post">
    <div slot="words">
      <div class="promo">
      </div>
    </div>
  </post-card>
  <div slot="media">
    <image-link :post="post"/>
  </div>
</template>
<script>
  import PostCard from '../Card/PostCard'
  import ImageLink from '../Images/ImageLink'

  import promoCard from '../../assets/mixins/promo-card'

  export default {
    name: '',
    components: {
      PostCard,
      ImageLink
    },
    mixins: [
      promoCard
    ]
  }
</script>
