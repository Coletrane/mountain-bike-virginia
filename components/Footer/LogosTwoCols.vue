<template>
  <div id="sponsor-logos">
    <div v-for="group in sponsorGroups"
         class="row">
      <div v-for="sponsor in group"
           class="col-6"
           :class="sponsor.class + '-container-2'">
        <sponsor :sponsor="sponsor"
                 :columns="2"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Sponsor from './Sponsor'

  export default {
    name: 'logos-three-cols',
    components: {
      Sponsor
    },
    props: {
      sponsors: {
        type: Array,
        required: true
      }
    },
    computed: {
      sponsorGroups() {

        // Re arrange the order of the sponsors
        let starlightIndex = this.sponsors.findIndex(sponsor => sponsor.class === 'starlight')
        let jtrgIndex = this.sponsors.findIndex(sponsor => sponsor.class === 'jtrg')
        let temp = this.sponsors[jtrgIndex]
        this.sponsors[jtrgIndex] = this.sponsors[starlightIndex]
        this.sponsors[starlightIndex] = temp

        starlightIndex = this.sponsors.findIndex(sponsor => sponsor.class === 'starlight')
        let bathIndex = this.sponsors.findIndex(sponsor => sponsor.class === 'bath')
        temp = this.sponsors[bathIndex]
        this.sponsors[bathIndex] = this.sponsors[starlightIndex]
        this.sponsors[starlightIndex] = temp

        let blackwaterIndex = this.sponsors.findIndex(sponsor => sponsor.class === 'blackwater')
        let woodsIndex = this.sponsors.findIndex(sponsor => sponsor.class === 'woods')
        temp = this.sponsors[woodsIndex]
        this.sponsors[woodsIndex] = this.sponsors[blackwaterIndex]
        this.sponsors[blackwaterIndex] = temp

        let eastCoastersIndex = this.sponsors.findIndex(sponsor => sponsor.class === 'east-coasters')
        bathIndex = this.sponsors.findIndex(sponsor => sponsor.class === 'bath')
        temp = this.sponsors[bathIndex]
        this.sponsors[bathIndex] = this.sponsors[eastCoastersIndex]
        this.sponsors[eastCoastersIndex] = temp

        let groups = []
        this.sponsors.forEach((elem, i, arr) => {
          if (i % 2 === 0) {
            groups.push([
              this.sponsors[i],
              this.sponsors[i + 1]
            ])
          }
        })


        return groups
      }
    }
  }
</script>

<style>
  .blueridge-img-2 {
    width: 110% !important;
  }

  .parkway-img-2 {
    margin-top: 1rem;
    margin-left: .5rem;
    width: 100% !important;
  }


  .starlight-img-2 {
    margin-top: 1.5rem;
    width: 110% !important;
  }

  .deschutes-img-2 {
    width: 85% !important;
    margin-top: 1rem;
  }

  .sbc-img-2 {
    margin-top: 1rem;
  }

  .jtrg-img-2 {
    margin-top: 1.5rem;
  }

  .outdoor-trails-img-2 {
    margin-top: 1rem;
  }

  .bath-img-2 {
    width: 75% !important;
    margin-top: 1.5rem;
  }

  .alleghany-img-2 {
    margin-top: 2rem;
  }

  .woods-img-2 {
    margin-top: 1.5rem;
    width: 100% !important;
  }

  .blackwater-img-2 {
    margin-top: 1.5rem;
  }

  .tavern-img-2 {
    margin-top: 1rem;
    width: 70% !important;
  }

  .east-coasters-img-2 {
    margin-top: 1rem;
    width: 100% !important;
  }

</style>
