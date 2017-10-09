<template>
  <div class="mtbva-footer">
    <div class="sponsors-container">
      <v-layout row wrap>
        <v-flex xs4 v-for="sponsor in sponsors">
              <a v-bind:href="sponsor.url">
              <img v-bind:src="sponsor.img"
                   v-bind:class="sponsor.class"
                          class="sponsor">
                </a>
        </v-flex>
      </v-layout>
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
          <img src="../../static/img/github.svg"
               class="github">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import Blueridge from '../../static/img/va-blueridge.png'
  import Starlight from '../../static/img/starlight.gif'
  import Alleghany from '../../static/img/alleghany.jpg'
  import Blackwater from '../../static/img/blackwater.jpg'
  import JTRIG from '../../static/img/jtrg.jpg'
  import Parkway from '../../static/img/parkway.png'
  import OutdoorTrails from '../../static/img/outdoortrails.jpg'
  import Woods from '../../static/img/woods.png'
  import Bath from '../../static/img/bath.jpg'
  import SBC from '../../static/img/sbc.gif'
  import EastCoasters from '../../static/img/east-coasters.jpg'
  import Tavern from '../../static/img/tavern.gif'


  export default {
    data() {
      return {
        sponsors: [
          {
            img: Blueridge,
            class: 'blueridge',
            url: '',
          },
          {
            img: Parkway,
            class: 'parkway',
            url: '',
          },
          {
            img: Starlight,
            class: 'starlight',
            url: '',
          },
          {
            img: SBC,
            class: 'sbc',
            url: '',
          },
          {
            img: JTRIG,
            class: 'jtrig',
            url: '',
          },
          {
            img: EastCoasters,
            class: 'east-coasters',
            url: '',
          },
          {
            img: Alleghany,
            class: 'alleghany',
            url: '',
          },
          {
            img: Blackwater,
            class: 'blackwater',
            url: '',
          },
          {
            img: OutdoorTrails,
            class: 'outdoor-trails',
            url: '',
          },
          {
            img: Woods,
            class: 'woods',
            url: '',
          },{
            img: Bath,
            class: 'bath',
            url: '',
          },
          {
            img: Tavern,
            class: 'tavern',
            url: '',
          },
        ]
      }
    }
  }
</script>

<style>
  .mtbva-footer {
    padding-top: 4rem;
    background-image: linear-gradient(rgba(0, 0, 0, 0.49), rgba(0, 0, 0, 0.69)), url('../../static/img/blue_ridge_mountains.jpg') !important;
    background-position-x: center !important;
    background-position-y: top !important;
    background-repeat: no-repeat !important;
    background-color: rgb(0, 15, 24) !important;
  }

  .sponsors-container {
    background-color: white;
    display: block;
    width: 70%;
    margin: auto;
  }

  .sponsor {
    width: 90%;
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