<template>
  <div>
    <trail-area :trail-area="trailArea">
      <div slot="parking">
        <google-map :map="trailArea.parking.map"
                    :markers="trailArea.parking.mapMarkers"/>
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

  import {trailAreas} from '../../assets/trails'

  export default {
    name: 'mill-mountain',
    components: {
      TrailArea,
      GoogleMap
    },
    computed: {
      trailArea() {
        const routeArr = this.$router.currentRoute.path.split('/')
        const trailName = routeArr[routeArr.length - 1].split('-').join(' ')
        const trailArea = trailAreas.find(area => {
          return area.mapMarker.title.toLowerCase() === trailName
        })
        return trailArea
      }
    }
  }
</script>

<style scoped>

</style>