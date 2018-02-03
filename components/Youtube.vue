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
    },
    mounted() {
      // FIXME: I think there is a race condition between this and defer-iframes.js
      setTimeout(() => {
        if (this.$store.state.iframesDeferred) {
          this.$el.firstChild.src = this.src
        }

        if (!this.$el.firstChild.url && !this.$store.state.iframesDeferred) {
          this.$store.commit('deferIframes')
        }
      }, 500)
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
