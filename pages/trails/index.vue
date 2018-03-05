<template>
  <div class="trails">
    <m-t-b-v-a-header
      :header-height="700"
      :image="image">
    </m-t-b-v-a-header>

    <div class="main-content main-content-mobile">
      <div id="map"></div>
      <bottom-nav/>
    </div>
  </div>
</template>

<script>
  import MTBVAHeader from '../../components/Header/MTBVAHeader'
  import BottomNav from '../../components/Trails/BottomNav'

  import {s3StaticImg} from '../../scripts/routes'

  export default {
    components: {
      MTBVAHeader,
      BottomNav
    },
    name: 'trails',
    data() {
      return {
        image: `${s3StaticImg}foliage.jpg`
      }
    },
    created() {
      if (process.browser) {

        window.initMap = function () {
          const nokeCoords = {
            lat: 37.2710,
            lng: -79.9414
          }

          const map = new google.maps.Map(document.getElementById('map'), {
            center: nokeCoords,
            zoom: 8
          })
        }

        let scripts = document.getElementsByTagName('script')
        if (scripts) {
          scripts = Array.prototype.slice.call(scripts)
          if (Array.isArray(scripts)) {
            this.existingMapScript = scripts.find(script => script.src.includes('maps.googleapis.com'))
          }
        }

        if (!this.existingMapScript) {
          const mapScript = document.createElement('script')
          mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.google}&callback=initMap`
          mapScript.defer = true
          mapScript.async = true
          document.body.appendChild(mapScript)
        }
      }
    },
    mounted() {
      if (process.browser && this.existingMapScript) {
        window.initMap()
      }
    }
  }
</script>

<style scoped>
  #map {
    height: 700px;
  }
</style>