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
  name: "battle-at-blackhorse-2018-video",
  mixins: [blogPost]
}
</script>
