<template>
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle mtbva-dropdown"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            @click="toggleDropdown()">
      {{currentItem}}
    </button>
    <div class="dropdown-menu"
         :class="expanded ? 'mtbva-dropdown-menu-show' : ''"
         aria-labelledby="dropdownMenuButton">
      <a v-for="item in items"
         class="dropdown-item"
         @click="select(item)">
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
    },
    data() {
      return {
        expanded: false
      }
    },
    methods: {
      toggleDropdown() {
        this.expanded = !this.expanded
      },
      select(item) {
        this.selectRace(item)
        this.toggleDropdown()
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
  .mtbva-dropdown:hover {
    background-color: rgba(0,0,0, .25) !important;
    border-color: #000000 !important;
  }
  .mtbva-dropdown:active .mtbva-dropdown.active {
    background-color: #3d7635 !important;
    border-color: #3d7635 !important;
  }
  .mtbva-dropdown:focus {
    background-color: rgba(0,0,0, .25) !important;
    border-color: #000000 !important;
  }

  .mtbva-dropdown-menu-show {
    display: block !important;
  }
</style>
