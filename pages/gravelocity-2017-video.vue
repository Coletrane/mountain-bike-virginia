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
import BlogPost from "../components/BlogPost"
import Youtube from "../components/Iframes/Youtube"

import blogPost from "../assets/mixins/blog-post"

export default {
  name: "gravelocity-2017-video",
  components: {
    BlogPost,
    Youtube
  },
  mixins: [blogPost]
}
</script>
