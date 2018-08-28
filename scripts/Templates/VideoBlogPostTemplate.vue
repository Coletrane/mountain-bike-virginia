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
import blogPost from "../../mixins/blog-post"

export default {
  name: "",
  mixins: [blogPost]
}
</script>
