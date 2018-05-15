<template>
  <post-card :post="post">
    <div slot="media">
      <youtube :src="post.ytSrc"/>
    </div>
  </post-card>
</template>
<script>
  import PostCard from '../Card/PostCard'
  import Youtube from '../Iframes/Youtube'

  import promoCard from '../../assets/mixins/promo-card'

  export default {
    name: 'ravenwood-ride-promo',
    components: {
      PostCard,
      Youtube
    },
    mixins: [
      promoCard
    ]
  }
</script>
