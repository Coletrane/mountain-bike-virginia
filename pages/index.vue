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

    <div class="main-content main-content-mobile">
      <transition-group name="new-page-fade"
                        appear>
        <div v-if="page >= 1"
             :key="1">

          <post-card :post="posts.battleAtBlackhorse2018"
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
              <image-link :post="posts.battleAtBlackhorse2018"/>
            </div>
          </post-card>

          <post-card :post="posts.battleAtBlackhorse2018Video"
                     no-author>
            <div slot="media">
              <youtube :src="posts.battleAtBlackhorse2018Video.ytSrc"/>
            </div>
          </post-card>

          <post-card :post="posts.ravenwoodRide"
                     no-author>
            <div slot="media">
              <youtube :src="posts.ravenwoodRide.ytSrc"/>
            </div>
          </post-card>

          <post-card :post="posts.tuesdayNightLightsVideoFeb2018"
                     no-author>
            <div slot="media">
              <youtube :src="posts.tuesdayNightLightsVideoFeb2018.ytSrc"/>
            </div>
          </post-card>

          <post-card :post="posts.rockstarVa2018"
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
                  <a :href="posts.rockstarVa2018.fbEvent">
                    Details
                    <font-awesome-icon :icon="faFacebook"
                                       class="inline-facebook-icon"/>
                  </a>
                </div>
              </div>
            </div>
            <div slot="media">
              <image-link :post="posts.rockstarVa2018"
                          :href="posts.rockstarVa2018.fbEvent"
                          :src="routes.s3Pages + routes.rockstarVa2018 + '/rockstar.jpg'"/>
            </div>
          </post-card>

          <post-card :post="posts.middleMtMomma2018"
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
                  <a :href="posts.middleMtMomma2018.fbEvent">
                    Details
                    <font-awesome-icon :icon="faFacebook"
                                       class="inline-facebook-icon"/>
                  </a>
                </div>
              </div>
            </div>
            <div slot="media"
                 style="margin-top: -2.8rem;">
              <a :href="posts.middleMtMomma2018.fbEvent">
                <img v-lazy="posts.middleMtMomma2018.extraImgs.logo"
                     class="image-smaller">
              </a>
              <a v-if="$store.state.loaded"
                 :href="posts.middleMtMomma2018.fbEvent"
                 style="text-align: center">
                <img :src="posts.middleMtMomma2018.extraImgs.start"
                     alt="Middle Mountain Momma Starting Line"
                     style="width: 100%"/>
              </a>
              <ride-with-gps :url="posts.middleMtMomma2018.rwGps"/>
            </div>
          </post-card>

          <post-card :post="posts.gravelocity2018"
                     no-author>
            <div slot="words">
              <div class="promo">
                Who wants to do a gravel ride? Okay how about a 54 mile one? Okay how about 20 degrees?
                Perfect. Let's ride. Once again Gravelocity had a great turnout with people coming from
                Fredricksburg, Virginia Beach, and even Cincinnati!
              </div>
            </div>
            <div slot="media">
              <image-link :post="posts.gravelocity2018"/>
            </div>
          </post-card>

          <post-card :post="posts.firstRide2018"
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
              <image-link :post="posts.firstRide2018"/>
            </div>
          </post-card>

        </div>

        <div v-if="page >= 2"
             :key="2">

          <post-card :post="posts.dodyRidgeRunFall2017"
                     no-author>
            <div slot="media">
              <youtube :src="posts.dodyRidgeRunFall2017.ytSrc"/>
            </div>
          </post-card>

          <post-card :post="posts.pivotSwitchbladeReview"
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
              <image-link :post="posts.pivotSwitchbladeReview"/>
            </div>
          </post-card>

          <post-card :post="posts.creature2017Recap"
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
              <youtube :src="posts.creature2017Recap.ytSrc"/>
            </div>
          </post-card>

          <post-card :post="posts.gravelocity2017Video"
                     no-author>
            <div slot="media">
              <youtube :src="posts.gravelocity2017Video.ytSrc"/>
            </div>
          </post-card>

          <post-card :post="posts.relaunch"
                     no-author>
            <div slot="media">
              <image-link :post="posts.relaunch"/>
            </div>
          </post-card>

          <post-card :post="posts.specMines29Oct17"
                     no-author>
            <div slot="media">
              <image-link :post="posts.specMines29Oct17"/>
            </div>
          </post-card>

          <post-card :post="posts.creature2016"
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
              <youtube :src="posts.creature2016.ytSrc"/>
            </div>
          </post-card>

        </div>
      </transition-group>

      <div v-if="page < maxPage"
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
  import {s3StaticImg, s3Pages, imgRoutes, baseUrl} from '../scripts/routes'
  import * as routes from '../scripts/routes'

  import MTBVAHeader from '../components/Header/MTBVAHeader'
  import PostCard from '../components/Card/PostCard'
  import Youtube from '../components/Iframes/Youtube'
  import ImageLink from '../components/Images/ImageLink'
  import RideWithGps from '../components/Iframes/RideWithGps'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

  const foliage = `${s3StaticImg}/${imgRoutes['/']}`

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
        maxPage: 2,
        mmmFb: 'https://www.facebook.com/events/371981453213164/',
        s3Pages: s3Pages,
        s3StaticImg: s3StaticImg
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

            ogImage.removeAttribute('content')
            ogImage.setAttribute('content', `${s3Pages}${routes.rockstarVa2018}/${imgRoutes[routes.rockstarVa2018]}`)

            ogUrl.removeAttribute('content')
            ogUrl.setAttribute('content', `${baseUrl}/${routes.rockstarVa2018}`)

          } else if (this.$route.name === routes.middleMtMomma2018) {

            ogImage.removeAttribute('content')
            ogImage.setAttribute('content', `${s3Pages}${routes.middleMtMomma2018}/${imgRoutes[routes.middleMtMomma2018]}`)

            ogUrl.removeAttribute('content')
            ogUrl.setAttribute('content', `${baseUrl}/${routes.middleMtMomma2018}`)

          }
        }
      }
    },
    computed: {
      page() {
        return this.$store.state.page
      }
    },
    methods: {
      loadMore() {
        const newPage = this.page + 1
        this.$store.commit('changePage', newPage)
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

