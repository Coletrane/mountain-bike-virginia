<template>
  <div class="dropdown mtbva-dropedown-container">
    <button class="btn btn-primary dropdown-toggle mtbva-dropdown"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            @click="toggleDropdown()">
      {{currentItem}}
    </button>
    <div v-if="expanded"
         class="mtbva-dropdown-menu">
      <div class="dropdown-menu"
           :class="expanded ? 'mtbva-dropdown-menu-show' : ''"
           aria-labelledby="dropdownMenuButton">
        <a v-for="item in items"
           class="dropdown-item mtbva-dropdown-item"
           @click="selectRace(item)">
          {{item}}
        </a>
      </div>
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
      }
    },
    data() {
      return {
        expanded: false
      }
    },
    methods: {
      // TODO: put this in store
      toggleDropdown() {
        this.expanded = !this.expanded
      },
      selectRace(race) {
        this.$store.commit('selectRace', race)
        this.toggleDropdown()
      }
    }
  }
</script>
<style>
  .mtbva-dropedown-container {
    margin: auto;
    padding: 1rem;
    position: relative;
    width: 315px;
  }

  .mtbva-dropdown {
    background-color: transparent;
    border-color: white;
    color: white;
  }

  .mtbva-dropdown:hover {
    background-color: rgba(0, 0, 0, .25) !important;
    border-color: #3d7635 !important;
  }

  .mtbva-dropdown:active, .mtbva-dropdown.active, .mtbva-dropdown-item:active, .mtbva-dropdown-item.active {
    background-color: #3d7635 !important;
    border-color: #3d7635 !important;
  }

  .mtbva-dropdown:focus {
    background-color: rgba(0, 0, 0, .25) !important;
    border-color: #000000 !important;
  }

  .mtbva-dropdown-menu-show {
    display: inline;
    top: 51px !important;
    left: 13px !important;
  }

  .mtbva-dropdown-item {
    cursor: pointer;
  }
  .mtbva-dropdown-item:hover {
    color: white !important;
    background-color: rgba(0,0,0, 0.9) !important;
  }
  .mtbva-dropdown-item:active {
    color: white !important;
  }

</style>
