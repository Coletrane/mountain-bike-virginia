<template>
  <home/>
</template>

<script>
  import {posts} from "../assets/posts"
  import {headTags} from "../assets/functions";
  import {title, description, keywords} from "../assets/index-head-tags";
  import Home from "../components/Home";

  export default {
    name: 'middle-mt-momma-2018',
    components: {
      Home
    },
    head() {
      return headTags(
        title,
        description,
        keywords,
        posts.middleMtMomma2018
      )
    }
  }
</script>
