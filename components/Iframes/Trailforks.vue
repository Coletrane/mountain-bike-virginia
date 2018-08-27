<template>
  <div class="trailforks"
       :style="style">
    <iframe v-if="$store.state.misc.loaded"
            src="https://www.trailforks.com/widgets/region_info/?rid=3159&counts=1&stats=1&w=100%&h=150px&title=null"
            scrolling="no"
            frameborder="0"
            allowfullscreen="1"
            width="100%"
            :height="infoHeight || ''"
            id="regioninfo0">
    </iframe>
    <iframe v-if="$store.state.misc.loaded && mapUrl"
            :src="mapUrl"
            scrolling="no"
            frameborder="0"
            allowfullscreen="1"
            width="100%"
            :height="mapHeight || ''"
            id="map0">
    </iframe>
  </div>
</template>
<script>
export default {
  name: "trailforks",
  data() {
    return {
      style: {}
    }
  },
  created() {
    if (process.browser) {
      if (document.body.clientWidth > 1020) {
        this.style.width = "90%"
        this.style.height = 1300
        this.infoHeight = 150
        this.mapZoom = 9
      } else if (
        document.body.clientWidth <= 1020 &&
        document.body.clientWidth > 650
      ) {
        this.style.width = "90%"
        this.style.height = 1000
        this.infoHeight = 150
        this.mapZoom = 8
      } else if (
        document.body.clientWidth <= 650 &&
        document.body.clientWidth > 400
      ) {
        this.style.width = "100%"
        this.style.height = 900
        this.infoHeight = 200
        this.mapZoom = 7
      } else if (
        document.body.clientWidth <= 400 &&
        document.body.clientWidth > 350
      ) {
        this.style.width = "100%"
        this.style.height = 800
        this.infoHeight = 230
        this.mapZoom = 7
      } else if (document.body.clientWidth <= 350) {
        this.style.width = "100%"
        this.style.height = 750
        this.infoHeight = 250
        this.mapZoom = 7
      }
      this.mapHeight = this.style.height - this.infoHeight
      this.mapUrl = `https://www.trailforks.com/widgets/region_map/?rid=3159&w=100%&h=${
        this.mapHeight
      }&maptype=osm&trailstyle=difficulty&controls=1&list=0&layers=trail,labels,photo,poi,directory,region&hideunsanctioned=&z=${
        this.mapZoom
      }&lat=&lon=`
    }
  }
}
</script>
<style scoped>
.trailforks {
  padding: 2rem 0;
  display: block;
  margin: auto;
}

#regioninfo0 {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 1rem !important;
}

@media (max-width: 500px) {
  .trailforks {
    padding: 2rem 0;
  }
}
</style>
