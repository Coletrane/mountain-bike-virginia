import { s3StaticImg } from "../routes"

export default {
  computed: {
    backgroundImage() {
      return {
        backgroundImage: `url("${s3StaticImg}/asfalt-light.png")`
      }
    }
  }
}
