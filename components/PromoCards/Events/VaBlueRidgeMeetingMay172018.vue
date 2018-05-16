<template>
  <post-card :post="post">
    <div slot="words">
      <div class="promo">

      </div>
    </div>
    <div slot="media">
      <image-link :post="post"/>
    </div>
  </post-card>
</template>
<script>
  import PostCard from '../../Card/PostCard'
  import ImageLink from '../../Images/ImageLink'

  import promoCard from '../../../assets/mixins/promo-card'

  export default {
    name: 'events-va-blue-ridge-meeting-may-17-2018-promo',
    components: {
      PostCard,
      ImageLink
    },
    mixins: [
      promoCard
    ]
  }
</script>
