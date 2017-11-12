<template>
  <div class="post-card">
    <div class="post card card--hover">
      <div v-on:click="goToRoute()"
           :class="isLink ? 'link' : ''">
        <div class="card__text">
          <slot name="top"></slot>
        </div>

        <slot name="middle"></slot>

        <div>
          <slot name="bottom"></slot>
        </div>

        <social-actions v-if="post"
                        :post="post">
        </social-actions>
      </div>
    </div>
  </div>
</template>

<script>
  import SocialActions from './SocialActions.vue'

  export default {
    name: 'post-card',
    props: {
      post: {
        default: null
      },
      isLink: {
        default: false
      }
    },
    components: {
      SocialActions
    },
    methods: {
      goToRoute() {
        if ( this.isLink
          && this.post) {
          if (this.post.route) {
            this.$router.push(this.post.route)
          } else {
            this.$router.push('/')
          }
        }
      }
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
  }
  .link {
    cursor: pointer
  }
</style>

<style>
  .post-card {
    margin: 0 !important;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
</style>
