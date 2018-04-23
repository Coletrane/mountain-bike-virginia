<template>
  <iframe v-if="$store.state.misc.loaded"
          :src="url"
          scrolling='no'>
  </iframe>
</template>
<script>
  export default {
    name: 'ride-with-gps',
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
    height: 800px;
  }
  @media (max-width: 700px) {
    iframe {
      height: 600px;
    }
  }
  @media (max-width: 400px) {
    iframe {
      height: 450px;
    }
  }

  /*get rid of ridewithgps border radius*/
  .TripRouteEmbed-53d3c121 {
    border-radius: 0 !important;
  }


</style>
