<template>
  <home/>
</template>
<script>
  import Home from '../components/Home'
  import {home} from "../assets/head-tags";
  import {headTags} from "../assets/functions"

  export default {
    name: 'index',
    components: {
      Home
    },
    head() {
      return headTags(
        home.title,
        home.description,
        home.keywords,
        // Dummy "post" to simulate the base url
        // empty string because headTags adds in a slash
        {
          route: ''
        }
      )
    }
  }
</script>
