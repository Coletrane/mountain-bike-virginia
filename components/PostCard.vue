<template>
  <div class="post-card">
    <div class="post card card--hover">
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
</template>
<script>
  import SocialActions from "./SocialActions.vue"

  export default {
    name: "post-card",
    props: ["post"],
    components: {
      SocialActions
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
    padding-top: 2rem;
    padding-bottom: 2rem;
    opacity: 0.95;
  }
</style>
