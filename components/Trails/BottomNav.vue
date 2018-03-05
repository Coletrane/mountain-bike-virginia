<template>
  <div class="navbar fixed-bottom mtbva-bottom-nav">
    <ul class="navbar navbar-expand">
      <li class="nav-item mtbva-bottom-nav-item">
        <a class="nav-link mtbva"
           @click="scrollToParking()">
          <font-awesome-icon :icon="Car"/>
          Parking
        </a>
      </li>
      <li class="nav-item mtbva-bottom-nav-item">
        <a class="nav-link"
           @click="scrollToTrails()">
          <font-awesome-icon :icon="Bicycle"/>
          Trails
        </a>
      </li>
      <li class="nav-item mtbva-bottom-nav-item">
        <a class="nav-item nav-link mtbva-bottom-nav-item"
           @click="scrollToBeer()">
          <font-awesome-icon :icon="Beer"/>
          Beer
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import Car from '@fortawesome/fontawesome-free-solid/faCar'
  import Bicycle from '@fortawesome/fontawesome-free-solid/faBicycle'
  import Beer from '@fortawesome/fontawesome-free-solid/faBeer'

  export default {
    name: 'bottom-nav',
    components: {
      FontAwesomeIcon
    },
    data() {
      return {
        Car: Car,
        Bicycle: Bicycle,
        Beer: Beer
      }
    }
  }
</script>

<style scoped>
  ul {
    width: 100%;
  }

  li {
    float: none;
    text-align: center;
    display: inline-block;
    width: 33%;
  }

  a {
    font-size: 1.5rem;
  }
</style>