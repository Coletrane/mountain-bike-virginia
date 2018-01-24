<template>
  <nav :style="navStyle">
    <span class="flex-outer">
      <nuxt-link to="/"
                 key="mtbva">
        <img class="mtbva" :src="img + 'mtbva.png'">
      </nuxt-link>
    </span>
    <span class="flex-inner inner-left">
      <nuxt-link to="/"
                 key="xxcva">
        <img class="xxcva" :src="img + 'XXCVA.jpg'" alt="XXCVA">
      </nuxt-link>
    </span>
    <span class="flex-inner inner-right">
      <nuxt-link to="/results"
                 class="nav-text">
        Results
      </nuxt-link>
    </span>
    <span class="flex-outer">
      <a class="nav-link"
         href="https://www.facebook.com/xxcva/">
        <img :src="img + 'fb.svg'"
             class="fb"/>
      </a>
    </span>
  </nav>
</template>
<script>
  import {boxShadow, mediaQuery, sizes} from "../assets/styles"
  import {s3, s3StaticImg} from "../routes"

  export default {
    name: "navigation",
    data: function () {
      return {
        img: `${s3}${s3StaticImg}`,
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

  @media (max-width: 99999px) {
    nav {
      height: 150px;
    }
    .mtbva {
      width: 130px;
    }
    .xxcva {
      width: 170px;
    }
    .nav-text {
      font-size: 1.5rem;
    }
    .fb {
      width: 2.5rem;
    }
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
      height: 80px;
    }
    .mtbva {
      width: 65px;
    }
    .xxcva {
      width: 85px;
    }
    .nav-text {
      font-size: 1.2rem;
    }
    .flex-outer {
      padding-left: 1rem;
    }
  }

  .nav-text {
    text-decoration: none;
    color: white;
  }



</style>
