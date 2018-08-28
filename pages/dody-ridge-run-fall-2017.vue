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


import blogPost from "../mixins/blog-post"

export default {
  name: "dody-ridge-run-fall-2017",
  mixins: [blogPost]
}
</script>
