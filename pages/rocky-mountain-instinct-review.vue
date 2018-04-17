<template>
  
</template>
<script>
  import BlogPost from "../components/BlogPost.vue"
  import BlogImage from "../components/Images/BlogImage"

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
