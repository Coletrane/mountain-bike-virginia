<template>
  <div class="blog-post">
    <m-t-b-v-a-header
      :header-height="headerHeight"
      :image="image"
      :title="post.title">
    </m-t-b-v-a-header>
    <div class="main-content">
        <post-card :post="post">
          <div slot="author">
          </div>
          <div slot="media">
            <author :author="post.author"/>
            <slot name="content"/>
          </div>
        </post-card>
    </div>
  </div>
</template>
<script>
  import MTBVAHeader from "./MTBVAHeader.vue"
  import Youtube from "./Youtube.vue"
  import PostCard from "./PostCard"
  import RideWithGps from "./RideWithGps.vue"
  import SocialActions from "./SocialActions.vue"
  import Author from "./Author.vue"

  export default {
    name: "blog-post",
    components: {
      MTBVAHeader,
      Youtube,
      PostCard,
      RideWithGps,
      SocialActions,
      Author
    },
    props: [
      "headerHeight",
      "image",
      "post",
      "inlineAuthor"
    ]
  }
</script>
<style>
  h1 {
    text-shadow: 0px 5px 5px rgb(0, 0, 0);
    font-size: 4rem !important;
  }

  .words {
    padding: 0;
  }

  .blog-p {
    padding: 1rem;
    font-size: 1.2rem;
  }

  .center {
    text-align: center;
  }

  .caption {
    font-size: 1rem;
    color: #5c5e5c;
  }

</style>
