<template>
  <div>
    <blog-post :header-height="900"
               :image="img + post.imgRoute"
               :post="post"
               header-author
               :related-posts="relatedPosts">
      <div slot="content">
          <youtube :src="post.ytSrc"/>
      </div>
    </blog-post>
  </div>
</template>

<script>
  import BlogPost from '../components/BlogPost.vue'
  import Youtube from '../components/Iframes/Youtube.vue'

  import blogPost from '../assets/mixins/blog-post'

  export default {
    name: 'battle-at-blackhorse-2018-video',
    components: {
      BlogPost,
      Youtube
    },
    mixins: [
      blogPost
    ]
  }
</script>
