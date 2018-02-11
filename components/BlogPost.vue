<template>
  <div class="blog-post">
    <m-t-b-v-a-header
      :header-height="headerHeight"
      :image="image"
      :title="post.title"
      subpage/>
    <div class="main-content">
        <post-card :post="post"
                   :links="false">
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
  import MTBVAHeader from "./Header/MTBVAHeader.vue"
  import Youtube from "./Iframes/Youtube.vue"
  import PostCard from "./Card/PostCard"
  import RideWithGps from "./Iframes/RideWithGps.vue"
  import SocialActions from "./Card/SocialActions.vue"
  import Author from "./Card/Author.vue"

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
    props: {
      headerHeight: {
        type: Number
      },
      image: {
        type: String,
        required: true
      },
      post: {
        required: true
      }
    }
  }
</script>
<style>
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
