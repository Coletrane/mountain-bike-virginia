<template>
  <blog-post :image="img + post.imgRoute"
             :post="post"
             header-author
             :related-posts="relatedPosts">
    <div slot="content">
      <youtube :src="post.ytSrc"/>
    </div>
  </blog-post>
</template>
<script>
import BlogPost from "../../components/BlogPost"
import BlogImage from "../../components/Images/BlogImage"

import blogPost from "../../assets/mixins/blog-post"

export default {
  name: "",
  components: {
    BlogPost,
    Youtube
  },
  mixins: [blogPost]
}
</script>
