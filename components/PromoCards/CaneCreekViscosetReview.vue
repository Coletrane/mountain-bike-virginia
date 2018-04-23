<template>
  <post-card :post="post"
  >
    <div slot="words">
      <div class="promo">
        I first became aware of Cane Creek’s ViscoSet steering damper from <a href="http://teamdicky.blogspot.com/">
        Rich Dillen’s Bad Idea Racing blog</a>. Little did I know, this little wonder unit was designed to solve an E
        bike steering oscillation problem.
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

  export default {
    name: 'cane-creek-viscoset-review-promo',
    components: {
      PostCard,
      ImageLink
    },
    data() {
      return {
        post: this.$store.getters.getPost('cane-creek-viscoset-review')
      }
    }
  }
</script>
