<template>
  <blog-post :image="img + post.imgRoute"
             :post="post"
             :related-posts="relatedPosts">
    <div slot="content">
      <blog-image :src="img + 'P1020478.jpg'"/>
      <blog-image :src="img + 'P1020279.jpg'"/>
      <blog-image :src="img + 'P1020280.jpg'"/>
      <blog-image :src="img + 'P1020283.jpg'"/>
      <blog-image :src="img + 'P1020285.jpg'"/>
      <blog-image :src="img + 'P1020287.jpg'"/>
      <blog-image :src="img + 'P1020294.jpg'"/>
      <blog-image :src="img + 'P1020304.jpg'"/>
      <blog-image :src="img + 'P1020305.jpg'"/>
      <blog-image :src="img + 'P1020306.jpg'"/>
      <blog-image :src="img + 'P1020307.jpg'"/>
      <blog-image :src="img + 'P1020308.jpg'"/>
      <blog-image :src="img + 'P1020309.jpg'"/>
      <blog-image :src="img + 'P1020310.jpg'"/>
      <blog-image :src="img + 'P1020311.jpg'"/>
      <blog-image :src="img + 'P1020318.jpg'"/>
      <blog-image :src="img + 'P1020320.jpg'"/>
      <blog-image :src="img + 'P1020321.jpg'"/>
      <blog-image :src="img + 'P1020324.jpg'"/>
      <blog-image :src="img + 'P1020329.jpg'"/>
      <blog-image :src="img + 'P1020331.jpg'"/>
      <blog-image :src="img + 'P1020334.jpg'"/>
      <blog-image :src="img + 'P1020335.jpg'"/>
      <blog-image :src="img + 'P1020336.jpg'"/>
      <blog-image :src="img + 'P1020338.jpg'"/>
      <blog-image :src="img + 'P1020339.jpg'"/>
      <blog-image :src="img + 'P1020340.jpg'"/>
      <blog-image :src="img + 'P1020344.jpg'"/>
      <blog-image :src="img + 'P1020346.jpg'"/>
      <blog-image :src="img + 'P1020351.jpg'"/>
      <blog-image :src="img + 'P1020354.jpg'"/>
      <blog-image :src="img + 'P1020355.jpg'"/>
      <blog-image :src="img + 'P1020357.jpg'"/>
      <blog-image :src="img + 'P1020361.jpg'"/>
      <blog-image :src="img + 'P1020362.jpg'"/>
      <blog-image :src="img + 'P1020363.jpg'"/>
      <blog-image :src="img + 'P1020366.jpg'"/>
      <blog-image :src="img + 'P1020367.jpg'"/>
      <blog-image :src="img + 'P1020368.jpg'"/>
      <blog-image :src="img + 'P1020372.jpg'"/>
      <blog-image :src="img + 'P1020374.jpg'"/>
      <blog-image :src="img + 'P1020375.jpg'"/>
      <blog-image :src="img + 'P1020378.jpg'"/>
      <blog-image :src="img + 'P1020381.jpg'"/>
      <blog-image :src="img + 'P1020382.jpg'"/>
      <blog-image :src="img + 'P1020383.jpg'"/>
      <blog-image :src="img + 'P1020274.jpg'"/>
      <blog-image :src="img + 'P1020386.jpg'"/>
      <blog-image :src="img + 'P1020387.jpg'"/>
      <blog-image :src="img + 'P1020388.jpg'"/>
      <blog-image :src="img + 'P1020389.jpg'"/>
      <blog-image :src="img + 'P1020391.jpg'"/>
      <blog-image :src="img + 'P1020394.jpg'"/>
      <blog-image :src="img + 'P1020398.jpg'"/>
      <blog-image :src="img + 'P1020400.jpg'"/>
      <blog-image :src="img + 'P1020402.jpg'"/>
      <blog-image :src="img + 'P1020405.jpg'"/>
      <blog-image :src="img + 'P1020409.jpg'"/>
      <blog-image :src="img + 'P1020414.jpg'"/>
      <blog-image :src="img + 'P1020415.jpg'"/>
      <blog-image :src="img + 'P1020417.jpg'"/>
      <blog-image :src="img + 'P1020419.jpg'"/>
      <blog-image :src="img + 'P1020420.jpg'"/>
      <blog-image :src="img + 'P1020423.jpg'"/>
      <blog-image :src="img + 'P1020427.jpg'"/>
      <blog-image :src="img + 'P1020429.jpg'"/>
      <blog-image :src="img + 'P1020436.jpg'"/>
      <blog-image :src="img + 'P1020439.jpg'"/>
      <blog-image :src="img + 'P1020442.jpg'"/>
      <blog-image :src="img + 'P1020443.jpg'"/>
      <blog-image :src="img + 'P1020445.jpg'"/>
      <blog-image :src="img + 'P1020447.jpg'"/>
      <blog-image :src="img + 'P1020449.jpg'"/>
      <blog-image :src="img + 'P1020450.jpg'"/>
      <blog-image :src="img + 'P1020454.jpg'"/>
      <blog-image :src="img + 'P1020457.jpg'"/>
      <blog-image :src="img + 'P1020459.jpg'"/>
      <blog-image :src="img + 'P1020460.jpg'"/>
      <blog-image :src="img + 'P1020464.jpg'"/>
      <blog-image :src="img + 'P1020465.jpg'"/>
      <blog-image :src="img + 'P1020466.jpg'"/>
      <blog-image :src="img + 'P1020467.jpg'"/>
      <blog-image :src="img + 'P1020471.jpg'"/>
      <blog-image :src="img + 'P1020472.jpg'"/>
      <blog-image :src="img + 'P1020474.jpg'"/>
      <blog-image :src="img + 'P1020475.jpg'"/>
      <blog-image :src="img + 'P1020477.jpg'"/>
      <blog-image :src="img + 'P1020384.jpg'"/>
    </div>
  </blog-post>
</template>
<script>
import BlogPost from "@/components/BlogPost"
import BlogImage from "@/components/Images/BlogImage"

import blogPost from "@/assets/mixins/blog-post"

export default {
  name: "events-dragons-back-foggy-summer-2018",
  components: {
    BlogImage,
    BlogPost
  },
  mixins: [blogPost]
}
</script>
