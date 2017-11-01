<template>
    <div id="blog-post">
        <m-t-b-v-a-header
                :header-height="headerHeight"
                :image="image"
                :title="post.title">
        </m-t-b-v-a-header>

        <v-content>
            <v-container>
                <v-layout row wrap align-center>
                    <v-card>

                        <div class="blog-p subheading">
                            <h6>{{post.subtitle}}</h6>
                            <author :author="post.author"></author>

                            <div v-for="section in content">

                                <img v-if="section.img"
                                     :src="section.img"
                                     class="blog-img">

                                <paragraph-with-links
                                        v-if="section.p"
                                        :paragraph="section.p"
                                        class="blog-p">
                                </paragraph-with-links>

                                <youtube v-if="section.youtubeSrc"
                                         :src="section.youtubeSrc">
                                </youtube>

                                <ride-with-gps v-if="section.rwgps"
                                               :src="section.rwgpsSrc">
                                </ride-with-gps>

                            </div>

                            <div>
                                <social-actions :post="post"></social-actions>
                            </div>
                        </div>

                    </v-card>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>

<script>
  import MTBVAHeader from '../components/MTBVAHeader.vue';
  import Youtube from '../components/Youtube.vue';
  import RideWithGps from '../components/RideWithGps.vue';
  import SocialActions from '../components/SocialActions.vue';
  import ParagraphWithLinks from '../components/ParagraphWithLinks.vue';
  import Author from '../components/Author.vue';

  export default {
    name: 'blog-post',
    components: {
      MTBVAHeader,
      Youtube,
      RideWithGps,
      SocialActions,
      ParagraphWithLinks,
      Author
    },
    props: [
      'headerHeight',
      'image',
      'post',
      'content'
    ]
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
