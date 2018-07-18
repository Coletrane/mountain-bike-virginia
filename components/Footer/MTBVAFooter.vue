<template>
  <div class="mtbva-footer"
       :style="backgroundImage">
    <div class="sponsors-container">
      <div v-for="sponsor of sponsors"
           class="sponsor">
        <sponsor :sponsor="sponsor"/>
      </div>
    </div>
    <div v-if="copyright"
         class="copyright">
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
import Sponsor from "./Sponsor"
import FontAwesomeIcon from "@fortawesome/vue-fontawesome"
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub"

import { s3Sponsors, s3StaticImg } from "../../scripts/routes"
import { noExtension, justExtension } from "../../assets/functions"

export default {
  name: "mtbva-footer",
  components: {
    Sponsor,
    FontAwesomeIcon
  },
  props: {
    copyright: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      faGithub: faGithub,
      sponsors: [
        {
          img: `${s3Sponsors}/va-blueridge.png`,
          class: "blueridge",
          url: "https://www.visitroanokeva.com/region/blue-ridge-mountains/"
        },
        {
          img: `${s3Sponsors}/parkway.png`,
          class: "parkway",
          url: "http://parkwaybrewing.com/"
        },
        {
          img: `${s3Sponsors}/starlight.png`,
          class: "starlight",
          url: "https://www.starlightapparel.com/"
        },
        {
          img: `${s3Sponsors}/roanoke-outside.png`,
          class: "roanoke-outside",
          url: "https://www.roanokeoutside.com/"
        },
        {
          img: `${s3Sponsors}/deschutes.png`,
          class: "deschutes",
          url: "https://www.deschutesbrewery.com/"
        },
        {
          img: `${s3Sponsors}/bath.png`,
          class: "bath",
          url: "http://discoverbath.com/"
        },
        {
          img: `${s3Sponsors}/sbc.png`,
          class: "sbc",
          url: "http://www.shenandoahbicycle.com/"
        },
        {
          img: `${s3Sponsors}/jtrg.png`,
          class: "jtrg",
          url: "http://justtherightgear.com/"
        },
        {
          img: `${s3Sponsors}/east-coasters.png`,
          class: "east-coasters",
          url: "https://eastcoasters.com/"
        },
        {
          img: `${s3Sponsors}/alleghany.png`,
          class: "alleghany",
          url: "http://www.visitalleghanyhighlands.com/main/index.php"
        },
        {
          img: `${s3Sponsors}/blackwater.png`,
          class: "blackwater",
          url: "http://www.blackwaterbikeshop.com/"
        },
        // {
        //   img: `${s3Sponsors}/outdoortrails.jpg`,
        //   class: "outdoor-trails",
        //   url: "http://www.outdoortrails.com/"
        // },
        {
          img: `${s3Sponsors}/woods.png`,
          class: "woods",
          url: "http://woodsac.com/"
        },
        {
          img: `${s3Sponsors}/tavern.png`,
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
      window.addEventListener("scroll", this.handleScroll)
      window.addEventListener("resize", this.handleResize)
      this.handleResize()
      // Set the mobile images once instead of on resize
      // this is how the other pages do it
      if (document.body.clientWidth <= 425) {
        this.sponsors.forEach(sponsor => {
          const filename = noExtension(sponsor.img)
          const extension = justExtension(sponsor.img)
          sponsor.img = `${filename}-150px${extension}`
        })
      }
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener("scroll", this.handleScroll)
      window.removeEventListener("resize", this.handleResize)
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
        backgroundPos = `${(scrolled - offset) / -3}px`
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
      if (process.browser) {
        this.mobile = document.body.clientWidth <= 850
      }
    }
  },
  computed: {
    backgroundImage() {
      return {
        backgroundImage: `url("${s3StaticImg}/blue_ridge_mountains.jpg")`
      }
    }
  }
}
</script>
<style>
.mtbva-footer {
  padding-top: 4rem;
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
  padding: 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: stretch;
}

.sponsor {
  flex: 1 1 auto;
  padding: .25rem;
}
.sponsor, .sponsor img {
  width: 13rem;

}
img.deschutes {
  width: 12rem;
}
@media (max-width: 500px) {
  .sponsor, .sponsor img {
    width: 10rem;
  }
  img.deschutes {
    width: 9rem;
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
