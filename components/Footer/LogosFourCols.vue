<template>
  <div id="sponsor-logos">
    <div v-for="group in sponsorGroups"
         class="row">
      <div v-for="sponsor in group"
           class="col-3 "
           :class="sponsor.class + '-container-4'">
        <sponsor :sponsor="sponsor"
                 :columns="4"/>
      </div>
    </div>
  </div>
</template>

<script>
import Sponsor from "./Sponsor"

export default {
  name: "logos-four-cols",
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
        if (i % 4 === 0) {
          groups.push([
            this.sponsors[i],
            this.sponsors[i + 1],
            this.sponsors[i + 2],
            this.sponsors[i + 3]
          ])
        }
      })

      return groups
    }
  }
}
</script>

<style>
.blueridge-img-4 {
  width: 105% !important;
  margin-top: 0.8rem;
}

.parkway-img-4 {
  padding-top: 1rem;
  width: 100% !important;
}

.deschutes-img-4 {
  padding-top: 1rem;
  width: 80% !important;
}

.sbc-img-4 {
  width: 85% !important;
  margin-top: 1.4rem;
}

.jtrg-img-4 {
  margin-top: 1rem;
}

.alleghany-img-4 {
  margin-top: 1rem;
}

.blackwater-img-4 {
  margin-top: 0.5rem;
}

.starlight-container-4 {
  padding-left: 0;
}
.starlight-img-4 {
  margin-top: 1.3rem;
  width: 100% !important;
}

.bath-img-4 {
  width: 70% !important;
}

.woods-img-4 {
  margin-top: 2rem;
}

.tavern-img-4 {
  width: 65% !important;
}
</style>
