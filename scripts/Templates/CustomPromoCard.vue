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
  import PostCard from '@/componentsCard/PostCard'
  import ImageLink from '@/components/Images/ImageLink'

  import promoCard from '@/assets/mixins/promo-card'

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
