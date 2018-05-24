<template>
  <blog-post :image="img + post.imgRoute"
             :post="post"
             :related-posts="relatedPosts">
    <div slot="content">
      <youtube :src="post.ytSrc"/>
    </div>
  </blog-post>
</template>
<script>
  import BlogPost from '../../components/BlogPost'
  import Youtube from '../../components/Iframes/Youtube'

  import blogPost from '../../assets/mixins/blog-post'

  export default {
    name: 'blue-ridge-trailheads-foggy-spec',
    components: {
      BlogPost,
      Youtube
    },
    mixins: [
      blogPost
    ]
  }
</script>
