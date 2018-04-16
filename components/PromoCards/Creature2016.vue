<template>
  <post-card :post="$store.getters.getPost(creature2016)"
             no-author>
    <div slot="words">
      <div class="promo">
        The innagural year of Virginia's Blue Ridge Creature from Carvins Cove was a smashing
        success. We
        were
        even graced by the presence of the fantastic Mr. <a
        href="https://en.wikipedia.org/wiki/Jeremiah_Bishop">Jeremiah Bishop</a> who still
        managed to take
        first despite starting 3 minutes late.
      </div>
    </div>
    <div class="promo">
      <nuxt-link :to="'results'">
        View the results here.
      </nuxt-link>
    </div>
    <div slot="media">
      <youtube :src="$store.getters.getPost(creature2016).ytSrc"/>
    </div>
  </post-card>
</template>

<script>
  import PostCard from '../Card/PostCard'
  import Youtube from '../Iframes/Youtube'

  export default {
    name: 'creature-2016-promo',
    components: {
      PostCard,
      Youtube
    },
    data() {
      return {
        creature2016: creature2016
      }
    }
  }
</script>
