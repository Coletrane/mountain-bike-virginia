<template>
  <div>
    <blog-post :image="img + post.imgRoute"
               :post="post"
               header-author
               :related-posts="relatedPosts">
      <div slot="content">
        <youtube :src="post.ytSrc"/>
      </div>
    </blog-post>
  </div>
</template>
<script>


import blogPost from "../mixins/blog-post"

export default {
  name: "gravelocity-2017-video",
  mixins: [blogPost]
}
</script>
