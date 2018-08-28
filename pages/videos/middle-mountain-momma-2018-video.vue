<template>
  <blog-post :image="img + post.imgRoute"
             :post="post"
             :related-posts="relatedPosts">
    <div slot="content">
      <div class="blog-p">
        {{post.description}}
        <div>
          <nuxt-link :to="{name: 'results-middle-mountain-momma-2018'}">
            View the results.
          </nuxt-link>
        </div>
      </div>
      <div>
        <youtube :src="post.ytSrc"/>
      </div>
    </div>
  </blog-post>
</template>
<script>


import blogPost from "../../mixins/blog-post"

export default {
  name: "middle-mountain-momma-2018-video",
  mixins: [blogPost]
}
</script>
