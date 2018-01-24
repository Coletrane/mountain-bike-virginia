<template>
  <div class="dropdown">
    <button class="btn btn-primary white-btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
      {{currentRace}}
    </button>
    <div class="dropdown-menu"
         aria-labelledby="dropdownMenuButton">
      <a v-for="race in races"
         class="dropdown-item"
         @click="selectRace()">
        {{race.race}}
      </a>
    </div>
  </div>
</template>
<script>
  import {scripts} from "../assets/scripts"

  export default {
    name: "dropdown",
    props: {
      currentItem: {
        required: true,
        type: Object
      },
      items: {
        required: true,
        type: Array
      }
    },
    metaInfo: {
      script: scripts
    },
  }
</script>
<style>

</style>
