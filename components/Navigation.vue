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
    <span class="flex-inner inner-right">
      <nuxt-link to="/results"
                 class="nav-text"
                 id="results-link">
        Results
      </nuxt-link>
    </span>
    <span class="flex-outer">
      <a class="nav-link"
         id="facebook-nav-link"
         href="https://www.facebook.com/xxcva/">
        <img :src="img + 'fb.svg'"
             class="fb"
             id="fb-navlink-icon"/>
      </a>
    </span>
  </nav>
</template>
<script>
  import {boxShadow} from "../assets/styles"
  import {s3StaticImg} from "../scripts/routes"

  export default {
    name: "navigation",
    data: function () {
      return {
        img: `${s3StaticImg}`,
        navStyle: {
          boxShadow: boxShadow
        }
      }
    }
  }
</script>
<style scoped id="mobile">

  </style>
<style scoped>
  nav {
    background-color: rgba(0,0,0, 0.6);
    position: fixed;
    top: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
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

    nav {
      height: 120px;
    }
    .mtbva {
      width: 110px;
    }
    .xxcva {
      width: 160px;
    }
    .nav-text {
      font-size: 1.5rem;
    }
    .fb {
      width: 2.5rem;
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
    .fb {
      width: 2rem;
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
    .nav-text {
      font-size: 1.2rem;
    }
  }

  .nav-text {
    text-decoration: none;
    color: white;
  }



</style>
