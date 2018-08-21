export default {
  props: {
    postRoute: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      post: this.$store.getters.posts(this.postRoute)
    }
  }
}
