<template>
  <post-card :post="post"
  >
    <div slot="media">
      <youtube :src="post.ytSrc"/>
    </div>
  </post-card>
</template>
<script>
  import PostCard from '../Card/PostCard'
  import Youtube from '../Iframes/Youtube'

  export default {
    name: 'dody-ridge-run-fall-2017-promo',
    components: {
      PostCard,
      Youtube
    },
    data() {
      return {
        post: this.$store.getters.getPost('dody-ridge-run-fall-2017')
      }
    }
  }
</script>
