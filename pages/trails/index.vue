<template>
  <div class="trails">
    <m-t-b-v-a-header
      :header-height="700"
      :image="image">
    </m-t-b-v-a-header>

    <div class="main-content main-content-mobile">
      <div id="map"></div>
    </div>

    <div v-show="false">
      <div v-for="trail of trails"
           :id="getInfoWindowRoute(trail) + '-info-window-hidden'">
        <info-window :route="'trails/' + getInfoWindowRoute(trail)"
                     :title="trail.mapMarker.title"
                     :description="trail.description"/>
      </div>
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
    created() {
      if (process.browser) {

        window.initMap = () => {
          const nokeMap = new google.maps.Map(document.getElementById('map'), {
            center: nokeCoords,
            zoom: 9
          })

          let markers = []
          let infoWindows = []
          trailAreas.forEach((trail => {

            let marker = new google.maps.Marker({
              ...trail.mapMarker,
              map: nokeMap
            })
            markers.push(marker)

            let infoWindow = new google.maps.InfoWindow({
              content: this.getInfoWindow(trail)
            })
            infoWindows.push(infoWindow)

            marker.addListener('click', () => {
              if (marker.title !== this.currentInfoWindow) {
                infoWindows.forEach(infoWindow => infoWindow.close())
                infoWindow.open(map, marker)
                this.currentInfoWindow = trail.mapMarker.title
              }
            })
          }))
        }

        let scripts = document.getElementsByTagName('script')
        if (scripts) {
          scripts = Array.prototype.slice.call(scripts)
          if (scripts.length > 0) {
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
    },
    methods: {
      getInfoWindow(trail) {
        if (process.browser) {
          return document.getElementById(`${this.getInfoWindowRoute(trail)}-info-window-hidden`).innerHTML
        }
      },
      getInfoWindowRoute(trail) {
        return trail.mapMarker.title.toLowerCase().split(' ').join('-')
      }
    }
  }
</script>

<style scoped>
  #map {
    height: 700px;
  }
</style>