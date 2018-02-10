<template>
  <div id="sponsor-logos">
    <div v-for="group in sponsorGroups"
         class="row">
      <div v-for="sponsor in group"
           class="col-4"
           :class="sponsor.class + '-container-3'">
        <sponsor :sponsor="sponsor"
                 :columns="3"/>
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
        let groups = []
        this.sponsors.forEach((elem, i, arr) => {
          if (i % 3 === 0) {
            groups.push([
              this.sponsors[i],
              this.sponsors[i + 1],
              this.sponsors[i + 2],
            ])
          }
        })

        return groups
      }
    }
  }
</script>

<style>
  .parkway-img-3 {
    padding-top: .5rem;
  }

  .starlight-container-3 {
    padding-left: 0;
    padding-right: 30px;
  }
  .starlight-img-3 {
    padding-top: 1.5rem;
    width: 110% !important;
  }

  .sbc-img-3 {
    padding-top: 1rem;
  }

  .jtrg-img-3 {
    padding-top: 1.5rem;
  }

  .outdoor-trails-img-3 {
    padding-top: 1rem;
  }

  .bath-img-3 {
    width: 75% !important;
  }

  .woods-img-3 {
    padding-top: 1.5rem;
    width: 100% !important;
  }

  .tavern-img-3 {
    width: 70% !important;
  }

</style>
