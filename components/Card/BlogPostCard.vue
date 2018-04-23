<template>
  <abstract-post-card :post="post">
    <div slot="header">
      <post-header :post="post"/>
      <div v-if="headerAuthor">
        <author v-if="post.author"
                :author="post.author"/>
      </div>
    </div>
    <div class="mtbva-media">
      <div v-if="!headerAuthor">
        <author v-if="post.author"
                :author="post.author"/>
      </div>
      <slot name="media"/>
    </div>
  </abstract-post-card>
</template>
<script>
  import AbstractPostCard from './AbstractPostCard'
  import PostHeader from './PostHeader'
  import Author from './Author'

  export default {
    name: 'blog-post-card',
    props: {
      post: {
        type: Object,
        required: true
      },
      headerAuthor: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    components: {
      PostHeader,
      AbstractPostCard,
      Author
    }
  }
</script>
<style scoped>
</style>