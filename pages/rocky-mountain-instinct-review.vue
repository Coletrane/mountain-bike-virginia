<template>
  <blog-post :image="img + 'rocky-instinct-mill-mt-underdog-bikes.jpg'"
             :post="post"
             :related-posts="relatedPosts">
    <div slot="content">
      <div class="blog-p">

      </div>
      <blog-image :src="img + 'rocky-instinct-woodthrush-mill-mt.jpg'"/>
    </div>
  </blog-post>
</template>
<script>
  import BlogPost from '../components/BlogPost.vue'
  import BlogImage from '../components/Images/BlogImage'

  import blogPost from '../assets/mixins/blog-post'

  export default {
    name: 'rocky-mountain-instinct-review',
    components: {
      BlogPost,
      BlogImage
    },
    mixins: [
      blogPost
    ]
  }
</script>
