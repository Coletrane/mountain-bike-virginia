<template>
  <div id="blog">
    <m-t-b-v-a-header
      header-height="800"
      v-bind:image="image"
      title="Mountain Bike Virginia"
      subtitle="Exposing the trove of trails in The Old Dominion"
      button="Ride or Race with us"
      buttonLink="https://www.facebook.com/pg/xxcva/events/">
    </m-t-b-v-a-header>

    <v-content>
      <v-container>
        <v-layout row wrap align-center>
          <div v-for="post in posts">
            <v-card hover
                    ripple
                    v-bind:href="post.href"
                    class="post">

              <v-card-text>
                <h4>{{post.title}}</h4>
                <h6>{{post.subtitle}}</h6>

                <paragraph-with-links
                  v-bind:paragraph="post.promoParagraph">
                </paragraph-with-links>

                <div v-if="post.altUrl">
                  <router-link v-bind:to="post.altUrl">
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

              <social-actions :post="post"></social-actions>

            </v-card>
          </div>
        </v-layout>
      </v-container>
    </v-content>

  </div>
</template>

<script>
  import Foliage from '../../static/img/foliage.png'
  import MTBVAHeader from '../components/MTBVAHeader.vue'
  import Youtube from '../components/Youtube.vue'
  import ParagraphWithLinks from "../components/ParagraphWithLinks.vue"
  import SocialActions from '../components/SocialActions.vue'
  import posts from './posts'

  export default {
    name: 'blog',
    components: {
      ParagraphWithLinks,
      MTBVAHeader,
      Youtube,
      SocialActions
    },
    data() {
      return {
        posts: posts
      }
    },
    computed: {
      image() {
        return Foliage
      },
    },
  }
</script>

<style>
  .post {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .post-img {
    width: 100%;
  }
</style>
