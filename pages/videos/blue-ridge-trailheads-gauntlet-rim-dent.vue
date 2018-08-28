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
import blogPost from "../../mixins/blog-post"

export default {
  name: "blue-ridge-trailheads-gauntlet-rim-dent",
  mixins: [blogPost]
}
</script>
