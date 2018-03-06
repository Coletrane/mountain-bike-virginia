<template>
  <div>
    <m-t-b-v-a-header :header-height="700"
                      :image="image"
                      :title="trailArea.mapMarker.title"/>
    <div class="main-content main-content-mobile trail-area-content">

      <card id="parking">
        <div slot="content">
          <h2>Parking</h2>
          <h5>For the less fortunate of us who can't ride to the trailhead.</h5>
          <div class="section-details">
            <slot name="parking"/>
          </div>
        </div>
      </card>

      <card id="trails">
        <div slot="content">
          <h2>Trails</h2>
          <h5>Sustainability, guaranteed.</h5>
          <div class="section-details">
            <slot name="trails"/>
          </div>
        </div>
      </card>

      <card id="beer">
        <div slot="content">
          <h2>Beer</h2>
          <h5>The reason we even do this.</h5>
          <div class="section-details">
            <slot name="beer"/>
          </div>
        </div>
      </card>

      <bottom-nav/>
    </div>
  </div>
</template>

<script>
  import BottomNav from './BottomNav'
  import MTBVAHeader from '../Header/MTBVAHeader'
  import Card from '../Card/Card'

  import {s3StaticImg} from '../../scripts/routes'

  export default {
    name: 'trail-area',
    components: {
      Card,
      MTBVAHeader,
      BottomNav
    },
    data() {
      return {
        image: `${s3StaticImg}foliage.jpg`
      }
    },
    props: {
      trailArea: {
        required: true
      }
    }
  }
</script>

<style scoped>
  .trail-area-content {
    text-align: center;
  }

  h2 {
    font-size: 3rem;
    padding-top: 1rem;
  }

  h5 {
    font-size: 1.5rem;
  }

  .section-details {
    padding-top: 2rem;
  }
</style>