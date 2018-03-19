<template>
  <div>
    <blog-post :header-height="600"
               :image="img + 'dam.jpg'"
               :post="post"
               :related-posts="relatedPosts">

      <div slot="content">
        <div class="blog-promo">
          <h4 class="subheading">
            A week before Mother's day, its
            <span style="font-weight: 800;">
              MOMMA'S DAY.
            </span>
          </h4>
          <div class="promo">
            21st annual Middle Mountain Momma at the gorgeous <a
            href="http://www.dcr.virginia.gov/state-parks/douthat#general_information">Douthat
            State Park.</a> The
            first race in the XXC VA series! Classes: Youth: 7mi, Junior: 11mi, Classic: 21mi, XXC:
            44mi.
            <nuxt-link to="/results/middle-mountain-momma-2017">
              View the results from last year.
            </nuxt-link>
            <div>
              <a href="https://www.bikereg.com/county-of-bath-middle-mountain-momma">
                Register on BikeReg.
              </a>
            </div>
            <div>
              <a :href="post.fbEvent">
                <font-awesome-icon :icon="faFacebook"
                                   class="inline-facebook-icon"/>
              </a>
            </div>
          </div>
        </div>
        <div style="margin-top: -2.8rem;">
          <a :href="post.fbEvent">
            <img v-lazy="img + 'mmm.png'"
                 class="image-smaller">
          </a>
          <a v-if="$store.state.loaded"
             :href="post.fbEvent"
             style="text-align: center">
            <img :src="post.extraImgs.start"
                 alt="Middle Mountain Momma Starting Line"
                 style="width: 100%"/>
          </a>
          <ride-with-gps :url="post.rwGps"/>
        </div>
      </div>
    </blog-post>
  </div>
</template>

<script>
  import BlogImage from '../components/Images/BlogImage'
  import RideWithGps from '../components/Iframes/RideWithGps'
  import BlogPost from '../components/BlogPost'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

  import {
    s3Pages,
    middleMtMomma2018,
    creature2017Recap,
    rockstarVa2018
  } from '../scripts/routes'
  import {headTags} from '../assets/functions'
  import {home} from '../assets/head-tags'

  export default {
    name: 'middle-mt-momma-2018',
    components: {
      BlogPost,
      RideWithGps,
      BlogImage,
      FontAwesomeIcon
    },
    async asyncData(context) {
      return {
        post: await context.store.dispatch('loadPosts',[
          middleMtMomma2018
        ]),
        relatedPosts: await context.store.dispatch('loadPosts',[
          creature2017Recap,
          rockstarVa2018
        ])
      }
    },
    head() {
      if (this.post) {
        return headTags(
          this.post.title,
          this.post.subtitle,
          'race, douthat state park, douthat, lexington, xxc, enduro, bike race, mountain bike race' + home.keywords,
          this.post
        )
      }
    },
    data() {
      return {
        img: `${s3Pages}/${middleMtMomma2018}/`,
        faFacebook: faFacebook
      }
    }
  }
</script>

<style scoped>
  .image-smaller {
    width: 60%;
    display: block;
    margin-left: 20%;
  }
</style>
