export default {
  mounted() {
    if (process.browser && !window.canRunAds) {
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}