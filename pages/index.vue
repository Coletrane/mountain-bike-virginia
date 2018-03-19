<template>
  <div class="blog">

    <m-t-b-v-a-header
      :header-height="900"
      :image="img"
      title="Mountain Bike Virginia"
      subtitle="Exposing the trove of trails in The Old Dominion"
      button="Events"
      buttonLink="https://www.facebook.com/pg/xxcva/events/"
      home-page>
    </m-t-b-v-a-header>

    <div class="main-content"
         :style="backgroundImage">
      <transition-group name="new-page-fade"
                        appear>
        <div v-if="$store.state.posts.currentPage >= 1"
             :key="1">

          <post-card :post="getPost(routes.battleAtBlackhorse2018)"
                     no-author>
            <div slot="words">
              <div class="promo">
                23 miles, 3 stages, of absolute brutality from the Glenwood Horse trail, Hammin Hollow, and Dody Ridge
                trails. We'd like to give a Hell Yeah to all the shredders that finished this tough race.
                <nuxt-link :to="routes.resultsBattleAtBlackhorse2018">
                  Check out the results here.
                </nuxt-link>
              </div>
            </div>
            <div slot="media">
              <image-link :post="getPost(routes.battleAtBlackhorse2018)"/>
            </div>
          </post-card>

          <post-card :post="getPost(routes.battleAtBlackhorse2018Video)"
                     no-author>
            <div slot="media">
              <youtube :src="getPost(routes.battleAtBlackhorse2018Video).ytSrc"/>
            </div>
          </post-card>

          <post-card :post="getPost(routes.ravenwoodRide)"
                     no-author>
            <div slot="media">
              <youtube :src="getPost(routes.ravenwoodRide).ytSrc"/>
            </div>
          </post-card>

          <post-card :post="getPost(routes.tuesdayNightLightsVideoFeb2018)"
                     no-author>
            <div slot="media">
              <youtube :src="getPost(routes.tuesdayNightLightsVideoFeb2018).ytSrc"/>
            </div>
          </post-card>

          <post-card :post="getPost(routes.rockstarVa2018)"
                     no-author>
            <div slot="words">
              <div class="promo">
                Come one, come all, to the best gravel, trail, bikepacking, endurance, 270 miles on two wheels. Travel
                between two of the most legendary cycling towns in the country, Harrisonburg and Roanoke. Ride as a team
                or solo (SPOT tracker required) and try to complete the 270, a feat yet to be accomplished.<a
                href="http://roanokemountainadventures.com/"> Roanoke Mountain Adventures</a> will be providing shuttles
                to and from both Harrisonburg and Roanoke. <a href="http://roanokemountainadventures.com/">Rate$ for
                shuttles.</a>
                <div>
                  <a href="http://tinyurl.com/rockstargooglemap">Route options (TRAIL or GRAVEl)</a>
                </div>
                <div>
                  <a :href="getPost(routes.rockstarVa2018).fbEvent">
                    Details
                    <font-awesome-icon :icon="faFacebook"
                                       class="inline-facebook-icon"/>
                  </a>
                </div>
              </div>
            </div>
            <div slot="media">
              <image-link :post="getPost(routes.rockstarVa2018)"
                          :href="getPost(routes.rockstarVa2018).fbEvent"
                          :src="routes.s3Pages + '/' + routes.rockstarVa2018 + '/rockstar.jpg'"/>
            </div>
          </post-card>

          <post-card :post="getPost(routes.middleMtMomma2018)"
                     no-author>
            <div slot="header">
              <h4 class="subheading">
                A week before Mother's day, its
                <span style="font-weight: 800;">
                  MOMMA'S DAY.
                </span>
              </h4>
            </div>
            <div slot="words">
              <div class="promo">
                21st annual Middle Mountain Momma at the gorgeous <a
                href="http://www.dcr.virginia.gov/state-parks/douthat#general_information">Douthat
                State Park.</a> The
                first race in the XXC VA series! Classes: Youth: 7mi, Junior: 11mi, Classic: 21mi, XXC:
                44mi.
                <nuxt-link :to="routes.resultsMiddleMountainMomma2017">
                  View the results from last year.
                </nuxt-link>
                <div>
                  <a href="https://www.bikereg.com/county-of-bath-middle-mountain-momma">
                    Register on BikeReg.
                  </a>
                </div>
                <div>
                  <a :href="getPost(routes.middleMtMomma2018).fbEvent">
                    Details
                    <font-awesome-icon :icon="faFacebook"
                                       class="inline-facebook-icon"/>
                  </a>
                </div>
              </div>
            </div>
            <div slot="media"
                 style="margin-top: -2.8rem;">
              <a :href="getPost(routes.middleMtMomma2018).fbEvent">
                <img v-lazy="mmmImg + 'mmm.png'"
                     class="image-smaller">
              </a>
              <a v-if="$store.state.misc.loaded"
                 :href="getPost(routes.middleMtMomma2018.fbEvent)"
                 style="text-align: center">
                <img :src="mmmImg + 'mmm-start.gif'"
                     alt="Middle Mountain Momma Starting Line"
                     style="width: 100%"/>
              </a>
              <ride-with-gps :url="getPost(routes.middleMtMomma2018).rwGps"/>
            </div>
          </post-card>

          <post-card :post="getPost(routes.gravelocity2018)"
                     no-author>
            <div slot="words">
              <div class="promo">
                Who wants to do a gravel ride? Okay how about a 54 mile one? Okay how about 20 degrees?
                Perfect. Let's ride. Once again Gravelocity had a great turnout with people coming from
                Fredricksburg, Virginia Beach, and even Cincinnati!
              </div>
            </div>
            <div slot="media">
              <image-link :post="getPost(routes.gravelocity2018)"/>
            </div>
          </post-card>

          <post-card :post="getPost(routes.firstRide2018)"
                     no-author>
            <div slot="words">
              <div class="promo">
                For the 28th consecutive year the the first ride of the new year was a roaring
                (shivering) success.
                Thank you to everyone who turned out and cranked out some of the most frigid miles
                they'll have all
                year.
              </div>
            </div>
            <div slot="media">
              <image-link :post="getPost(routes.firstRide2018)"/>
            </div>
          </post-card>

        </div>

        <div v-if="$store.state.posts.currentPage >= 2"
             :key="2">

          <post-card :post="getPost(routes.dodyRidgeRunFall2017)"
                     no-author>
            <div slot="media">
              <youtube :src="getPost(routes.dodyRidgeRunFall2017).ytSrc"/>
            </div>
          </post-card>

          <post-card :post="getPost(routes.pivotSwitchbladeReview)"
                     no-author>
            <div slot="words">
              <div class="promo">
                With over a 5 grand pricetag, the Pivot Switchblade is easily a great deal. It's not
                enduro, it's
                not
                trail. Perhaps they should have called it the Swiss Army. No, that would never fly.
              </div>
            </div>
            <div slot="media">
              <image-link :post="getPost(routes.pivotSwitchbladeReview)"/>
            </div>
          </post-card>

          <post-card :post="getPost(routes.creature2017Recap)"
                     no-author>
            <div slot="words">
              <div class="promo">
                Once again Virginia's Blue Ridge Creature from Carvins Cove was a resounding success.
                Special thanks
                to Debbie Inman, Renee Powers, Chris Lee, and all the wonderful staff who helped make
                the Creature
                come alive.
              </div>
              <div class="promo">
                <nuxt-link :to="'results'">
                  View the results here.
                </nuxt-link>
              </div>
            </div>
            <div slot="media">
              <youtube :src="getPost(routes.creature2017Recap).ytSrc"/>
            </div>
          </post-card>

          <post-card :post="getPost(routes.gravelocity2017Video)"
                     no-author>
            <div slot="media">
              <youtube :src="getPost(routes.gravelocity2017Video).ytSrc"/>
            </div>
          </post-card>

          <post-card :post="getPost(routes.relaunch)"
                     no-author>
            <div slot="media">
              <image-link :post="getPost(routes.relaunch)"/>
            </div>
          </post-card>

          <post-card :post="getPost(routes.specMines29Oct17)"
                     no-author>
            <div slot="media">
              <image-link :post="getPost(routes.specMines29Oct17)"/>
            </div>
          </post-card>

          <post-card :post="getPost(routes.creature2016)"
                     no-author>
            <div slot="words">
              <div class="promo">
                The innagural year of Virginia's Blue Ridge Creature from Carvins Cove was a smashing
                success. We
                were
                even graced by the presence of the fantastic Mr. <a
                href="https://en.wikipedia.org/wiki/Jeremiah_Bishop">Jeremiah Bishop</a> who still
                managed to take
                first despite starting 3 minutes late.
              </div>
            </div>
            <div class="promo">
              <nuxt-link :to="'results'">
                View the results here.
              </nuxt-link>
            </div>
            <div slot="media">
              <youtube :src="getPost(routes.creature2016).ytSrc"/>
            </div>
          </post-card>

        </div>
      </transition-group>

      <div v-if="showLoadMore"
           class="load-more">
        <button class="btn btn-outline-primary white-btn"
                @click="loadMore()"
                id="load-more-btn">
          Keep Pedaling!
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import {home} from '../assets/head-tags'
  import {headTags} from '../assets/functions'
  import {posts} from '../assets/posts'
  import * as routes from '../scripts/routes'

  import MTBVAHeader from '../components/Header/MTBVAHeader'
  import PostCard from '../components/Card/PostCard'
  import Youtube from '../components/Iframes/Youtube'
  import ImageLink from '../components/Images/ImageLink'
  import RideWithGps from '../components/Iframes/RideWithGps'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

  const foliage = `${routes.s3StaticImg}/${routes.imgRoutes['/']}`

  export default {
    name: 'index',
    components: {
      RideWithGps,
      MTBVAHeader,
      PostCard,
      Youtube,
      ImageLink,
      FontAwesomeIcon
    },
    async asyncData(context) {
      return {
        posts: await context.store.dispatch(
          'loadPosts',
          context.store.state.posts.pages[0])
      }
    },
    head() {
      return headTags(
        home.title,
        home.description,
        home.keywords,
        // Dummy "post" to simulate the base url
        // empty string because headTags adds in a slash
        {
          route: ''
        }
      )
    },
    data() {
      return {
        img: foliage,
        faFacebook: faFacebook,
        attachPosts: false,
        posts: posts,
        routes: routes,
        mmmImg: `${routes.s3Pages}/${routes.middleMtMomma2018}/`
      }
    },
    created() {
      if (process.browser) {
        // Change the og:image location based on the route
        // This is only needed because the head() function above is not exposed to the Vue instance
        let ogImage = document.querySelector('meta[property=\'og:image\']')
        let ogUrl = document.querySelector('meta[property=\'og:url\']')

        if (ogImage && ogUrl) {
          if (this.$route.name === routes.rockstarVa2018) {

            // TODO: evaluate if this is still needed
            ogImage.removeAttribute('content')
            ogImage.setAttribute('content', `${routes.s3Pages}${routes.rockstarVa2018}/${imgRoutes[routes.rockstarVa2018]}`)

            ogUrl.removeAttribute('content')
            ogUrl.setAttribute('content', `${routes.baseUrl}/${routes.rockstarVa2018}`)

          } else if (this.$route.name === routes.middleMtMomma2018) {

            ogImage.removeAttribute('content')
            ogImage.setAttribute('content', `${routes.s3Pages}${routes.middleMtMomma2018}/${imgRoutes[routes.middleMtMomma2018]}`)

            ogUrl.removeAttribute('content')
            ogUrl.setAttribute('content', `${routes.baseUrl}/${routes.middleMtMomma2018}`)

          }
        }
      }
    },
    computed: {
      backgroundImage() {
        return {
          backgroundImage:`url("${routes.s3StaticImg}/asfalt-light.png")`
        }
      },
      showLoadMore() {
        return this.$store.state.posts.currentPage < this.$store.state.posts.totalPages
      }
    },
    methods: {
      async loadMore() {
        await this.$store.dispatch('incrementPage')
      },
      getPost(route) {
          return this.$store.getters.getPost(route)
      }
    }
  }
</script>
<style>

  .load-more {
    text-align: center;
  }

  .card-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .promo {
    font-size: 1rem;
  }

  .image-smaller {
    width: 60%;
    display: block;
    margin: auto;
  }

  @media (max-width: 720px) {
    .image-smaller {
      width: 100%;
    }
  }

  .new-page-fade-enter-to {
    transition: opacity 1s;
  }

  .new-page-fade-enter {
    opacity: 0;
  }

</style>

