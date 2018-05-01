export default {
  computed: {
    postRoute() {
      return this.post.route &&
             this.post.route !== ' ' &&
             this.$router.matcher.match(this.post.route).name
    },
    postRouteName() {
      return this.$router.matcher.match(this.post.route).name
    }
  }
}