import { noExtension, justExtension } from "../scripts/client/functions"

export default {
  props: {
    src: {
      type: String,
      required: true
    }
  },
  computed: {
    url() {
      let result = this.src
      const filename = noExtension(this.src)
      const extension = justExtension(this.src)

      if (filename && extension) {
        if (process.browser) {
          if (document.body.clientWidth <= 480) {
            result = `${filename}-480${extension}`
          } else if (
            document.body.clientWidth <= 720 &&
            document.body.clientWidth > 480
          ) {
            result = `${filename}-720${extension}`
          }
        }
      }

      console.log(result)
      return result
    }
  }
}
