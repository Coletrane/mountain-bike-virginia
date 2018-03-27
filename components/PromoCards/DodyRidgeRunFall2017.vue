<template>
  <post-card :post="$store.getters.getPost(dodyRidgeRunFall2017)"
             no-author>
    <div slot="media">
      <youtube :src="$store.getters.getPost(dodyRidgeRunFall2017).ytSrc"/>
    </div>
  </post-card>
</template>

<script>
  import PostCard from '../Card/PostCard'
  import Youtube from '../Iframes/Youtube'

  import {dodyRidgeRunFall2017} from '../../scripts/routes'

  export default {
    name: 'dody-ridge-run-fall-2017-promo',
    components: {
      PostCard,
      Youtube
    },
    data() {
      return {
        dodyRidgeRunFall2017: dodyRidgeRunFall2017
      }
    }
  }
</script>
