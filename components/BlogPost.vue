<template>
  <div class="blog-post">
    <m-t-b-v-a-header :image="image"
                      :title="post.title"/>
    <banner/>
    <div class="main-content"
         :style="backgroundImage">
      <blog-post-card :post="post"
                      :header-author="headerAuthor">
        <div slot="media">
          <slot name="content"/>
        </div>
      </blog-post-card>
      <related-posts v-if="relatedPosts"
                     :posts="relatedPosts"/>
    </div>
  </div>
</template>
<script>
  import MTBVAHeader from './Header/MTBVAHeader.vue'
  import Youtube from './Iframes/Youtube.vue'
  import BlogPostCard from './Card/BlogPostCard'
  import RideWithGps from './Iframes/RideWithGps.vue'
  import SocialActions from './Card/SocialActions.vue'
  import Author from './Card/Author.vue'
  import RelatedPosts from './Card/RelatedPosts'
  import Banner from './Das/Banner'

  import { s3StaticImg, s3Banners } from '../scripts/routes'

  export default {
    name: 'blog-post',
    components: {
      MTBVAHeader,
      Youtube,
      BlogPostCard,
      RideWithGps,
      SocialActions,
      Author,
      RelatedPosts,
      Banner
    },
    props: {
      image: {
        type: String,
        required: true
      },
      post: {
        required: true
      },
      headerAuthor: {
        type: Boolean,
        required: false,
        default: false
      },
      relatedPosts: {
        type: Array,
        required: false
      }
    },
    data() {
      return {
        s3Banners: s3Banners
      }
    },
    computed: {
      backgroundImage() {
        return {
          backgroundImage: `url("${s3StaticImg}/asfalt-light.png")`
        }
      }
    }
  }
</script>
<style>
  .blog-p {
    padding: 1rem;
    font-size: 1.2rem;
  }

  .blog-promo {
    padding: 1rem;
  }

  .center {
    text-align: center;
  }

  .caption {
    font-size: 1rem;
    color: #5c5e5c;
  }
</style>
<style scoped>
</style>
