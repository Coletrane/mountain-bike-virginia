<template>
  <post-card :post="$store.getters.getPost(specMines29Oct17)"
             no-author>
    <div slot="media">
      <image-link :post="$store.getters.getPost(specMines29Oct17)"/>
    </div>
  </post-card>
</template>

<script>
  import PostCard from '../Card/PostCard'
  import ImageLink from '../Images/ImageLink'

  import {specMines29Oct17} from '../../scripts/routes'

  export default {
    name: 'spec-mines-oct-29-2017-promo',
    components: {
      PostCard,
      ImageLink
    },
    data() {
      return {
        specMines29Oct17: specMines29Oct17
      }
    }
  }
</script>
