<template>
  <iframe :src="url"
          style='width: 1px; min-width: 100%; border: none;' scrolling='no'>
  </iframe>
</template>
<script>
  export default {
    name: "ride-with-gps",
    props: ["url"]
  }
</script>
