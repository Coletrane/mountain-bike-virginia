<template>
  <div>
    <div id="map"></div>

    <div v-show="false">
      <div v-for="window of infoWindows"
           :id="getInfoWindowRoute(window) + '-info-window-hidden'">
        <info-window :route="'trails/' + getInfoWindowRoute(trail)"
                     :title="trail.mapMarker.title"
                     :description="trail.description"/>
      </div>
    </div>
  </div>
</template>

<script>
  import InfoWindow from './InfoWindow'

  export default {
    name: 'google-map',
    components: {
      InfoWindow
    },
    props: {
      map: {
        type: Object,
        required: true
      },
      markers: {
        type: Array,
        required: true
      },
      infoWindows: {
        type: Array,
        required: true
      }
    },
    created() {
      if (process.browser) {
        window.initMap = () => {
          const map = new google.maps.Map(document.getElementById('map'), this.map)

          this.markers.forEach((marker => {

            let markers = []
            let infoWindows = []
            markers.push(new google.maps.Marker({
              ...marker,
              map: map
            }))

            let infoWindow = new google.maps.InfoWindow({
              content: this.getInfoWindow(trail)
            })
            infoWindows.push(new google.maps.InfoWindow({}))

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

</style>