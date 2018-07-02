<template>
  <iframe :style="style"
          frameborder="0"
          scrolling="no"
          :src="src">
  </iframe>
</template>
<script>
const desktopCoordinates = {
  x: "-8883432",
  y: "4509732",
  z: "7"
}
const tabletCoordinates = {
  x: "-8909019",
  y: "4505042",
  z: "8"
}
const mobileCoordinates = {
  x: "-8891951",
  y: "4516883",
  z: "7"
}
export default {
  name: "MTBProject",
  data() {
    return {
      style: {
        width: "",
        height: ""
      },
      position: {
        x: "",
        y: "",
        z: ""
      }
    }
  },
  created() {
    if (process.browser) {
      if (document.body.clientWidth > 1020) {
        this.style.width = "90%"
        this.style.height = "1000px"
        this.position = desktopCoordinates
      } else if (
        document.body.clientWidth <= 1020 &&
        document.body.clientWidth > 720
      ) {
        this.style.width = "90%"
        this.style.height = "900px"
        this.position = tabletCoordinates
      } else if (
        document.body.clientWidth <= 720 &&
        document.body.clientWidth > 400
      ) {
        this.style.width = "100%"
        this.style.height = "700px"
        this.position = mobileCoordinates
      } else if (document.body.clientWidth <= 400) {
        this.style.width = "100%"
        this.style.height = "600px"
        this.position = mobileCoordinates
      }
    }
  },
  computed: {
    src() {
      return `https://www.mtbproject.com/widget/map?favs=1&location=fixed&x=${
        this.position.x
      }&y=${this.position.y}&z=${this.position.z}&h=${this.style.height.replace("px", "")}`
    }
  }
}
</script>
<style scoped>
iframe {
  display: block;
  margin: auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

@media (max-width: 500px) {
  iframe {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}
</style>
