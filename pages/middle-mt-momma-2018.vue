<template>
  <div>
    <blog-post :header-height="600"
               :image="img + 'dam.jpg'"
               :post="post"
               inline-author>

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
              <facebook-link :href="post.fbEvent"/>
            </div>
          </div>
        </div>
        <div style="margin-top: -2.8rem;">
          <a :href="post.fbEvent">
            <img v-lazy="post.extraImgs.logo"
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
  import {posts} from '../assets/posts'
  import {headTags} from '../assets/functions'
  import {home} from '../assets/head-tags'
  import {s3Pages, middleMtMomma2018} from '../scripts/routes'

  import BlogImage from '../components/Images/BlogImage'
  import FacebookLink from '../components/Images/FacebookLink'
  import RideWithGps from '../components/Iframes/RideWithGps'
  import BlogPost from '../components/BlogPost'

  const post = posts.middleMtMomma2018

  export default {
    name: 'middle-mt-momma-2018',
    components: {
      BlogPost,
      RideWithGps,
      FacebookLink,
      BlogImage
    },
    data() {
      return {
        img: `${s3Pages}${middleMtMomma2018}/`,
        post: post
      }
    },
    head() {
      return headTags(
        home.title,
        home.description,
        home.keywords,
        post
      )
    }
  }
</script>

<style scoped>
  .image-smaller {
    width: 60%;
    display: block;
    margin: auto;
  }
</style>
