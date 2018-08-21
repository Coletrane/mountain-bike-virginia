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
import Youtube from "../../components/Iframes/Youtube"

import blogPost from "../../mixins/blog-post"

export default {
  name: "",
  components: {
    BlogPost,
    Youtube
  },
  mixins: [blogPost]
}
</script>
