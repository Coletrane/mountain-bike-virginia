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
  import {nokeCoords, trails} from '../../assets/trails'

  export default {
    name: 'trails',
    components: {
      MTBVAHeader,
      BottomNav
    },
    data() {
      return {
        image: `${s3StaticImg}foliage.jpg`,
        currentInfoWindow: ' '
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
          trails.forEach((trail => {

            let marker = new google.maps.Marker({
              ...trail.mapMarker,
              map: nokeMap
            })
            markers.push(marker)

            let infoWindow = new google.maps.InfoWindow({
              content: this.buildInfoWindowContent(trail)
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
      onMarkerClick(title) {
        this.openInfoWindow = title

        // let route = `trails/${title.toLowerCase().split(' ').join('-')}`
        // this.$router.push(route)
      },
      buildInfoWindowContent(trail) {
        if (process.browser) {

          const rootDiv = document.createElement('div')
          rootDiv.id = `${trail.mapMarker.title}-info-window`

          const titleH1 = document.createElement('h1')
          titleH1.innerText = trail.mapMarker.title

          const descriptionDiv = document.createElement('div')
          descriptionDiv.class = 'info-window-description'
          const descriptionP = document.createElement('p')
          descriptionP.innerText = trail.description || 'no description available'
          descriptionDiv.appendChild(descriptionP)


          rootDiv.appendChild(titleH1)
          rootDiv.appendChild(descriptionDiv)

          return rootDiv.outerHTML
        }
      }
    }
  }
</script>

<style scoped>
  #map {
    height: 700px;
  }
</style>