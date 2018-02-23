<template>
  <iframe v-if="loaded"
          :src="url"
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
    data() {
      return {
        loaded: false
      }
    },
    created() {
      if (process.browser) {
        window.addEventListener('load', this.onLoad)
      }
    },
    destroyed() {
      if (process.browser) {
        window.removeEventListener('load', this.onLoad)
      }
    },
    methods: {
      onLoad() {
        this.loaded = true
        window.removeEventListener('load', this.onLoad)
      }
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
