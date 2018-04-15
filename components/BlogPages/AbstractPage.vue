<template>
  <div class="abstract-page">
    <div v-for="postRoute of $store.state.posts.pages[page]">

      <transition name="new-page-fade">
        <component v-if="getPostComponent(postRoute)"
                   :is="getPostComponent(postRoute)"/>
      </transition>

      <div v-if="!getPostComponent(postRoute)"
           class="post-card-placeholder">
      </div>

    </div>
  </div>
</template>

<script>
  import postComponentLoader from '../../assets/mixins/post-component-loader'

  export default {
    name: 'abstract-page',
    props: {
      page: {
        type: Number,
        required: true
      }
    },
    mixins: [
      postComponentLoader
    ]
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