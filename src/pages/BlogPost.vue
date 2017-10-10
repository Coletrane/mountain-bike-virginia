<template>
  <div id="blog-post">
    <m-t-b-v-a-header
      v-bind:header-height="headerHeight"
      v-bind:image="image"
      v-bind:title="post.title">
    </m-t-b-v-a-header>

    <v-content>
      <v-container>
        <v-layout row wrap align-center>
          <v-card>
            <div class="blog-p subheading">
              <span>{{post.subtitle}}</span>

              <social-actions :post="post">
              </social-actions>
            </div>

            <div v-for="section in content">

              <img v-if="section.img"
                   :src="section.img"
                   class="blog-img">

              <paragraph-with-links
                v-if="section.p"
                v-bind:paragraph="section.p"
                class="blog-p">
              </paragraph-with-links>

              <youtube v-if="section.youtubeSrc"
                       :src="section.youtubeSrc">
              </youtube>

              <ride-with-gps v-if="section.rwgps"
                             :src="section.rwgpsSrc">
              </ride-with-gps>
            </div>
          </v-card>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
  import MTBVAHeader from '../components/MTBVAHeader.vue'
  import Youtube from '../components/Youtube.vue'
  import RideWithGps from '../components/RideWithGps.vue'
  import SocialActions from '../components/SocialActions.vue'
  import ParagraphWithLinks from '../components/ParagraphWithLinks.vue'

  export default {
    name: 'blog-post',
    components: {
      MTBVAHeader,
      Youtube,
      RideWithGps,
      SocialActions,
      ParagraphWithLinks
    },
    props: [
      'headerHeight',
      'image',
      'post',
      'content'
    ]
  }
</script>

<style>
  .blog-img {
    width: 100% !important;
  }

  .blog-p {
    padding: 1rem;
  }

</style>
