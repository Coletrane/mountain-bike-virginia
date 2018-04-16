<template>
  <post-card :post="$store.getters.getPost(hoopHoleTrailWork2018)"
             no-author>
    <div slot="words">
      The entry fee for the <a :href="$store.getters.getPost(rockstarVa2018).fbEvent">RockStar VA</a> race/ride captures the spirit of backcountry riding exquisitely. Entrants can either donate to a trail work advocacy group, or complete 10 hours of trail work. Seeing as the latter involves me out exploring and riding, the trail work option was the only choice.
    </div>

    <div slot="media">
      <image-link :post="$store.getters.getPost(hoopHoleTrailWork2018)"/>
    </div>
  </post-card>
</template>

<script>
  import PostCard from '../Card/PostCard'
  import ImageLink from '../Images/ImageLink'

  export default {
    name: 'hoop-hole-trail-work-2018-promo',
    components: {
      PostCard,
      ImageLink
    },
    data() {
      return {
        hoopHoleTrailWork2018: hoopHoleTrailWork2018,
        rockstarVa2018: rockstarVa2018,
        middleMtMomma2018: middleMtMomma2018
      }
    }
  }
</script>
