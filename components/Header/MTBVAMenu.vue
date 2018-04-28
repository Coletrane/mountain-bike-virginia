<template>
  <nav class="mtbva-menu">
    <div class="mtbva-nav-item mtbva-nav-close">
      <a @click="closeMenu()"
         id="close-menu-link">
        <font-awesome-icon :icon="faTimesCircle"/>
      </a>
    </div>
    <div class="mtbva-nav-item">
      <nuxt-link :to="{name: 'xxc-va-race-series-2018'}"
                 class="nav-link"
                 id="xxcva-nav-link">
        <font-awesome-icon :icon="faFlagCheckered"/>
        XXCVA Races
      </nuxt-link>
    </div>
    <div class="mtbva-nav-item">
      <nuxt-link :to="{name: 'index'}"
                 class="nav-link"
                 id="trails-nav-link">
        <font-awesome-icon :icon="faBicycle"/>
        Trails
      </nuxt-link>
    </div>
    <div class="mtbva-nav-item">
      <nuxt-link :to="{name: 'results'}"
                 class="nav-link"
                 id="results-nav-link">
        <font-awesome-icon :icon="faListOl"/>
        Results
      </nuxt-link>
    </div>
    <div class="mtbva-nav-item">
      <a class="nav-link"
         id="facebook-nav-link"
         href="https://www.facebook.com/bikevirginia/">
        <font-awesome-icon :icon="faFacebook"/>
        Facebook
      </a>
    </div>
    <div class="mtbva-nav-item">
      <a class="nav-link"
         id="instagram-nav-link"
         href="https://www.instagram.com/cole_bikeva/">
        <font-awesome-icon :icon="faInstagram"/>
        Instagram
      </a>
    </div>
    <div class="tag-bottom">
      <img :src="pirates"
           alt="Mountain Bike Virginia Pirates"
           class="pirates"/>
    </div>
  </nav>
</template>
<script>
  import { s3StaticImg } from '../../scripts/routes'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
  import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
  import faTimesCircle from '@fortawesome/fontawesome-free-solid/faTimesCircle'
  import faBicycle from '@fortawesome/fontawesome-free-solid/faBicycle'
  import faListOl from '@fortawesome/fontawesome-free-solid/faListOl'
  import faFlagCheckered from '@fortawesome/fontawesome-free-solid/faFlagCheckered'

  export default {
    name: 'mtbva-menu',
    components: {
      FontAwesomeIcon
    },
    data() {
      return {
        faFacebook: faFacebook,
        faInstagram: faInstagram,
        faTimesCircle: faTimesCircle,
        faBicycle: faBicycle,
        faListOl: faListOl,
        faFlagCheckered: faFlagCheckered,
        pirates: `${s3StaticImg}/jolly.png`
      }
    },
    methods: {
      closeMenu() {
        this.$store.dispatch('closeMenu')
      }
    }
  }
</script>
<style scoped>
  .mtbva-menu {
    position: fixed;
    right: 0;
    color: white;
    display: block;
    z-index: 999;
    width: 300px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    pointer-events: auto;
    top: 0;
    will-change: transform;
    background-color: rgba(0, 0, 0, 0.9);
  }

  svg {
    margin-right: 1rem;
  }

  a {
    color: white;
    font-size: 2rem;
    font-family: 'MyriadPro-Bold', sans-serif;
    font-weight: 800;
    cursor: pointer;
  }

  a:hover {
    text-decoration: none;
  }

  @media (max-width: 575px) {
    .mtbva-menu {
      width: 200px;
    }

    a {
      font-size: 1.3rem;
    }
  }

  .mtbva-nav-close {
    color: white;
    padding-top: 1rem;
    text-align: center;
    font-size: 2rem;
  }

  .tag-bottom {
    position: absolute;
    bottom: 2%;
    width: 100%;
    text-align: center;
  }

  .pirates {

    width: 125px;
  }
</style>