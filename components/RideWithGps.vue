<template>
  <iframe :url="url"
          style='width: 1px; min-width: 100%; border: none;' scrolling='no'>
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
