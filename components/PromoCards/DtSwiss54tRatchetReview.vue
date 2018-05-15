<template>
  <post-card :post="post">
    <div slot="words">
      <div class="promo">
        We've all heard it, the performance exhaust of mountain bikes, Quick Engagement™. While many are special hubs
        that come loud and proud, DT Swiss takes a reserved, sensable, and modular approach to it, giving quick
        engagement to all who are willing to pay.
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
    name: 'dt-swiss-54t-ratchet-review-promo',
    components: {
      PostCard,
      ImageLink
    },
    mixins: [
      promoCard
    ]
  }
</script>
