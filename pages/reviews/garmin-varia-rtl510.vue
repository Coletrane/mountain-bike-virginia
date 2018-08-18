<template>
  <blog-post :image="img + post.imgRoute"
             :post="post"
             :related-posts="relatedPosts">
    <div slot="content">
      <blog-image :src="img + 'P1020668.jpg'"/>
      <blog-image :src="img + 'P1020753.jpg'"/>
      <blog-image :src="img + 'P1020673.jpg'"/>
      <blog-image :src="img + 'P1020674.jpg'"/>
      <blog-image :src="img + 'P1020675.jpg'"/>
      <blog-image :src="img + 'P1020677.jpg'"/>
      <blog-image :src="img + 'P1020684.jpg'"/>
      <blog-image :src="img + 'P1020685.jpg'"/>
      <blog-image :src="img + 'P1020686.jpg'"/>
      <blog-image :src="img + 'P1020692.jpg'"/>
      <blog-image :src="img + 'P1020693.jpg'"/>
      <blog-image :src="img + 'P1020694.jpg'"/>
      <blog-image :src="img + 'P1020695.jpg'"/>
      <blog-image :src="img + 'P1020696.jpg'"/>
      <blog-image :src="img + 'P1020697.jpg'"/>
      <blog-image :src="img + 'P1020699.jpg'"/>
      <blog-image :src="img + 'P1020700.jpg'"/>
      <blog-image :src="img + 'P1020702.jpg'"/>
      <blog-image :src="img + 'P1020670.jpg'"/>
      <blog-image :src="img + 'P1020712.jpg'"/>
      <blog-image :src="img + 'P1020713.jpg'"/>
      <blog-image :src="img + 'P1020715.jpg'"/>
      <blog-image :src="img + 'P1020716.jpg'"/>
      <blog-image :src="img + 'P1020717.jpg'"/>
      <blog-image :src="img + 'P1020718.jpg'"/>
      <blog-image :src="img + 'P1020719.jpg'"/>
      <blog-image :src="img + 'P1020722.jpg'"/>
      <blog-image :src="img + 'P1020732.jpg'"/>
      <blog-image :src="img + 'P1020733.jpg'"/>
      <blog-image :src="img + 'P1020734.jpg'"/>
      <blog-image :src="img + 'P1020735.jpg'"/>
      <blog-image :src="img + 'P1020736.jpg'"/>
      <blog-image :src="img + 'P1020737.jpg'"/>
      <blog-image :src="img + 'P1020738.jpg'"/>
      <blog-image :src="img + 'P1020739.jpg'"/>
      <blog-image :src="img + 'P1020750.jpg'"/>
      <blog-image :src="img + 'P1020709.jpg'"/>
    </div>
  </blog-post>
</template>
<script>
import BlogPost from "../../components/BlogPost"
import BlogImage from "../../components/Images/BlogImage"

import blogPost from "../../assets/mixins/blog-post"

export default {
  name: "garmin-varia-rtl510",
  components: {
    BlogImage,
    BlogPost
  },
  mixins: [blogPost]
}
</script>
