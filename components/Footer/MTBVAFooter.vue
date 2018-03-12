<template>
  <div class="mtbva-footer">
    <div class="sponsors-container">
      <logos-three-cols v-if="mobile"
                        :sponsors="sponsors"/>
      <logos-four-cols v-else
                       :sponsors="sponsors"/>
    </div>
    <div class="copyright">
      <div>
        © 2017 Virginia Championship Commission, Inc.
      </div>
      <div>
        Developed by Cole Inman.
      </div>
      <div>
        <a class="github" href="https://github.com/coletrane">
          <font-awesome-icon :icon="faGithub"/>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import {s3StaticImg} from "../../scripts/routes"
  import LogosFourCols from './LogosFourCols'
  import LogosThreeCols from "./LogosTwoCols"
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

  export default {
    name: 'mtbva-footer',
    components: {
      LogosThreeCols,
      LogosFourCols,
      FontAwesomeIcon
    },
    data() {
      return {
        img: s3StaticImg,
        faGithub: faGithub,
        sponsors: [
          {
            img: `${s3StaticImg}/va-blueridge.jpg`,
            class: "blueridge",
            url: "https://www.visitroanokeva.com/region/blue-ridge-mountains/"
          },
          {
            img: `${s3StaticImg}/parkway.png`,
            class: "parkway",
            url: "http://parkwaybrewing.com/"
          },
          {
            img: `${s3StaticImg}/starlight.png`,
            class: "starlight",
            url: "https://www.starlightapparel.com/"
          },
          {
            img: `${s3StaticImg}/deschutes.png`,
            class: 'deschutes',
            url: 'https://www.deschutesbrewery.com/'
          },
          {
            img: `${s3StaticImg}/sbc.png`,
            class: "sbc",
            url: "http://www.shenandoahbicycle.com/"
          },
          {
            img: `${s3StaticImg}/jtrg.jpg`,
            class: "jtrg",
            url: "http://justtherightgear.com/"
          },
          {
            img: `${s3StaticImg}/east-coasters.jpg`,
            class: "east-coasters",
            url: "https://eastcoasters.com/"
          },
          {
            img: `${s3StaticImg}/alleghany.jpg`,
            class: "alleghany",
            url: "http://www.visitalleghanyhighlands.com/main/index.php"
          },
          {
            img: `${s3StaticImg}/blackwater.jpg`,
            class: "blackwater",
            url: "http://www.blackwaterbikeshop.com/"
          },
          // {
          //   img: `${s3StaticImg}/outdoortrails.jpg`,
          //   class: "outdoor-trails",
          //   url: "http://www.outdoortrails.com/"
          // },
          {
            img: `${s3StaticImg}/bath.jpg`,
            class: "bath",
            url: "http://discoverbath.com/"
          },
          {
            img: `${s3StaticImg}/woods.png`,
            class: "woods",
            url: "http://woodsac.com/"
          },
          {
            img: `${s3StaticImg}/tavern.png`,
            class: "tavern",
            url: "http://jackmasonstavern.com/"
          }
        ],
        mobile: true,
        width: 0
      }
    },
    created() {
      if (process.browser) {
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', this.handleResize)
        this.handleResize()
      }
    },
    destroyed() {
      if (process.browser) {
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.handleResize)
      }
    },
    methods: {
      handleScroll() {
        let scrolled = window.pageYOffset
        let offsetOffset = 1000 // lol
        let offset = this.$el.offsetTop - offsetOffset
        let limit = this.$el.offsetTop + this.$el.offsetHeight
        let backgroundPos
        if (scrolled > offset && scrolled <= limit) {
          backgroundPos = `${(scrolled - offset) / -3}px`;
        } else {
          backgroundPos = `0px`
        }
        window.requestAnimationFrame(() => {
          this.$el.style.backgroundPositionY = backgroundPos
        })
      },
      handleResize() {
        this.width = document.body.clientWidth
      }
    },
    watch: {
      width() {
        this.mobile = document.body.clientWidth <= 850
      }
    }
  }
</script>
<style>
  .mtbva-footer {
    padding-top: 4rem;
    background-image: linear-gradient(rgba(0, 0, 0, 0.49), rgba(0, 0, 0, 0.69)), url('http://d2i660bt0ywr9a.cloudfront.net/static/img/blue_ridge_mountains.jpg');
    background-size: 3000px;
    background-position-x: center;
    background-position-y: 0px;
  }

  @media (max-width: 700px) {
    .mtbva-footer {
      /*pixel pushing lol*/
      background-size: 2795px;
    }
  }

  .sponsors-container {
    background-color: white;
    margin: auto;
    opacity: .75;
    padding: .5rem;
    text-align: center;
  }

  .sponsors-container {
    margin-left: 4rem;
    margin-right: 4rem;
  }

  @media (min-width: 1200px) {
    .sponsors-container {
      margin-left: 8rem;
      margin-right: 8rem;
    }
  }

  @media (max-width: 575px) {
    .sponsors-container {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }

  .copyright {
    padding-top: 2rem;
    padding-bottom: 1rem;
    text-align: center;
    color: white;
  }

  .github {
    color: white;
    font-size: 2rem;
  }
  .github:hover {
    color: white;
  }
</style>
