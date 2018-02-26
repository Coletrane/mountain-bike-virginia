<template>
  <home>
    <div slot="first">
      <rockstar-va2018-home/>
      <middle-mt-momma2018-home/>
    </div>
  </home>
</template>

<script>
  import {posts} from "../assets/posts"
  import {headTags} from "../assets/functions"
  import {home} from "../assets/head-tags"
  import Home from "../components/Home/Home"
  import MiddleMtMomma2018Home from '../components/Home/MiddleMtMomma2018Home'
  import RockstarVa2018Home from '../components/Home/RockstarVa2018Home'

  export default {
    name: 'rockstar-va-2018',
    components: {
      Home,
      MiddleMtMomma2018Home,
      RockstarVa2018Home
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
