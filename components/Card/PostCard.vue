<template>
  <abstract-post-card :post="post">
    <div slot="header">
      <post-header :post="post"/>
    </div>
    <div slot="after-header">
      <div class="words">
        <slot name="words"/>
      </div>
      <div class="mtbva-media">
        <slot name="media"/>
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
    computed: {
      formattedDate() {
        if (this.post.date) {
          return new Date()
        }
      }
    }
  }
</script>



