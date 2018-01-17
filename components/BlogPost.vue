<template>
  <div class="blog-post">
    <m-t-b-v-a-header
      :header-height="headerHeight"
      :image="image"
      :title="post.title">
    </m-t-b-v-a-header>
    <v-content>
      <v-container>
        <post-card :post="post">
          <div slot="top">
            <div class="blog-p subheading">
              <div v-if="inlineAuthor">
                <h3 class="subheading">{{post.subtitle}}</h3>
                <author
                  :author="post.author"
                  :inline="inlineAuthor">
                </author>
              </div>
              <div v-else>
                <h3 class="subheading">{{post.subtitle}}</h3>
                <author
                  :author="post.author"
                  :inline="inlineAuthor">
                </author>
              </div>
            </div>
          </div>
          <div slot="middle">
            <slot name="content"></slot>
          </div>
        </post-card>
      </v-container>
    </v-content>
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
  @media screen and (min-width: 600px) {
    .container {
      max-width: 1350px !important;;
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  @media screen and (max-width: 600px) {
    h6 {
      font-size: 20px !important;
    }
  }

  .blog-p {
    padding: 1rem;
  }

  .mtbva-title {
    text-shadow: 0px 10px 20px rgb(0, 0, 0);
  }
</style>
