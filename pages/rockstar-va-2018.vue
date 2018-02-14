<template>
  <home/>
</template>

<script>
  import {posts} from "../assets/posts"
  import {headTags} from "../assets/functions";
  import {home} from "../assets/head-tags";
  import Home from "../components/Home";

  export default {
    name: 'rockstar-va-2018',
    components: {
      Home
    },
    head() {
      return headTags(
        home.title,
        home.description,
        home.keywords,
        posts.rockstarVa2018
      )
    }
  }
</script>
