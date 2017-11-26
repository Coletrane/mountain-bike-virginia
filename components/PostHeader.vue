<template>
  <div>
    <nuxt-link :to="post.route">
      <h4>{{post.title}}</h4>
      <h6>{{post.subtitle}}</h6>
    </nuxt-link>
  </div>
</template>

<script>

  export default {
    name: 'post-header',
    props: ['post']
  }
</script>

<style scoped>
  a {
    color: black;
    text-decoration: none;
  }
</style>
