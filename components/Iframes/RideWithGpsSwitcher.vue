<template>
  <div class="ride-with-gps-switcher">
    <div class="route-selection">
      <button v-for="gpsRoute of gpsRoutes"
              @click="selectRaceRoute(gpsRoute.url)">
        <span class="link-hover"
              :class="buttonSelected(gpsRoute.url)">
          {{gpsRoute.name.toUpperCase()}}
        </span>
      </button>
    </div>
    <ride-with-gps :url="selectedGpsRouteUrl"/>
  </div>
</template>
<script>
import RideWithGps from "./RideWithGps"

export default {
  name: "ride-with-gps-switcher",
  props: {
    gpsRoutes: {
      type: Array,
      required: true
    }
  },
  components: {
    RideWithGps
  },
  data() {
    return {
      selectedGpsRouteUrl: this.gpsRoutes[0].url
    }
  },
  methods: {
    selectRaceRoute(url) {
      this.selectedGpsRouteUrl = url
    },
    buttonSelected(url) {
      if (this.selectedGpsRouteUrl === url) {
        return "button-selected"
      }
    }
  }
}
</script>
<style scoped>
.route-selection {
  margin: 0;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

button {
  flex: 1 1 auto;
  border: none;
  font-size: 2rem;
  background: transparent;
}

.button-selected {
  background-image: linear-gradient(#73a533 0%, #73a533 100%);
  background-size: 100% 1em;
}

span {
  font-family: "MyriadPro-Bold", sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: black;
}
</style>
