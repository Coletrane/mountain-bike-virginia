<template>
  <blog-post :image="img + post.imgRoute"
             :post="post"
             :related-posts="relatedPosts">
    <div slot="content">
    </div>
  </blog-post>
</template>
<script>
  import BlogPost from '@/components/BlogPost'
  import BlogImage from '@/components/Images/BlogImage'

  import blogPost from '@/assets/mixins/blog-post'

  export default {
    name: '',
    components: {
      BlogImage,
      BlogPost
    },
    mixins: [
      blogPost
    ]
  }
</script>
