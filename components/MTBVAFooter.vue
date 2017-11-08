<template>
  <div class="mtbva-footer">
    <div class="sponsors-container">
      <v-layout row wrap>
        <v-flex xs4 v-for="sponsor in sponsors">
              <a :href="sponsor.url">
              <img :src="sponsor.img"
                   :class="sponsor.class"
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
          <img :src="img + 'github.svg'"
               class="github">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import routes from '../routes'

  const img = routes.s3Root + '/static/img/'

  export default {
    data() {
      return {
        img: img,
        sponsors: [
          {
            img: img + 'va-blueridge.png',
            class: 'blueridge',
            url: '',
          },
          {
            img: img + 'parkway.png',
            class: 'parkway',
            url: '',
          },
          {
            img: img + 'starlight.gif',
            class: 'starlight',
            url: '',
          },
          {
            img: img + 'sbc.gif',
            class: 'sbc',
            url: '',
          },
          {
            img: img + 'jtrg.jpg',
            class: 'jtrig',
            url: '',
          },
          {
            img: img + 'east-coasters.jpg',
            class: 'east-coasters',
            url: '',
          },
          {
            img: img + 'alleghany.jpg',
            class: 'alleghany',
            url: '',
          },
          {
            img: img + 'blackwater.jpg',
            class: 'blackwater',
            url: '',
          },
          {
            img: img + 'outdoortrails.jpg',
            class: 'outdoor-trails',
            url: '',
          },
          {
            img: img + 'woods.png',
            class: 'woods',
            url: '',
          },{
            img: img + 'bath.jpg',
            class: 'bath',
            url: '',
          },
          {
            img: img + 'tavern.gif',
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
    background-image: linear-gradient(rgba(0, 0, 0, 0.49), rgba(0, 0, 0, 0.69)), url('https://s3.amazonaws.com/mtbva/static/img/blue_ridge_mountains.jpg') !important;
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
