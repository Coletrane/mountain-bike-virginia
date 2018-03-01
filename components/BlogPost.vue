<template>
  <div class="blog-post">
    <m-t-b-v-a-header
      :header-height="headerHeight"
      :image="image"
      :title="title"
      subpage/>
    <div class="main-content">
      <post-card :post="post"
                 :links="false"
                 :no-title="noPostTitle">
        <div slot="author">
          <div v-if="post.date">
            {{post.date}}
          </div>
          <div v-if="post.loc">
            {{post.loc}}
          </div>
        </div>

        <div slot="media">
          <author :author="post.author"
                  :class="authorClass"/>
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

  export default {
    name: 'blog-post',
    components: {
      MTBVAHeader,
      Youtube,
      PostCard,
      RideWithGps,
      SocialActions,
      Author,
      RelatedPosts
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
      noTitle: {
        type: Boolean,
        required: false,
        default: false
      },
      noPostTitle: {
        type: Boolean,
        required: false,
        default: true
      },
      relatedPosts: {
        type: Array,
        required: false
      }
    },
    computed: {
      title() {
        if (!this.noTitle) {
          return this.post.title
        }
      },
      authorClass() {
        if (this.inlineAuthor) {
          return 'inline-author'
        }
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

  .inline-author {
    float: unset !important;
  }
</style>
