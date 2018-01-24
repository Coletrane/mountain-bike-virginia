<template>
  <div class="mtbva-footer">
    <div class="sponsors-container">
      <div v-for="group in sponsorGroups">
        <div class="sponsor-grid">
          <div v-for="sponsor in group"
               :class="group.length === 3 ? 'sponsor-grid-three' : 'sponsor-grid-two'">
            <a :href="sponsor.url">
              <img :src="sponsor.img"
                   :class="sponsor.class"
                   class="sponsor"/>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div>
        © 2017 Virginia Championship Commission, Inc.
      </div>
      <div>
        Developed by Cole Inman.
      </div>
      <div>
        <a class="icon" href="https://github.com/coletrane">
          <img :src="img + 'github.svg'"
               class="github">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import routes from "../routes"
  import {makeTwoDimensional} from "../assets/functions"

  const img = routes.s3 + "/static/img/"

  export default {
    computed: {
      sponsorGroups() {
        return makeTwoDimensional(3, this.sponsors)
      }
    },
    data() {
      return {
        img: img,
        sponsors: [
          {
            img: img + "va-blueridge.png",
            class: "blueridge",
            url: "https://www.visitroanokeva.com/region/blue-ridge-mountains/"
          },
          {
            img: img + "parkway.png",
            class: "parkway",
            url: "http://parkwaybrewing.com/"
          },
          {
            img: img + "starlight.gif",
            class: "starlight",
            url: "https://www.starlightapparel.com/"
          },
          {
            img: img + "sbc.gif",
            class: "sbc",
            url: "http://www.shenandoahbicycle.com/"
          },
          {
            img: img + "jtrg.jpg",
            class: "jtrig",
            url: "http://justtherightgear.com/"
          },
          {
            img: img + "east-coasters.jpg",
            class: "east-coasters",
            url: "https://eastcoasters.com/"
          },
          {
            img: img + "alleghany.jpg",
            class: "alleghany",
            url: "http://www.visitalleghanyhighlands.com/main/index.php"
          },
          {
            img: img + "blackwater.jpg",
            class: "blackwater",
            url: "http://www.blackwaterbikeshop.com/"
          },
          {
            img: img + "outdoortrails.jpg",
            class: "outdoor-trails",
            url: "http://www.outdoortrails.com/"
          },
          {
            img: img + "woods.png",
            class: "woods",
            url: "http://woodsac.com/"
          }, {
            img: img + "bath.jpg",
            class: "bath",
            url: "http://discoverbath.com/"
          },
          {
            img: img + "tavern.gif",
            class: "tavern",
            url: "http://jackmasonstavern.com/"
          }
        ]
      }
    }
  }
</script>
<style>
  .mtbva-footer {
    padding-top: 4rem;
    background-image: linear-gradient(rgba(0, 0, 0, 0.49), rgba(0, 0, 0, 0.69)), url('http://d2i660bt0ywr9a.cloudfront.net/static/img/blue_ridge_mountains.jpg');
    background-position-x: center;
    background-position-y: top;
    background-repeat: repeat-y;
  }

  .sponsors-container {
    background-color: white;
    margin: auto;
    opacity: .9;
  }

  @media screen and (max-width: 99999px) {
    .sponsors-container {
      width: 75%;
    }
  }

  @media screen and (max-width: 1000px) {
    .sponsors-container {
      width: 85%;
    }
  }

  .sponsor-grid {
    display: grid;
  }

  .sponsor {
    width: 90%;
  }

  .sponsor-grid-two {
    grid-template-columns: 50% 50%
  }

  .sponsor-grid-three {
    grid-template-columns: 33.3% 33.3% 33.3%;
  }

  .parkway {
    margin-top: 1rem;
  }

  .blueridge {
    margin-top: 2rem;
    margin-left: 1rem;
  }

  .starlight {
    margin-top: 2rem;
  }

  .jtrig {
    padding-left: 1rem;
    margin-top: 2rem;
  }

  .sbc {
    margin-top: .7rem;
  }

  .woods {
    margin-left: 1rem;
    margin-top: 2rem;
  }

  .outdoor-trails {
    margin-top: 1.5rem;
  }

  .copyright {
    padding-top: 4rem;
    text-align: center;
    color: white;
  }

  .github {
    width: 2rem;
    padding-bottom: 1rem;
  }
</style>
