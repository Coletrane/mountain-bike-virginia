<template>
  <post-card :post="post">
    <div slot="words"
         class="promo">
      <a href="https://www.singletracks.com/bike-trails/dragons-back.html">North Mountain Trail</a> is a must-do for any
      serious mountain biker,” says Dan Lucas,&nbsp;Lead MTB Guide and Shop Manager for&nbsp;<a
      href="http://roanokemountainadventures.com/">Roanoke Mountain Adventures</a>. “It’s got a little bit of everything
      you would want in a backcountry trail: lung-busting climbs, skin-peeling descents, chunky tech rock gardens that
      will test the best trials riders, and classic East Coast rooty fun.”
    </div>
    <div slot="media">
      <image-link :post="post"
                  :href="post.link"/>
    </div>
  </post-card>
</template>
<script>
  import PostCard from '../../Card/PostCard'
  import ImageLink from '../../Images/ImageLink'

  import promoCard from '../../../assets/mixins/promo-card'

  export default {
    name: 'external-singletracks-best-mtb-towns-promo',
    components: {
      PostCard,
      ImageLink
    },
    mixins: [
      promoCard
    ]
  }
</script>
