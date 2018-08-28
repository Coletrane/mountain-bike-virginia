<template>
  <blog-post :image="img + 'creature-render.jpg'"
             :post="post"
             :related-posts="relatedPosts">
    <div slot="content">
      <creature2018-info :post="post"/>
    </div>
  </blog-post>
</template>
<script>
import Creature2018Info from "../../components/Temporary/Creature2018Info"

import blogPost from "../../mixins/blog-post"

export default {
  name: "events-creature-from-carvins-cove-2018",
  components: {
    Creature2018Info
  },
  mixins: [blogPost]
}
</script>
