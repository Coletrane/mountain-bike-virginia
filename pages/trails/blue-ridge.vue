<template>
  <div>
    <trail-area :trail-area="blueRidge">
      <div slot="parking">
        <google-map :map="blueRidge.parking.map"
                    :markers="blueRidge.parking.mapMarkers"/>
      </div>
    </trail-area>
  </div>
</template>

<script>
  import TrailArea from '../../components/Trails/TrailArea'
  import GoogleMap from '../../components/Trails/GoogleMap'

  import {findTrailArea} from '../../assets/trails'

  export default {
    name: 'blue-ridge',
    components: {
      TrailArea,
      GoogleMap
    },
    data() {
      return {
        blueRidge: findTrailArea(this.$router.currentRoute.path)
      }
    },
    mounted() {
    }
  }
</script>
