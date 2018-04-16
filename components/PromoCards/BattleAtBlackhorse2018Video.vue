<template>
  <post-card :post="$store.getters.getPost(battleAtBlackhorse2018Video)"
             no-author>
    <div slot="media">
      <youtube :src="$store.getters.getPost(battleAtBlackhorse2018Video).ytSrc"/>
    </div>
  </post-card>
</template>

<script>
  import PostCard from '../Card/PostCard'
  import Youtube from '../Iframes/Youtube'

  export default {
    name: 'battle-at-blackhorse-2018-video-promo',
    components: {
      PostCard,
      Youtube
    },
    data() {
      return {
        battleAtBlackhorse2018Video: battleAtBlackhorse2018Video,
      }
    }
  }
</script>
