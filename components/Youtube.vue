<template>
    <div class="yt-wrapper">
      <iframe width="100%"
              :src="src"
              frameborder="0"
              allowfullscreen>
      </iframe>
    </div>
</template>
<script>
  export default {
    name: "youtube",
    props: ["src"],

    data() {
      return {
        url: "",
        show: false
      }
    },
    attached() {
      this.url = this.src
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
