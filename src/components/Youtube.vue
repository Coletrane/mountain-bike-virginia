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
    name: 'youtube',
    props: ['src']
  }
</script>

<style>
  .yt-wrapper {
    margin: auto;
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
  }

  .yt-wrapper iframe {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 93%;
  }
</style>