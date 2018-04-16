<template>
  <post-card :post="$store.getters.getPost(creature2017Recap)"
             no-author>
    <div slot="words">
      <div class="promo">
        Once again Virginia's Blue Ridge Creature from Carvins Cove was a resounding success.
        Special thanks
        to Debbie Inman, Renee Powers, Chris Lee, and all the wonderful staff who helped make
        the Creature
        come alive.
      </div>
      <div class="promo">
        <nuxt-link :to="'results'">
          View the results here.
        </nuxt-link>
      </div>
    </div>
    <div slot="media">
      <youtube :src="$store.getters.getPost(creature2017Recap).ytSrc"/>
    </div>
  </post-card>
</template>

<script>
  import PostCard from '../Card/PostCard'
  import Youtube from '../Iframes/Youtube'

  export default {
    name: 'creature-2017-recap-promo',
    components: {
      PostCard,
      Youtube
    },
    data() {
      return {
        creature2017Recap: creature2017Recap
      }
    }
  }
</script>

<style scoped>

</style>