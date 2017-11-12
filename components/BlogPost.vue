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
                <h6>{{post.subtitle}}</h6>
                <author :author="post.author"></author>
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
  import MTBVAHeader from './MTBVAHeader.vue';
  import Youtube from './Youtube.vue';
  import PostCard from './PostCard';
  import RideWithGps from './RideWithGps.vue';
  import SocialActions from './SocialActions.vue';
  import Author from './Author.vue';

  export default {
    name: 'blog-post',
    components: {
      MTBVAHeader,
      Youtube,
      PostCard,
      RideWithGps,
      SocialActions,
      Author
    },
    props: [
      'headerHeight',
      'image',
      'post'
    ],
  };
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

  .blog-img {
    width: 100% !important;
  }

  .blog-p {
    padding: 1rem;
  }

</style>
