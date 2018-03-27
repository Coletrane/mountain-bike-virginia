<template>
  <abstract-page :page="1"/>
</template>

<script>
  import AbstractPage from './AbstractPage'

  export default {
    name: 'page-1',
    components: {
      AbstractPage
    }
  }
</script>
