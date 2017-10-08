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

    <div>
      <p>
        © 2017 Virginia Championship Commission, Inc.
      </p>
      <p>
        Developed by Cole Inman.
      </p>
      <p>
        <a class="icon" href="https://github.com/coletrane">
          <img src="../resources/img/github.svg"
               class="github">
        </a>
      </p>
    </div>
  </div>
</template>

<script>
  import Blueridge from '../resources/img/va-blueridge.png'
  import Starlight from '../resources/img/starlight.gif'
  import Alleghany from '../resources/img/alleghany.jpg'
  import Blackwater from '../resources/img/blackwater.jpg'
  import JTRIG from '../resources/img/jtrg.jpg'
  import Parkway from '../resources/img/parkway.png'
  import OutdoorTrails from '../resources/img/outdoortrails.JPG'
  import Woods from '../resources/img/woods.png'
  import Bath from '../resources/img/bath.jpg'
  import SBC from '../resources/img/sbc.gif'
  import EastCoasters from '../resources/img/east-coasters.jpg'
  import Tavern from '../resources/img/tavern.gif'


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
            img: JTRIG,
            class: 'jtrig',
            url: '',
          },
          {
            img: SBC,
            class: 'sbc',
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
    background-image: linear-gradient(rgba(0, 0, 0, 0.49), rgba(0, 0, 0, 0.69)), url('../resources/img/blue_ridge_mountains.jpg') !important;
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
  .blueridge {
    margin-top: 2rem;
    margin-left: 1.5rem;
  }
  .starlight {
    margin-top: 1.5rem;
  }
  .jtrig {
    padding-left: 2rem;
  }
  .sbc {
    margin-top: 1rem;
  }

</style>