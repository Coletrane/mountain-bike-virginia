<template>
  <div>
    <m-t-b-v-a-header :image="headerImage"
                      title="XXC-VA Marathon MTB Series 2018"/>
    <banner/>
    <div class="main-content"
         :style="{
            backgroundImage: backgroundImage.backgroundImage,
            paddingTop: '2rem'
         }">
      <timeline :items="races"/>
    </div>
  </div>
</template>
<script>
import MTBVAHeader from "../../components/Header/MTBVAHeader"
import Banner from "../../components/Das/Banner"
import Timeline from "../../components/Card/Timeline"

import backgroundImage from "../../mixins/background-image"

import { headTags } from "../../scripts/client/functions"
import { s3Pages, s3PagesEvents } from "../../routes"

const headerImage = `${s3Pages}/creature-2017-recap/wake-champ.jpg`

export default {
  name: "xxcva-race-series-2018",
  components: {
    MTBVAHeader,
    Banner,
    Timeline
  },
  mixins: [backgroundImage],
  head() {
    return headTags(
      "XXC-VA Marathon MTB Race Series",
      "Dos Equis C, XXC Marathon MTB Races in and around Virginia. Just 40 more miles.",
      "marathon mtb, mtb, marathon, xc, xxc, cross country, trail, bike, race, mountain bike, bike race, virginia, douthat, creature from carvins cove, carvins cove, hoo ha, massanutten",
      {
        ogImage: `${s3Pages}/creature-2017-recap/wake-champ.jpg`,
        route: this.$route.path.substring(1)
      }
    )
  },
  data() {
    return {
      headerImage: headerImage,
      races: [
        {
          title: "Counties of Bath and Alleghany Middle Mountain Momma",
          description:
            "First Race in the XXC-VA Marathon MTB Series! This race has 4 courses, from beginner all the way to the 40 mile XXC in the beautiful Douthat State Park. The trails at Douthat are pure cross country magic, with many sections wide enough to pass, making them perfect for racing.",
          date: "MAY 6",
          location: {
            text: "Douthat State Park, Millboro, VA",
            map: "https://goo.gl/maps/jqyX7GY5Ngy"
          },
          results: "results-middle-mountain-momma-2018",
          blogPost: "middle-mt-momma-2018",
          img: `${s3Pages}/middle-mt-momma-2018/mmm.png`
        },
        {
          title: "Massanutten Hoo-Ha!",
          description:
            "The Hoo-Ha! has 4 courses and an enduro on Saturday, June 2nd. The original Hoo-Ha in 1989 raced along fresh cut single track, a gravel road, and old logging roads. 30 years later the course is on some of finest hand & machine built single track around.",
          date: "JUN 3",
          location: {
            text: "Massanutten Resort Western Slope, Keezletown, VA",
            map: "https://goo.gl/maps/8r6gvvFwrkt"
          },
          fbEvent: "https://www.facebook.com/events/432850813812960/",
          blogPost: "events-massanutten-hoo-ha-2018",
          register: "https://www.bikereg.com/massanutten-hoo-ha",
          img: `${s3PagesEvents}/massanutten-hoo-ha-2018/hoo-ha-flyer.jpg`
        },
        {
          title: "Virginia's Blue Ridge Creature from Carvins Cove",
          description:
            "A 44 mile epic loop of Carvins Cove in Roaonke Virginia. This race also has a 15 mile XC that stays at the base of Brushy Mountain. The trails are a mixed bag of XC, gravity, and gnar. The race culminates with the infamous Rattlin' run. Post party at Woods Heating and Air on Lee Hwy",
          date: "OCT 7",
          location: {
            text: "Carvins Cove Boat Dock, Roanoke, VA",
            map: "https://goo.gl/maps/qdK7VpJ7UrQ2"
          },
          fbEvent: "https://www.facebook.com/events/197357151055521/",
          img: `${s3PagesEvents}/creature-from-carvins-cove-2018/creature-2018-flyer.jpg`
        }
        // {
        //   title: 'Revenge of the Rattlesnake',
        //   description: '',
        //   date: 'SEP 12',
        //   location: {
        //
        //   }
        // }
      ]
    }
  }
}
</script>
<style scoped>
</style>
