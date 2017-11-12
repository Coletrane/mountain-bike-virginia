<template>
  <div>
    <h4>{{post.title}}</h4>
    <h6>{{post.subtitle}}</h6>
  </div>
</template>

<script>

  export default {
    name: 'post-header',
    props: ['post']
  }
</script>
