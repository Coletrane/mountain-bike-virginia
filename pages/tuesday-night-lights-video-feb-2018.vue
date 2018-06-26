<template>
  <div>
    <blog-post :image="img + post.imgRoute"
               :post="post"
               header-author
               :related-posts="relatedPosts">
      <div slot="content">
        <div>
          <youtube :src="post.ytSrc"/>
        </div>
      </div>
    </blog-post>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost"
import Youtube from "../components/Iframes/Youtube"

import blogPost from "../assets/mixins/blog-post"

export default {
  name: "tuesday-night-lights-video-feb-2018",
  components: {
    Youtube,
    BlogPost
  },
  mixins: [blogPost]
}
</script>
