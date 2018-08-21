import { s3StaticImg } from "../routes"

export default {
  data() {
    return {
      loadingImg: `${s3StaticImg}/loading.gif`,
      loaded: false
    }
  },
  mounted() {
    if (!this.$store.state.misc.loaded) {
      this.$store.watch(
        state => {
          return this.$store.state.misc.loaded
        },
        (newVal, oldVal) => this.iframeListener()
      )
    } else {
      this.iframeListener()
    }
  },
  methods: {
    iframeListener() {
      if (process.browser) {
        const img = this.$el.getElementsByTagName("img")[0]
        const iframe = this.$el.getElementsByTagName("iframe")[0]
        if (iframe) {
          iframe.onload = () => {
            this.loaded = true
          }
        }
      }
    }
  }
}
