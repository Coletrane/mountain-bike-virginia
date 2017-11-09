<template>
  <div id="blog">
    <m-t-b-v-a-header
      header-height="800"
      :image="img + 'foliage.png'"
      title="Mountain Bike Virginia"
      subtitle="Exposing the trove of trails in The Old Dominion"
      button="Ride or Race with us"
      buttonLink="https://www.facebook.com/pg/xxcva/events/">
    </m-t-b-v-a-header>

    <v-content>
      <v-container>
        <v-layout row wrap align-center>
          <div v-for="post in postsPage" class="post-card">
            <v-card hover
                    ripple
                    :href="post.href || ''"
                    class="post">

              <v-card-text>
                <h4>{{post.title}}</h4>

                <h6>{{post.subtitle}}</h6>

                <paragraph-with-links
                  :paragraph="post.promoParagraph">
                </paragraph-with-links>

                <div v-if="post.altUrl">
                  <router-link :to="post.altUrl">
                  {{post.altText}}
                </router-link>
                </div>
              </v-card-text>

              <youtube v-if="post.youtubeSrc"
                       :src="post.youtubeSrc">
              </youtube>

              <img v-if="post.img"
                   :src="post.img"
                   class="post-img">

              <div class="post-card">
                <social-actions :post="post"></social-actions>
              </div>
            </v-card>
          </div>

          <v-pagination :length="1"
                        v-model="page">
          </v-pagination>

        </v-layout>
      </v-container>
    </v-content>

  </div>
</template>

<script>
  import MTBVAHeader from '../components/MTBVAHeader.vue'
  import Youtube from '../components/Youtube.vue'
  import ParagraphWithLinks from "../components/ParagraphWithLinks.vue"
  import SocialActions from '../components/SocialActions.vue'
  import { postsPages } from '../assets/posts'

  import metas from '../metas'

  export default {
    name: 'blog',
    components: {
      ParagraphWithLinks,
      MTBVAHeader,
      Youtube,
      SocialActions
    },
    metaInfo: metas['/'],
    data() {
      const page =  parseInt(this.$route.name) || 1

      return {
        img: process.env.s3 + '/static/img/',
        postsPage: postsPages[page - 1],
        posts: postsPages[page - 1],
        page: page,
      }
    },
    computed: {
//      postsPages() {
//        let count = 0
//        let postsGroup = 0
//        let result = [[]]
//
//        return result
//      },
//      postsPage() {
//        return this.postsPages[this.page - 1]
//      }
    },
  }
</script>

<style>
  @media screen and (min-width: 600px) {
    .container {
      max-width: 1200px !important;;
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  .post-card {
    width: 100%
  }
  .post {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .post-img {
    width: 100%;
  }
  .pagination {
    margin: auto
  }
  .application--light .pagination__item--active {
    background: rgba(80, 97, 111, 0.82) !important;
  }
</style>
