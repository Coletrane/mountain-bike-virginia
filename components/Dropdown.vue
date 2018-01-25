<template>
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle mtbva-dropdown"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
      {{currentItem}}
    </button>
    <div class="dropdown-menu"
         aria-labelledby="dropdownMenuButton">
      <a v-for="item in items"
         class="dropdown-item"
         @click="selectRace(item)">
        {{item.race}}
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    name: "dropdown",
    props: {
      currentItem: {
        required: true,
        type: String
      },
      items: {
        required: true,
        type: Array
      },
      selectRace: {
        required: true,
        type: Function
      }
    }
  }
</script>
<style>
  .mtbva-dropdown {
    background-color: transparent;
    border-color: #000000;
    color: #000000;
    margin: 1rem;
    padding: 1rem;
  }
  .mtbva-dropdown:active {
    background-color: rgba(0,0,0, .5) !important;
    border-color: #000000 !important;
  }
  .mtbva-dropdown:focus {
    background-color: rgba(0,0,0, .5) !important;
    border-color: #000000 !important;
  }
</style>
