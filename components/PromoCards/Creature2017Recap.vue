<template>
  <post-card :post="post"
  >
    <div slot="words">
      <div class="promo">
        Once again Virginia's Blue Ridge Creature from Carvins Cove was a resounding success.
        Special thanks
        to Debbie Inman, Renee Powers, Chris Lee, and all the wonderful staff who helped make
        the Creature
        come alive.
      </div>
      <div class="promo">
        <nuxt-link :to="{name: 'results'}">
          View the results here.
        </nuxt-link>
      </div>
    </div>
    <div slot="media">
      <youtube :src="post.youtube"/>
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
        post: this.$store.getters.getPost('creature-2017-recap')
      }
    }
  }
</script>