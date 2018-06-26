<template>
  <div>
    <post-card :post="post">
      <div slot="words">
        <div class="promo">
        </div>
      </div>
    </post-card>
    <div slot="media">
      <image-link :post="post"/>
    </div>
  </div>
</template>
<script>
  import PostCard from '@/components/Card/PostCard'
  import ImageLink from '@/components/Images/ImageLink'

  import promoCard from '@/assets/mixins/promo-card'

  export default {
    name: 'shop-dragons-back-tshirt-promo',
    components: {
      PostCard,
      ImageLink
    },
    mixins: [
      promoCard
    ]
  }
</script>
