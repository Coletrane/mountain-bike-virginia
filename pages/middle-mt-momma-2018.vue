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
            first race in the XXC-VA Series! This race is for all ages and skill levels. <a :href="post.fbEvent">Contact
            us on Facebook </a>with any questions. Food provided by <a href="https://www.facebook.com/Longfin.Grill/">Longfin
            Grill</a>, the best fish and chips in town! We love putting on this race and need to see YOU out on some of
            the best trails Virginia has to offer.
            <h5>Classes:</h5>
            <strong> Youth: </strong> 7mi |  <strong> Beginner: </strong> 11mi | <strong> XC: </strong> 21mi | <strong> XXC: </strong> 44mi
          </div>
          <div>
            See maps below.
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
          </div>
        </div>
        <div>
          <a :href="post.fbEvent">
            <img v-lazy="img + 'mmm.png'"
                 class="image-smaller">
          </a>
          <m-t-b-v-a-video :src="img + 'mmm-start.mp4'"
                           autoplay
                           muted
                           loop/>
          <ride-with-gps-switcher :gps-routes="[
            {
              name: 'youth',
              url: 'https://rwgps-embeds.com/embeds?type=route&id=27285133&sampleGraph=true'
            },
            {
              name: 'beginner',
              url: 'https://rwgps-embeds.com/embeds?type=route&id=27285230&sampleGraph=true'
            },
            {
              name: 'xc',
              url: 'https://rwgps-embeds.com/embeds?type=route&id=4047388&sampleGraph=true'
            },
            {
              name: 'xxc',
              url: 'https://rwgps-embeds.com/embeds?type=route&id=26778887&sampleGraph=true'
            }
          ]"/>
        </div>
      </div>
    </blog-post>
  </div>
</template>
<script>
  import BlogImage from '../components/Images/BlogImage'
  import RideWithGpsSwitcher from '../components/Iframes/RideWithGpsSwitcher'
  import MTBVAVideo from '../components/Iframes/MTBVAVideo'
  import BlogPost from '../components/BlogPost'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

  import blogPost from '../assets/mixins/blog-post'

  export default {
    name: 'middle-mt-momma-2018',
    components: {
      RideWithGpsSwitcher,
      BlogPost,
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
  .race-classes {
    text-align: center;
  }
</style>

