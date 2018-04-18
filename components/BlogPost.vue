<template>
  <div class="blog-post">
    <m-t-b-v-a-header
      :header-height="headerHeight"
      :image="image"
      :title="post.title"/>

    <banner-ad href="https://viralstyle.com/store/angelo-wash/Sketchcollect"
               :img="s3Ads + '/sketch-collect/sketch-collect-banner.jpg'"/>

    <div class="main-content"
         :style="backgroundImage">
      <post-card :post="post"
                 no-post-title
                 blog-post
                 :header-author="headerAuthor"
                 :author-separate-div="authorSeparateDiv">
        <div slot="header">
          <slot name="header"/>
        </div>
        <div slot="media">
          <slot name="content"/>
        </div>
      </post-card>

      <related-posts v-if="relatedPosts"
                     :posts="relatedPosts"/>
    </div>

  </div>
</template>
<script>
  import MTBVAHeader from './Header/MTBVAHeader.vue'
  import Youtube from './Iframes/Youtube.vue'
  import PostCard from './Card/PostCard'
  import RideWithGps from './Iframes/RideWithGps.vue'
  import SocialActions from './Card/SocialActions.vue'
  import Author from './Card/Author.vue'
  import RelatedPosts from './Card/RelatedPosts'
  import BannerAd from './Ads/BannerAd'

  import {s3StaticImg, s3Ads} from '../scripts/routes'

  export default {
    name: 'blog-post',
    components: {
      MTBVAHeader,
      Youtube,
      PostCard,
      RideWithGps,
      SocialActions,
      Author,
      RelatedPosts,
      BannerAd
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
      },
      inlineAuthor: {
        type: Boolean,
        required: false,
        default: false
      },
      headerAuthor: {
        type: Boolean,
        required: false,
        default: false
      },
      authorSeparateDiv: {
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
        s3Ads: s3Ads
      }
    },
    computed: {
      backgroundImage() {
        return {
          backgroundImage:`url("${s3StaticImg}/asfalt-light.png")`
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
