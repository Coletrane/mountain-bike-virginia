<template>
  <nav :style="navStyle">
    <span class="flex-outer">
      <nuxt-link :to="{name: 'index'}"
                 key="mtbva"
                 id="mtbva-home-link">
        <img class="mtbva"
             id="mtbva-logo"
             alt='Mountain Bike Virginia'
             :src="img + 'mtbva.png'">
      </nuxt-link>
    </span>
    <span class="flex-inner inner-left">
      <nuxt-link :to="{name: 'xxc-va-race-series-2018'}"
                 key="xxcva"
                 id="xxcva-home-link">
        <img class="xxcva"
             id="xxcva-logo"
             :src="img + 'xxcva.jpg'"
             alt="XXCVA Series. Just 40 more miles.">
      </nuxt-link>
    </span>
    <span class="flex-outer">
      <weather city="roanoke"/>
    </span>
    <span v-show="!mobile"
          class="flex-outer">
      <weather city="harrisonburg"/>
    </span>
    <span v-show="!mobile"
          class="flex-outer">
      <weather city="richmond"/>
    </span>
    <span class="flex-outer"
          style="padding-right: 1rem;">
      <a @click="toggleMenu()"
         id="mtbva-menu-link">
        <font-awesome-icon :icon="faBars"
                           class="mtbva-menu-icon"/>
      </a>
    </span>
  </nav>
</template>
<script>
  import {boxShadow} from '../../assets/styles'
  import {s3StaticImg} from '../../scripts/routes'
  import Weather from './Weather'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faBars from '@fortawesome/fontawesome-free-solid/faBars'

  export default {
    name: 'navigation',
    components: {
      Weather,
      FontAwesomeIcon
    },
    data: function () {
      return {
        img: `${s3StaticImg}/`,
        navStyle: {
          boxShadow: boxShadow
        },
        mobile: true,
        menu: false,
        faBars: faBars
      }
    },
    created() {
      if (process.browser) {
        this.setMobile()
        window.addEventListener('resize', this.handleResize)
      }
    },
    destroyed() {
      if (process.browser) {
        window.removeEventListener('resize', this.handleResize)
      }
    },
    methods: {
      handleResize() {
        this.setMobile()
      },
      setMobile() {
        this.mobile = document.body.clientWidth <= 750
      },
      toggleMenu() {
        this.$store.dispatch('toggleMenu')
      }
    }
  }
</script>
<style scoped>
  nav {
    background-color: rgba(0, 0, 0, 0.75);
    position: fixed;
    top: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
  }

  .flex-outer {
    flex: 0 1 auto;
    padding-left: .5rem;
    padding-right: .5rem;
  }

  .flex-inner {
    flex: 1 1 auto;
    padding-left: .5rem;
    padding-right: .5rem;
  }

  .inner-left {
    text-align: left;
  }

  .inner-right {
    text-align: right;
  }

  .mtbva {
    width: 100px;
  }

  .xxcva {
    width: 150px;
  }

  .mtbva-menu-icon {
    font-size: 2.5rem;
    color: white;
    cursor: pointer;
  }

  @media (max-width: 575px) {
    nav {
      height: 100px;
    }

    .mtbva {
      width: 80px;
    }

    .xxcva {
      width: 140px;
    }

    .mtbva-menu-icon {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 450px) {
    nav {
      height: 75px;
    }

    .mtbva {
      width: 60px;
    }

    .xxcva {
      width: 90px;
    }

    .mtbva-menu-icon {
      font-size: 1.5rem;
    }
  }
</style>
