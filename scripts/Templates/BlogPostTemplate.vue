<template>
  <blog-post :image="img + post.imgRoute"
             :post="post"
             :related-posts="relatedPosts">
    <div slot="content">
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
