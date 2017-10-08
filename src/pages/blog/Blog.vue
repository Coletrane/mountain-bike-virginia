<template>
  <div id="blog">
    <m-t-b-v-a-header
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
            <v-card hover v-bind:href="post.href">

              <v-card-text>
                <span class="headline">{{post.title}}</span>
                <span class="subheader">{{post.subtitle}}</span>
                <span v-for="content in post.promoContent">
                  <a v-if="content.url" :href="content.url">
                    {{content.words}}
                  </a>
                  <span v-else>
                    {{content.words}}
                  </span>
                </span>
                <div v-if="post.altUrl">
                  <router-link v-bind:to="post.altUrl">
                  {{post.altText}}
                </router-link>
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn icon class="light-blue--text">
                  <v-icon medium>fa-twitter</v-icon>
                </v-btn>
                <v-btn icon class="blue--text text--darken-4">
                  <v-icon medium>fa-facebook</v-icon>
                </v-btn>
              </v-card-actions>

              <youtube v-if="post.youtubeSrc"
                       :src="post.youtubeSrc">
              </youtube>

              <img v-if="post.imgSrc"
                   :src="post.imgSrc">

            </v-card>
          </div>
        </v-layout>
      </v-container>
    </v-content>

  </div>
</template>

<script>
  import Foliage from '../../resources/img/foliage.png'
  import MTBVAHeader from '../../components/MTBVAHeader.vue'
  import Youtube from '../../components/Youtube.vue'
  import posts from '../posts'

  export default {
    components: {
      MTBVAHeader,
      Youtube
    },
    data() {
      return {
        posts: posts.posts,
        showImg: false
      }
    },
    name: 'blog',
    computed: {
      image() {
        return Foliage
      }
    }
  }
</script>
