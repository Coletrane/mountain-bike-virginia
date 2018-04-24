<template>
  <div>
    <img v-if="!loaded"
         :src="s3StaticImg + '/loading.gif'"/>
    <iframe v-if="$store.state.misc.loaded"
            v-show="loaded"
            :src="url"
            scrolling='no'>
    </iframe>
  </div>
</template>
<script>
  import { s3StaticImg } from '../../scripts/routes'

  export default {
    name: 'ride-with-gps',
    props: {
      url: {
        required: true,
        type: String
      }
    },
    data() {
      return {
        s3StaticImg: s3StaticImg,
        loaded: false
      }
    },
    mounted() {
      this.$store.watch(state => {
        return this.$store.state.misc.loaded
      }, (newVal, oldVal) => {
        if (process.browser) {
          const img = this.$el.children[0]
          const iframe = this.$el.children[1]

          if (iframe) {
            iframe.onload = () => {
              this.loaded = true
            }
          }
        }
      })
    }
  }
</script>
<style scoped>

  iframe, div {
    min-width: 100%;
    border: none;
    height: 800px;
  }

  @media (max-width: 700px) {
    iframe, div {
      height: 600px;
    }
  }

  @media (max-width: 400px) {
    iframe, div  {
      height: 450px;
    }
  }

  img {
    width: 85%;
    height: auto;
    display: block;
    margin-top: 50%;
    margin-left: auto;
    margin-right: auto;
  }
</style>
