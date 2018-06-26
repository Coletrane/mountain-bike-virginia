<template>
  <div>
    <blog-post :image="img + post.imgRoute"
      :post="post"
      header-author>
      <div slot="content">
        <youtube :src="post.ytSrc"/>
      </div>
    </blog-post>
  </div>
</template>
<script>
import BlogPost from "../components/BlogPost.vue"
import Youtube from "../components/Iframes/Youtube.vue"

import blogPost from "../assets/mixins/blog-post"

export default {
  name: "dody-ridge-run-fall-2017",
  components: {
    BlogPost,
    Youtube
  },
  mixins: [blogPost]
}
</script>
