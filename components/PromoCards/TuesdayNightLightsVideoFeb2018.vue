<template>
  <post-card :post="$store.getters.getPost(tuesdayNightLightsVideoFeb2018)"
             no-author>
    <div slot="media">
      <youtube :src="$store.getters.getPost(tuesdayNightLightsVideoFeb2018).ytSrc"/>
    </div>
  </post-card>
</template>

<script>
  import PostCard from '../Card/PostCard'
  import Youtube from '../Iframes/Youtube'

  export default {
    name: 'tuesday-night-lights-video-feb-2018-promo',
    components: {
      PostCard,
      Youtube
    },
    data() {
      return {
        tuesdayNightLightsVideoFeb2018: tuesdayNightLightsVideoFeb2018
      }
    }
  }
</script>
