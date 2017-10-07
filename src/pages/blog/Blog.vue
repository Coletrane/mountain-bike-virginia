<template>
  <div id="blog">
    <creature-2017></creature-2017>

    <relaunch></relaunch>

    <creature-2016></creature-2016>
  </div>
</template>

<script>
  import Creature2017 from './Creature2017.vue'
  import Relaunch from './Relaunch.vue'
  import Creature2016 from './Creature2016.vue'

  export default {
    components: {
      'creature-2017': Creature2017,
      'relaunch': Relaunch,
      'creature-2016': Creature2016
    },
    name: 'blog'
  }
</script>
