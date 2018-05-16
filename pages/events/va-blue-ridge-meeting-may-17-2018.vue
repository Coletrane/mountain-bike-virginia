<template>
  <blog-post :image="img + ''"
             :post="post"
             :related-posts="relatedPosts">
    <div slot="content">
    </div>
  </blog-post>
</template>
<script>
  import BlogPost from '../../components/BlogPost'
  import BlogImage from '../../components/Images/BlogImage'

  import blogPost from '../../assets/mixins/blog-post'

  export default {
    name: 'va-blue-ridge-meeting-may-17-2018',
    components: {
      BlogImage,
      BlogPost
    },
    mixins: [
      blogPost
    ]
  }
</script>
