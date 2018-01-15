<template>
  <div class="blog">
    <m-t-b-v-a-header
      :header-height="800"
      :image="img"
      title="Mountain Bike Virginia"
      subtitle="Exposing the trove of trails in The Old Dominion"
      button="Events"
      buttonLink="https://www.facebook.com/pg/xxcva/events/">
    </m-t-b-v-a-header>
    <v-content id="main-content">
      <v-container>
        <transition-group name="fade">
          <div v-show="page === 1"
               :key="1">
            <post-card :post="posts.firstRide2018">
              <div slot="top">
                <post-header :post="posts.firstRide2018"></post-header>
                <div class="promo">
                  For the 28th consecutive year the the first ride of the new year was a roaring (shivering) success.
                  Thank you to everyone who turned out and cranked out some of the most frigid miles they'll have all
                  year.
                </div>
              </div>
              <div slot="middle">
                <image-link :post="posts.firstRide2018"></image-link>
              </div>
            </post-card>
            <post-card :post="posts.dodyRidgeRunFall2017">
              <div slot="top">
                <post-header :post="posts.dodyRidgeRunFall2017"></post-header>
              </div>
              <div slot="middle">
                <youtube :src="posts.dodyRidgeRunFall2017.ytSrc"></youtube>
              </div>
            </post-card>
            <post-card
              :post="posts.pivotSwitchbladeReview">
              <div slot="top">
                <post-header :post="posts.pivotSwitchbladeReview"></post-header>
                <div class="promo">
                  With over a 5 grand pricetag, the Pivot Switchblade is easily a great deal. It's not enduro, it's not
                  trail. Perhaps they should have called it the Swiss Army. No, that would never fly.
                </div>
              </div>
              <div slot="middle">
                <image-link :post="posts.pivotSwitchbladeReview"></image-link>
              </div>
            </post-card>
            <post-card :post="posts.creature2017Recap">
              <div slot="top">
                <post-header :post="posts.creature2017Recap"></post-header>
                <div class="promo">
                  Once again Virginia's Blue Ridge Creature from Carvins Cove was a resounding success. Special thanks
                  to Debbie Inman, Renee Powers, Chris Lee, and all the wonderful staff who helped make the Creature
                  come alive.
                </div>
                <div class="promo">
                  <nuxt-link :to="'results'">
                    View the results here.
                  </nuxt-link>
                </div>
              </div>
              <div slot="middle">
                <youtube :src="posts.creature2017Recap.ytSrc"></youtube>
              </div>
            </post-card>
            <post-card :post="posts.relaunch">
              <div slot="top">
                <post-header :post="posts.relaunch"></post-header>
              </div>
              <div slot="middle">
                <image-link :post="posts.relaunch"></image-link>
              </div>
            </post-card>
          </div>
          <div v-if="page === 2"
               :key="2">
            <post-card :post="posts.specMines29Oct17">
              <div slot="top">
                <post-header :post="posts.specMines29Oct17"></post-header>
              </div>
              <div slot="middle">
                <image-link :post="posts.specMines29Oct17"></image-link>
              </div>
            </post-card>
            <post-card :post="posts.creature2016">
              <div slot="top">
                <post-header :post="posts.creature2016"></post-header>
                <div class="promo">
                  The innagural year of Virginia's Blue Ridge Creature from Carvins Cove was a smashing success. We were
                  even graced by the presence of the fantastic Mr. <a
                  href="https://en.wikipedia.org/wiki/Jeremiah_Bishop">Jeremiah Bishop</a> who still managed to take
                  first despite starting 3 minutes late.
                </div>
                <div class="promo">
                  <nuxt-link :to="'results'">
                    View the results here.
                  </nuxt-link>
                </div>
              </div>
              <div slot="middle">
                <youtube :src="posts.creature2016.ytSrc"></youtube>
              </div>
            </post-card>
          </div>
        </transition-group>
        <div class="mtbva-pagination">
          <v-pagination :length="2"
                        v-model="page"
                        circle>
          </v-pagination>
        </div>
      </v-container>
    </v-content>
  </div>
</template>
<script>
  import MTBVAHeader from "../components/MTBVAHeader.vue"
  import PostHeader from "../components/PostHeader.vue"
  import PostCard from "../components/PostCard.vue"
  import Youtube from "../components/Youtube.vue"
  import ImageLink from "../components/ImageLink.vue"

  import {posts} from "../assets/posts"
  import * as routes from "../routes"
  import {headTags} from "../assets/functions"

  const foliage = routes.s3 + routes.s3StaticImg + routes.imgRoutes["/"]

  export default {
    name: "blog",
    components: {
      MTBVAHeader,
      PostHeader,
      PostCard,
      Youtube,
      ImageLink
    },
    head() {
      return headTags(
        "Mountain Bike Virginia",
        "Rides, Races, and Reviews. XXC VA race series. Just 40 more miles.",
        "mountain, bike, cyclocross, gravel, ride, race, review, blog, results, cycling, road, virginia, trails",
        {
          imgSrc: foliage
        }
      )
    },
    data() {
      return {
        img: foliage,
        posts: posts,
        page: 1
      }
    },
    watch: {
      page() {
        if (process.browser) {
          this.$scrollTo(
            document.getElementById("main-content"),
            1000,
            {}
          )
        }
      }
    }
  }
</script>
<style>
  @media screen and (min-width: 600px) {
    .container {
      max-width: 1200px !important;;
      padding-left: 5%;
      padding-right: 5%;
    }
  }

  .post-card {
    width: 100%
  }

  .post {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 0 !important;
  }

  .mtbva-pagination {
    text-align: center;
  }

  .application--light .pagination__item--active {
    background: rgb(7, 53, 82) !important;
  }
</style>
