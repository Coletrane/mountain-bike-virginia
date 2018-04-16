<template>
  <post-card :post="$store.getters.getPost(gravelocity2017Video)"
             no-author>
    <div slot="media">
      <youtube :src="$store.getters.getPost(gravelocity2017Video).ytSrc"/>
    </div>
  </post-card>
</template>

<script>
  import PostCard from '../Card/PostCard'
  import Youtube from '../Iframes/Youtube'

  export default {
    name: 'gravelocity-2017-video-promo',
    components: {
      PostCard,
      Youtube
    },
    data() {
      return {
        gravelocity2017Video: gravelocity2017Video
      }
    }
  }
</script>
