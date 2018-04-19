<template>
  <div>
    <blog-post :image="img + 'green-pivot.jpg'"
               :post="post"
               :related-posts="relatedPosts">
      <div slot="content">
        <div class="blog-promo">
          <div class="promo">
            21st annual Middle Mountain Momma at the gorgeous <a
            href="http://www.dcr.virginia.gov/state-parks/douthat#general_information">Douthat
            State Park.</a> The
            first race in the XXC Marathon Series!
            <div class="race-classes">
              <h5>Classes:</h5>
              Youth: 7mi,<br>
              Junior: 11mi,<br>
              Classic: 21mi,<br>
              XXC: 44mi<br>
            </div>
            <div>
              <nuxt-link :to="{name: 'results-middle-mountain-momma-2017'}">
                View the results from last year.
              </nuxt-link>
              <div>
                <a href="https://www.bikereg.com/county-of-bath-middle-mountain-momma">
                  Register on BikeReg.
                </a>
              </div>
              <div>
                <a :href="post.fbEvent">
                  Facebook Event
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-top: -2rem;">
          <a :href="post.fbEvent">
            <img v-lazy="img + 'mmm.png'"
                 class="image-smaller">
          </a>
          <m-t-b-v-a-video :src="img + 'mmm-start.mp4'"
                           autoplay
                           muted
                           loop/>
          <ride-with-gps :url="post.rwGps"/>
        </div>
      </div>
    </blog-post>
  </div>
</template>
<script>
  import BlogImage from '../components/Images/BlogImage'
  import RideWithGps from '../components/Iframes/RideWithGps'
  import MTBVAVideo from '../components/Iframes/MTBVAVideo'
  import BlogPost from '../components/BlogPost'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

  import blogPost from '../assets/mixins/blog-post'

  export default {
    name: 'middle-mt-momma-2018',
    components: {
      BlogPost,
      RideWithGps,
      MTBVAVideo,
      BlogImage,
      FontAwesomeIcon
    },
    mixins: [
      blogPost
    ],
    data() {
      return {
        faFacebook: faFacebook
      }
    }
  }
</script>
<style>
  @media (max-width: 700px) {
    .author-container {
      padding-top: 2.5rem !important;
      padding-bottom: 0.5rem !important;
    }
  }

  @media (max-width: 500px) {
    .author-container {
      padding-top: 2.5rem !important;
      padding-bottom: 2.5rem !important;
    }
  }

  @media (max-width: 400px) {
    .author-container {
      padding-top: 3.5rem !important;
      padding-bottom: 3.5rem !important;
    }
  }
</style>

