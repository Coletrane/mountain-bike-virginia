<template>
    <div class="yt-wrapper">
      <iframe width="100%"
              frameborder="0"
              allowfullscreen
              :url="src">
      </iframe>
    </div>
</template>
<script>
  export default {
    name: "youtube",
    props: {
      src: {
        required: true,
        type: String
      }
    }
  }
</script>
<style>
  .yt-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
  }

  .yt-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
