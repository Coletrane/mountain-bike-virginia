<template>
  <div>
    <trail-area :trail-area="millMountain">
      <div slot="parking">
        <google-map :map="millMountain.parking.map"
                    :markers="millMountain.parking.mapMarkers"/>
      </div>
      <div slot="trails">

      </div>
      <div slot="beer">

      </div>
    </trail-area>
  </div>
</template>

<script>
  import TrailArea from '../../components/Trails/TrailArea'
  import GoogleMap from '../../components/Trails/GoogleMap'

  import {findTrailArea} from '../../assets/trails'

  export default {
    name: 'mill-mountain',
    components: {
      TrailArea,
      GoogleMap
    },
    data() {
      return {
        millMountain: findTrailArea(this.$router.currentRoute.path)
      }
    }
  }
</script>

<style scoped>

</style>