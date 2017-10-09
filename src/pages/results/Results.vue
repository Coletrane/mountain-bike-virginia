<template>
  <div id="results">
    <m-t-b-v-a-header
      v-bind:header-height="500"
      v-bind:image="image">
    </m-t-b-v-a-header>

  </div>
</template>

<script>
  import MTBVAHeader from '../../components/MTBVAHeader.vue'
  import Podium from './img/podium.png'

  export default {
    name: 'results',
    components: {
      MTBVAHeader
    },
    data() {
      return {
        image: Podium
      }
    },
    methods: {
      divide(classes) {
        let result = [];
        let size = 2;
        for (let i = 0; i < classes.length; i += size) {
          result.push(classes.slice(i, i + size));
        }

        return result;
      }
    }
  }

</script>

<style>

</style>