<template>
  <div>
    <m-t-b-v-a-header :header-height="700"
                      :image="image"/>
      <div class="main-content main-content-mobile">

        <bottom-nav/>
      </div>
  </div>
</template>

<script>
  import BottomNav from './BottomNav'
  import MTBVAHeader from '../Header/MTBVAHeader'

  import {s3StaticImg} from '../../scripts/routes'

  export default {
    name: 'trail-area',
    components: {
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

</style>