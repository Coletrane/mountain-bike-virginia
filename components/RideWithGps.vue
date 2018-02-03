<template>
  <iframe :url="url"
          scrolling='no'>
  </iframe>
</template>
<script>
  export default {
    name: "ride-with-gps",
    props: {
      url: {
        required: true,
        type: String
      }
    },
    mounted() {

      setTimeout(() => {
        if (this.$store.state.iframesDeferred) {
          this.$el.src = this.url
        }

        if (!this.$el.url && !this.$store.state.iframesDeferred) {
          this.$store.commit('deferIframes')
        }
      }, 500)
    }
  }
</script>

<style scoped>
  iframe {
    width: 1px;
    min-width: 100%;
    border: none;
    height: 600px;
  }

  @media (min-width: 992px) {
    iframe {
      height: 800px;
    }
  }
  </style>
