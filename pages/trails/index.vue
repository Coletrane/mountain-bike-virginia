<template>
  <div class="trails">
    <m-t-b-v-a-header
      :header-height="700"
      :image="image">
    </m-t-b-v-a-header>

    <div class="main-content main-content-mobile">
    </div>

  </div>
</template>

<script>
  import MTBVAHeader from '../../components/Header/MTBVAHeader'
  import InfoWindow from '../../components/Trails/InfoWindow'

  import {s3StaticImg} from '../../scripts/routes'
  import {nokeCoords, trailAreas} from '../../assets/trails'

  export default {
    name: 'trails',
    components: {
      InfoWindow,
      MTBVAHeader,
    },
    data() {
      return {
        image: `${s3StaticImg}foliage.jpg`,
        currentInfoWindow: ' ',
        trails: trailAreas
      }
    },

  }
</script>

<style scoped>
  #map {
    height: 700px;
  }
</style>