<template>
  <nav :style="navStyle">
    <span class="flex-outer">
      <nuxt-link to="/"
                 key="mtbva"
                 id="mtbva-home-link">
        <img class="mtbva"
             id="mtbva-logo"
             alt='Mountain Bike Virginia'
             :src="img + 'mtbva.png'">
      </nuxt-link>
    </span>
    <span class="flex-inner inner-left">
      <nuxt-link to="/"
                 key="xxcva"
                 id="xxcva-home-link">
        <img class="xxcva"
             id="xxcva-logo"
             :src="img + 'xxcva.jpg'"
             alt="XXCVA Series. Just 40 more miles.">
      </nuxt-link>
    </span>
    <span v-show="!mobile"
          class="flex-inner inner-right">
      <weather city="blacksburg"/>
    </span>
    <span :class="mobile ? 'flex-inner inner-right' : 'flex-outer'">
      <weather city="roanoke"/>
    </span>
    <span v-show="!mobile"
          class="flex-outer">
      <weather city="harrisonburg"/>
    </span>
    <span class="flex-outer">
      <a @click="toggleMenu()"
         id='mtbva-menu-icon'>
        <i class="fa fa-bars mtbva-menu-icon"></i>
      </a>
    </span>
  </nav>
</template>
<script>
  import {boxShadow} from "../../assets/styles"
  import {s3StaticImg} from "../../scripts/routes"
  import Weather from './Weather'

  export default {
    name: "navigation",
    components: {
      Weather
    },
    data: function () {
      return {
        img: `${s3StaticImg}`,
        navStyle: {
          boxShadow: boxShadow
        },
        mobile: true,
        menu: false
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
        this.mobile = document.body.clientWidth <= 700
      },
      toggleMenu() {
        this.$store.commit('toggleMenu')
      }
    }
  }
</script>
<style scoped>
  nav {
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
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
    width: 110px;
  }

  .xxcva {
    width: 160px;
  }
  .mtbva-menu-icon {
    font-size: 3rem;
    color: white;
  }
  @media (max-width: 575px) {
    nav {
      height: 100px;
    }

    .mtbva {
      width: 80px;
    }

    .xxcva {
      width: 130px;
    }

    .mtbva-menu-icon {
      font-size: 2rem;
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
      width: 70px;
    }

    .mtbva-menu-icon {
      font-size: 1.5rem;
    }
  }
</style>
