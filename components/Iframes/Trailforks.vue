<template>
  <div class="trailforks"
       :style="style">
    <!--<div class="TrailforksRegionInfo trailforks-widget"-->
         <!--data-rid="3159"-->
         <!--data-counts="1"-->
         <!--data-stats="1"-->
         <!--data-w="100%"-->
         <!--data-h="150px">-->
    <!--</div>-->
    <!--<div class="TrailforksWidgetMap trailforks-widget"-->
         <!--data-rid="3159"-->
         <!--data-maptype="osm"-->
         <!--data-trailstyle="difficulty"-->
         <!--data-controls="1"-->
         <!--data-list="0"-->
         <!--data-dml="1"-->
         <!--data-layers="trail,labels,photo,poi,directory,region"-->
         <!--data-w="100%"-->
         <!--data-z="8"-->
         <!--data-lat=""-->
         <!--data-lon=""-->
         <!--data-hideunsanctioned="">-->
    <!--</div>-->
    <iframe src="https://www.trailforks.com/widgets/region_info/?rid=3159&amp;counts=1&amp;stats=1&amp;w=100%&amp;h=150px&amp;title=null" scrolling="no" frameborder="0" allowfullscreen="1" width="100%" height="150px" id="regioninfo0"></iframe>
    <div data-rid="3159" data-maptype="osm" data-trailstyle="difficulty" data-controls="1" data-list="0" data-dml="1" data-layers="trail,labels,photo,poi,directory,region" data-w="100%" data-z="8" data-lat="" data-lon="" data-hideunsanctioned="" class="TrailforksWidgetMap trailforks-widget" data-v-5c21f6b4="" data-h="800" style="width: 100%;"><iframe src="https://www.trailforks.com/widgets/region_map/?rid=3159&amp;w=100%&amp;h=800&amp;maptype=osm&amp;trailstyle=difficulty&amp;controls=1&amp;list=0&amp;layers=trail,labels,photo,poi,directory,region&amp;hideunsanctioned=&amp;z=8&amp;lat=&amp;lon=" scrolling="no" frameborder="0" allowfullscreen="1" width="100%" height="800" id="map0"></iframe></div>
  </div>
</template>
<script>
export default {
  name: "trailforks",
  data() {
    return {
      scriptSrc: "https://es.pinkbike.org/ttl-86400/sprt/j/trailforks/widget.js"
    }
  },
  mounted() {
    if (process.browser) {
      this.$el
        .getElementsByClassName("TrailforksWidgetMap")[0]
        .setAttribute("data-h", parseInt(this.style.height) - 300)

      // if (this.$store.state.misc.loaded) {
      //   this.attachScript()
      // } else {
      //   this.$store.watch(state => state.misc.loaded, this.attachScript)
      // }
    }
  },
  destroyed() {
    if (process.browser) {
      window.widgetScriptLoaded = false
    }
  },
  methods: {
    attachScript() {
      if (!this.scriptLoaded) {
        const script = document.createElement("script")
        script.setAttribute("src", this.scriptSrc)
        document.getElementsByTagName("head")[0].appendChild(script)
      }

    }
  },
  computed: {
    scriptLoaded() {
      if (process.browser) {
        return Array.prototype.slice
          .call(document.getElementsByTagName("script"))
          .find(scriptEl => {
            return scriptEl.getAttribute("src") === this.scriptSrc
          })
      }
    },
    style() {
      if (process.browser) {
        let style = {}
        if (document.body.clientWidth > 1020) {
          style.width = "90%"
          style.height = "1300px"
        } else if (
          document.body.clientWidth <= 1020 &&
          document.body.clientWidth > 720
        ) {
          style.width = "90%"
          style.height = "1100px"
        } else if (
          document.body.clientWidth <= 720 &&
          document.body.clientWidth > 400
        ) {
          style.width = "100%"
          style.height = "1000px"
        } else if (
          document.body.clientWidth <= 400 &&
          document.body.clientWidth > 350
        ) {
          style.width = "100%"
          style.height = "900px"
        } else if (document.body.clientWidth <= 350) {
          style.width = "100%"
          style.height = "750px"
        }
        return style
      }
    },
    mobile() {
      return process.browser && isMobile()
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

.TrailforksRegionInfo {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 1rem !important;
}

@media (max-width: 500px) {
  .trailforks {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}

.trailforks-widget,
a {
  display: block;
  margin: auto;
}
</style>
