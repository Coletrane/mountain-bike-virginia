<template>
  <div class="trails">
    <m-t-b-v-a-header
      :header-height="700"
      :image="image">
    </m-t-b-v-a-header>

    <div class="main-content"
         :style="{backgroundImage: backgroundImage}">
      <google-map :map="nokeMap"
                  :markers="trailAreaMarkers"/>
    </div>

  </div>
</template>

<script>
  import MTBVAHeader from '../../components/Header/MTBVAHeader'
  import InfoWindow from '../../components/Trails/InfoWindow'
  import GoogleMap from '../../components/Trails/GoogleMap'

  import {s3StaticImg} from '../../scripts/routes'
  import {nokeMap, trailAreas} from '../../assets/trails'

  export default {
    name: 'trails',
    components: {
      InfoWindow,
      MTBVAHeader,
      GoogleMap
    },
    data() {
      return {
        image: `${s3StaticImg}/foliage.jpg`,
        backgroundImage: `url("${s3StaticImg}/asfalt-light.png")`,
        currentInfoWindow: ' ',
        nokeMap: nokeMap,
        trailAreas: trailAreas
      }
    },
    computed: {
      trailAreaMarkers() {
        let markers = []

        this.trailAreas.forEach(area => {
          markers.push(area.mapMarker)
        })

        return markers
      }
    }
  }
</script>

<style scoped>

</style>