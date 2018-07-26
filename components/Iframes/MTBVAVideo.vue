<template>
      <div class="video-wrapper">
        <video v-if="$store.state.misc.loaded"
               width="100%"
               :preload="preload"
               :autoplay="autoplay"
               :muted="muted"
               :loop="loop"
               :controls="getControls">
          <source :src="url" type="video/mp4">
          Your browser does not support the video tag.
        </video>
  </div>
</template>
<script>
import isMobile from "../../assets/detect-mobile"
import { noExtension, justExtension } from "../../assets/functions"

export default {
  name: "mtbva-video",
  props: {
    src: {
      type: String,
      required: true
    },
    autoplay: {
      type: Boolean,
      required: false,
      default: false
    },
    muted: {
      type: Boolean,
      required: false,
      default: false
    },
    loop: {
      type: Boolean,
      required: false,
      default: false
    },
    controls: {
      type: Boolean,
      required: false,
      default: false
    },
    responsive: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  created() {
    if (process.browser) {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        this.controls = true
      }

      if (isMobile()) {
        this.autoplay = false
        this.preload = "none"
      } else {
        this.preload="auto"
      }
    }
  },
  computed: {
    url() {
      const filename = noExtension(this.src)
      const extension = justExtension(this.src)

      if (this.responsive) {
        if (isMobile()) {
          return `${filename}-mobile${extension}`
        } else {
          return `${filename}-desktop${extension}`
        }
      } else {
        return this.src
      }
    },
    getControls() {
      // Make sure mobile always has controls
      if (isMobile()) {
        return true
      } else {
        return this.controls
      }
    }
  }
}
</script>
<style scoped>
.video-wrapper {
  position: relative;
  padding-bottom: 52.75%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

@media (max-width: 1280px) {
  .video-wrapper {
    padding-bottom: 52.5%;
  }
}

@media (max-width: 960px) {
  .video-wrapper {
    padding-bottom: 51.75%;
  }
}

@media (max-width: 720px) {
  .video-wrapper {
    padding-bottom: 50%;
  }
}

@media (max-width: 500px) {
  .video-wrapper {
    padding-bottom: 46%;
  }
}

.video-wrapper video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
