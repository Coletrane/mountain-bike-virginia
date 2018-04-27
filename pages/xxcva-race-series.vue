<template>
  <div>
    <m-t-b-v-a-header :image="headerImage"
                      title="XXCVA Marathon MTB Series"
                      button="Events"
                      buttonLink="https://www.facebook.com/pg/bikevirginia/events/"/>
    <banner/>
    <div class="main-content"
         :style="backgroundImage">
    </div>
  </div>
</template>
<script>
  import MTBVAHeader from '../components/Header/MTBVAHeader'
  import Banner from '../components/Das/Banner'

  import backgroundImage from '../assets/mixins/background-image'

  import {headTags} from '../assets/functions'
  import {s3Pages} from '../scripts/routes'

  export default {
    name: 'xxcva-race-series',
    components: {
      Banner,
      MTBVAHeader
    },
    mixins: [
      backgroundImage
    ],
    head() {
      return headTags(
        'XXCVA Marathon MTB Race Series',
        'Series of Marathon MTB, 40+ mile races in Virginia since 2001',
        'marathon mtb, mtb, marathon, xc, xxc, cross country, trail, bike, race, mountain bike, bike race, virginia, douthat, creature from carvins cove, carvins cove, hoo ha, massanutten',
        {
          route: this.$route.path
        }
      )
    },
    data() {
      return {
        headerImage: `${s3Pages}/creature-2017-recap/wake-champ.jpg`
      }
    }
  }
</script>
<style scoped>
</style>