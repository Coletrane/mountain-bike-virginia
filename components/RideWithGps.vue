<template>
  <iframe :src="url"
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
  </style>
