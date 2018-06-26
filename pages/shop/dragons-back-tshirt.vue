<template>
  <blog-post :image="img + post.imgRoute"
             :post="post"
             :related-posts="relatedPosts">
    <div slot="content">
      <blog-image :src="img + 'dragons-back-tshirt.jpg'"/>
    </div>
  </blog-post>
</template>
<script>
  import BlogPost from '../components/BlogPost'
  import BlogImage from '../components/Images/BlogImage'

  import blogPost from '../assets/mixins/blog-post'

  export default {
    name: 'dragons-back-tshirt',
    components: {
      BlogImage,
      BlogPost
    },
    mixins: [
      blogPost
    ]
  }
</script>
