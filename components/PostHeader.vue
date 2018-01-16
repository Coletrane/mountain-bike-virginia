<template>
  <div>
    <nuxt-link :to="post.route">
      <h2>{{post.title}}</h2>
      <h3>{{post.subtitle}}</h3>
    </nuxt-link>
  </div>
</template>
<script>
  export default {
    name: "post-header",
    props: ["post"]
  }
</script>
<style scoped>
  a {
    color: black;
    text-decoration: none;
  }
</style>
