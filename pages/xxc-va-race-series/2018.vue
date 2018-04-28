<template>
  <div>
    <m-t-b-v-a-header :image="headerImage"
                      title="XXC-VA Marathon MTB Series 2018"/>
    <banner/>
    <div class="main-content"
         :style="backgroundImage">
      <timeline :items="races"/>
    </div>
  </div>
</template>
<script>
  import MTBVAHeader from '../../components/Header/MTBVAHeader'
  import Banner from '../../components/Das/Banner'
  import Timeline from '../../components/Card/Timeline'

  import backgroundImage from '../../assets/mixins/background-image'

  import {headTags} from '../../assets/functions'
  import {s3Pages, s3PagesEvents} from '../../scripts/routes'

  export default {
    name: 'xxcva-race-series-2018',
    components: {
      MTBVAHeader,
      Banner,
      Timeline
    },
    mixins: [
      backgroundImage
    ],
    head() {
      return headTags(
        'XXC-VA Marathon MTB Race Series',
        'Series of Marathon MTB, 40+ mile races in Virginia since 2001',
        'marathon mtb, mtb, marathon, xc, xxc, cross country, trail, bike, race, mountain bike, bike race, virginia, douthat, creature from carvins cove, carvins cove, hoo ha, massanutten',
        {
          route: this.$route.path
        }
      )
    },
    data() {
      return {
        headerImage: `${s3Pages}/creature-2017-recap/wake-champ.jpg`,
        races: [
          {
            title: 'Counties of Bath and Alleghany Middle Mountain Momma',
            description: 'First Race in the XXC-VA Marathon MTB Series!',
            date: 'MAY 6',
            location: {
              text: 'Douthat State Park, Millboro, VA',
              map: 'https://goo.gl/maps/jqyX7GY5Ngy'
            },
            fbEvent: 'https://www.facebook.com/events/371981453213164/',
            img: `${s3Pages}/middle-mt-momma-2018/mmm.png`
          },
          {
            title: 'Massanutten Hoo-Ha!',
            description: 'blah blah blah',
            date: 'JUN 3',
            location: 'Massanutten',
            fbEvent: 'https://www.facebook.com/events/204985483439005/',
            img: ''
          },
          {
            title: 'Virginia\'s Blue Ridge Creature from Carvins Cove',
            description: 'A 44 mile epic loop of all of Carvins Cove in Roaonke Virginia',
            date: 'OCT 7',
            location: 'Carvins Cove, Roanoke, VA',
            img: `${s3PagesEvents}/creature-from-carvins-cove-2018/creature.jpg`
          }
        ]
      }
    }
  }
</script>
<style scoped>
</style>