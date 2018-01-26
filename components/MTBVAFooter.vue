<template>
  <div class="mtbva-footer">
    <div class="sponsors-container">
      <div v-for="group in sponsorGroups"
           class="row">
          <div v-for="sponsor in group"
               class="col-6">
            <a :href="sponsor.url">
              <img :src="sponsor.img"
                   :class="sponsor.class"
                   class="sponsor"/>
            </a>
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
  import {s3StaticImg} from "../routes"
  import {makeTwoDimensional} from "../assets/functions"
  
  export default {
    computed: {
      sponsorGroups() {
        return makeTwoDimensional(this.sponsors)
      }
    },
    data() {
      return {
        img: s3StaticImg,
        sponsors: [
          {
            img: `${s3StaticImg}jtrg.jpg`,
            class: "jtrig",
            url: "http://justtherightgear.com/"
          },
          {
            img: `${s3StaticImg}parkway.png`,
            class: "parkway",
            url: "http://parkwaybrewing.com/"
          },
          {
            img: `${s3StaticImg}va-blueridge.png`,
            class: "blueridge",
            url: "https://www.visitroanokeva.com/region/blue-ridge-mountains/"
          },
          {
            img: `${s3StaticImg}starlight.gif`,
            class: "starlight",
            url: "https://www.starlightapparel.com/"
          },
          {
            img: `${s3StaticImg}sbc.gif`,
            class: "sbc",
            url: "http://www.shenandoahbicycle.com/"
          },
          {
            img: `${s3StaticImg}east-coasters.jpg`,
            class: "east-coasters",
            url: "https://eastcoasters.com/"
          },
          {
            img: `${s3StaticImg}alleghany.jpg`,
            class: "alleghany",
            url: "http://www.visitalleghanyhighlands.com/main/index.php"
          },
          {
            img: `${s3StaticImg}blackwater.jpg`,
            class: "blackwater",
            url: "http://www.blackwaterbikeshop.com/"
          },
          {
            img: `${s3StaticImg}outdoortrails.jpg`,
            class: "outdoor-trails",
            url: "http://www.outdoortrails.com/"
          },
          {
            img: `${s3StaticImg}woods.png`,
            class: "woods",
            url: "http://woodsac.com/"
          }, {
            img: `${s3StaticImg}bath.jpg`,
            class: "bath",
            url: "http://discoverbath.com/"
          },
          {
            img: `${s3StaticImg}tavern.gif`,
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
    background-repeat: repeat;
  }

  .sponsors-container {
    background-color: white;
    margin: auto;
    opacity: .85;
    padding: .5rem;
    text-align: center;
  }

  @media screen and (max-width: 99999px) {
    .sponsors-container {
      width: 65%;
    }
  }

  @media screen and (max-width: 992px) {
    .sponsors-container {
      width: 90%;
    }
  }

  .sponsor {
    width: 90%;
  }

  .parkway {
    margin-top: 2.7rem;
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
    margin-top: 1rem;
  }

  .woods {
    margin-left: 1rem;
    margin-top: 2rem;
  }

  .bath {
    margin-left: 1rem;
  }

  .tavern {
    margin-left: 1rem;
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
