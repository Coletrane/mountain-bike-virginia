<template>
  <div>
    <div id="map"></div>

    <div v-show="false">
      <div v-for="marker of markers"
           :id="getInfoWindowKebabCase(marker) + '-info-window-hidden'">
        <info-window :route="marker.route"
                     :title="marker.mapMarker.title"
                     :description="marker.description"/>
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
      }
    },
    data() {
      return {
        mapMarkers: [],
        infoWindows: []
      }
    },
    created() {
      if (process.browser) {
        window.initMap = () => {
          // Create the map
          const map = new google.maps.Map(document.getElementById('map'), this.map)

          // Initialize markers and info windows
          this.markers.forEach(marker => {

            const localMarker = new google.maps.Marker({
              ...marker.mapMarker,
              map: map
            })
            this.mapMarkers.push(localMarker)

            const localInfoWindow = new google.maps.InfoWindow({
              content: this.getInfoWindow(marker)
            })
            this.infoWindows.push(localInfoWindow)
          })

          // Add event listeners to info windows
          this.mapMarkers.forEach((marker, i, arr) => {
            marker.addListener('click', () => {
              if (marker.title !== this.currentInfoWindow) {
                this.infoWindows.forEach(infoWindow => {
                  infoWindow.close()
                })
                // infoWindows array will be in sync with markers array
                this.infoWindows[i].open(map, marker)
                this.currentInfoWindow = marker.title
              }
            })
          })
        }

        // Check if google maps is already included
        this.checkGoogleMapsExists()

        // Include it if it is not already in the DOM
        if (!this.$store.state.googleMapsAttached) {
          const mapScript = document.createElement('script')
          mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.google}&callback=initMap`
          mapScript.defer = true
          mapScript.async = true
          document.body.appendChild(mapScript)
        }

        this.checkGoogleMapsExists()
      }
    },
    mounted() {
      if (process.browser &&
          this.$store.state.googleMapsAttached &&
          window.google) {
        window.initMap()
      }
    },
    methods: {
      checkGoogleMapsExists() {
        if (process.browser) {
          let scripts = document.getElementsByTagName('script')
          if (scripts) {
            scripts = Array.prototype.slice.call(scripts)
            if (scripts.length > 0) {
              let scriptExists = scripts.find(script => script.src.includes('maps.googleapis.com'))
              if (scriptExists) {
                this.$store.commit('googleMapsAttached')
              }
            }
          }
        }
      },
      getInfoWindow(marker) {
        if (process.browser) {
          return document.getElementById(`${this.getInfoWindowKebabCase(marker)}-info-window-hidden`).innerHTML
        }
      },
      getInfoWindowKebabCase(marker) {
        let route = marker.route.split('/')
        route = route[route.length - 1]
        return marker.route
      }
    }
  }
</script>

<style scoped>
  #map {
    height: 700px;
  }
</style>