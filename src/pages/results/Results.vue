<template>
  <div id="results">
    <creature-2017></creature-2017>
    <creature-2016></creature-2016>
  </div>
</template>

<script>
  import Creature2017 from './Creature2017Results.vue'
  import Creature2016 from './Creature2016Results.vue'

  export default {
    components: {
      'creature-2017': Creature2017,
      'creature-2016': Creature2016
    },

    name: 'results',

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