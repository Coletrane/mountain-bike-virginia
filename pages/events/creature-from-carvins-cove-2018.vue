<template>
  <blog-post :image="img + 'creatureduro.jpg'"
             :post="post"
             :related-posts="relatedPosts">
    <div slot="content">
      <creature2018-info :post="post"/>
    </div>
  </blog-post>
</template>
<script>
import BlogPost from "@/components/BlogPost"
import BlogImage from "@/components/Images/BlogImage"
import Creature2018Info from "../../components/Temporary/Creature2018Info"

import blogPost from "@/assets/mixins/blog-post"

export default {
  name: "events-creature-from-carvins-cove-2018",
  components: {
    BlogImage,
    BlogPost,
    Creature2018Info
  },
  mixins: [blogPost]
}
</script>
