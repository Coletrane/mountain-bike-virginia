<template>
  <post-card :post="post">
    <div slot="words">
      <div class="promo">
        An absolutely insane, marvelous, and memorable experience. The innagural year of the RockStar VA, a 270 mile
        race from Harrisonburg to Roanoke, Virginia. Facing snow in the first week of April wasn't part of the plan.
        Many bailed prior to the race, I was one of the only ones to bail during the race.
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
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

  import promoCard from '../../assets/mixins/promo-card'

  export default {
    name: 'rockstar-va-2018-promo',
    components: {
      PostCard,
      ImageLink,
      FontAwesomeIcon
    },
    mixins: [
      promoCard
    ],
    data() {
      return {
        faFacebook: faFacebook
      }
    }
  }
</script>
