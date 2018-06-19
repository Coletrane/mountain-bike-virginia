<template>
  <div class="abstract-page">
    <div v-if="pageLoaded">
      <div v-for="(postRoute, i) of $store.state.routes.pages[page]">
        <transition name="new-page-fade">
          <component v-if="getPostComponent(postRoute) &&
                           getPostComponent(postRoute) !== '404'"
                     :is="getPostComponent(postRoute)"/>
        </transition>
        <banner v-if="(i + 1) % 3 === 0"/>
        <div v-if="!getPostComponent(postRoute) &&
                    getPostComponent(postRoute) !== '404'"
             class="post-card-placeholder">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Banner from './Das/Banner'

  import postComponentLoader from '../assets/mixins/post-component-loader'

  export default {
    name: 'abstract-page',
    props: {
      page: {
        type: Number,
        required: true
      }
    },
    components: {
      Banner
    },
    mixins: [
      postComponentLoader
    ],
    computed: {
      pageLoaded() {
        return this.$store.getters.getPosts(
          this.$store.state.routes.pages[this.page]).length ===
               this.$store.state.routes.pages[this.page].length
      }
    }
  }
</script>
<style>
  .post-card-placeholder {
    width: 100%;
    height: 500px;
  }

  .new-page-fade-enter-to {
    transition: opacity 1s;
  }

  .new-page-fade-enter {
    opacity: 0;
  }
</style>