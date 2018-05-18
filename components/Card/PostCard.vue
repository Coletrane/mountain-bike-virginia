<template>
  <abstract-post-card :post="post">
    <div slot="header">
      <post-header :post="post"/>
    </div>
    <div slot="after-header">
      <div class="mtbva-media">
        <slot name="media"/>
      </div>
      <div class="words"
            :class="noPadding">
        <slot name="words"/>
      </div>
    </div>
  </abstract-post-card>
</template>
<script>
  import AbstractPostCard from './AbstractPostCard'
  import SocialActions from './SocialActions'
  import Author from './Author'
  import PostHeader from './PostHeader'

  export default {
    name: 'post-card',
    props: {
      post: {
        required: true
      }
    },
    components: {
      PostHeader,
      AbstractPostCard,
      SocialActions,
      Author
    },
    data() {
      return {
        noPadding: ''
      }
    },
    mounted() {
      if (this.$store.state.posts.currentPost.route === this.post.route) {
        this.$el.scrollIntoView()
      }
      if (!this.$el.getElementsByClassName('words')[0].innerHTML) {
        this.noPadding = 'no-padding'
      }
    }
  }
</script>
<style>
  .no-padding {
    padding: 0 !important;
  }
</style>


