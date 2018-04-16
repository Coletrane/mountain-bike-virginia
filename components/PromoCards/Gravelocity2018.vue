<template>
  <post-card :post="$store.getters.getPost(gravelocity2018)"
             no-author>
    <div slot="words">
      <div class="promo">
        Who wants to do a gravel ride? Okay how about a 54 mile one? Okay how about 20 degrees?
        Perfect. Let's ride. Once again Gravelocity had a great turnout with people coming from
        Fredricksburg, Virginia Beach, and even Cincinnati!
      </div>
    </div>
    <div slot="media">
      <image-link :post="$store.getters.getPost(gravelocity2018)"/>
    </div>
  </post-card>
</template>

<script>
  import PostCard from '../Card/PostCard'
  import ImageLink from '../Images/ImageLink'

  export default {
    name: 'gravelocity-2018-promo',
    components: {
      PostCard,
      ImageLink
    },
    data() {
      return {
        gravelocity2018: gravelocity2018
      }
    }
  }
</script>