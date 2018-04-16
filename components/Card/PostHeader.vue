<template>
  <div>
    <nuxt-link :to="{name: post.route}">

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
