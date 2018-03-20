<template>
  <div>
    <post-card :post="$store.getters.getPost(routes.battleAtBlackhorse2018)"
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
        <image-link :post="$store.getters.getPost(routes.battleAtBlackhorse2018)"/>
      </div>
    </post-card>

    <post-card :post="$store.getters.getPost(routes.battleAtBlackhorse2018Video)"
               no-author>
      <div slot="media">
        <youtube :src="$store.getters.getPost(routes.battleAtBlackhorse2018Video).ytSrc"/>
      </div>
    </post-card>

    <post-card :post="$store.getters.getPost(routes.ravenwoodRide)"
               no-author>
      <div slot="media">
        <youtube :src="$store.getters.getPost(routes.ravenwoodRide).ytSrc"/>
      </div>
    </post-card>

    <post-card :post="$store.getters.getPost(routes.tuesdayNightLightsVideoFeb2018)"
               no-author>
      <div slot="media">
        <youtube :src="$store.getters.getPost(routes.tuesdayNightLightsVideoFeb2018).ytSrc"/>
      </div>
    </post-card>

    <post-card :post="$store.getters.getPost(routes.rockstarVa2018)"
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
            <a :href="$store.getters.getPost(routes.rockstarVa2018).fbEvent">
              Details
              <font-awesome-icon :icon="faFacebook"
                                 class="inline-facebook-icon"/>
            </a>
          </div>
        </div>
      </div>
      <div slot="media">
        <image-link :post="$store.getters.getPost(routes.rockstarVa2018)"
                    :href="$store.getters.getPost(routes.rockstarVa2018).fbEvent"
                    :src="routes.s3Pages + '/' + routes.rockstarVa2018 + '/rockstar.jpg'"/>
      </div>
    </post-card>

    <post-card :post="$store.getters.getPost(routes.middleMtMomma2018)"
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
            <a :href="$store.getters.getPost(routes.middleMtMomma2018).fbEvent">
              Details
              <font-awesome-icon :icon="faFacebook"
                                 class="inline-facebook-icon"/>
            </a>
          </div>
        </div>
      </div>
      <div slot="media"
           style="margin-top: -2.8rem;">
        <a :href="$store.getters.getPost(routes.middleMtMomma2018).fbEvent">
          <img v-lazy="mmmImg + 'mmm.png'"
               class="image-smaller">
        </a>
        <a v-if="$store.state.misc.loaded"
           :href="$store.getters.getPost(routes.middleMtMomma2018.fbEvent)"
           style="text-align: center">
          <img :src="mmmImg + 'mmm-start.gif'"
               alt="Middle Mountain Momma Starting Line"
               style="width: 100%"/>
        </a>
        <ride-with-gps :url="$store.getters.getPost(routes.middleMtMomma2018).rwGps"/>
      </div>
    </post-card>

    <post-card :post="$store.getters.getPost(routes.gravelocity2018)"
               no-author>
      <div slot="words">
        <div class="promo">
          Who wants to do a gravel ride? Okay how about a 54 mile one? Okay how about 20 degrees?
          Perfect. Let's ride. Once again Gravelocity had a great turnout with people coming from
          Fredricksburg, Virginia Beach, and even Cincinnati!
        </div>
      </div>
      <div slot="media">
        <image-link :post="$store.getters.getPost(routes.gravelocity2018)"/>
      </div>
    </post-card>

    <post-card :post="$store.getters.getPost(routes.firstRide2018)"
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
        <image-link :post="$store.getters.getPost(routes.firstRide2018)"/>
      </div>
    </post-card>
  </div>
</template>

<script>
  import PostCard from '../Card/PostCard'
  import ImageLink from '../Images/ImageLink'
  import Youtube from '../Iframes/Youtube'
  import RideWithGps from '../Iframes/RideWithGps'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

  import * as routes from '../../scripts/routes'

  export default {
    name: 'page-1',
    components: {
      PostCard,
      ImageLink,
      Youtube,
      RideWithGps,
      FontAwesomeIcon
    },
    data() {
      return {
        faFacebook: faFacebook,
        routes: routes,
        mmmImg: `${routes.s3Pages}/${routes.middleMtMomma2018}/`
      }
    }
  }
</script>