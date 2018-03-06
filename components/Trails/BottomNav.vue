<template>
  <div class="navbar fixed-bottom">
    <ul class="navbar-expand">
      <li class="nav-item mtbva-bottom-nav-item">
        <a class="nav-link mtbva"
           v-scroll-to="{el: '#parking'}">
          <font-awesome-icon :icon="Car"/>
          Parking
        </a>
      </li>
      <li class="nav-item mtbva-bottom-nav-item">
        <a class="nav-link"
           v-scroll-to="{el: '#trails'}">
          <font-awesome-icon :icon="Bicycle"/>
          Trails
        </a>
      </li>
      <li class="nav-item mtbva-bottom-nav-item">
        <a class="nav-item nav-link mtbva-bottom-nav-item"
           v-scroll-to="{el: '#beer'}">
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
  .navbar {
    background: rgba(0,0,0, .5);
    color: white;
    height: 3rem;
  }

  ul {
    width: 100%;
    margin-bottom: 0;
  }

  li {
    float: none;
    text-align: center;
    display: inline-block;
    width: 33%;
  }

  a {
    font-size: 1.5rem;
    cursor: pointer;
  }
</style>