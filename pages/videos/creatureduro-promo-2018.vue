<template>
  <blog-post :image="img + 'creature-render.jpg'"
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
  name: "creatureduro-promo-2018",
  mixins: [blogPost]
}
</script>
