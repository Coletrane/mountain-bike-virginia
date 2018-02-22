<template>
  <home>
    <div slot="first">
      <middle-mt-momma-2018-home/>
      <rockstar-va-2018-home/>
    </div>
  </home>
</template>

<script>
  import {posts} from "../assets/posts"
  import {headTags} from "../assets/functions"
  import {home} from "../assets/head-tags"
  import Home from "../components/Home/Home"
  import MiddleMtMomma2018 from '../components/Home/MiddleMtMomma2018'
  import RockstarVa2018 from '../components/Home/RockstarVa2018'

  export default {
    name: 'middle-mt-momma-2018',
    components: {
      RockstarVa2018,
      Home,
      MiddleMtMomma2018
    },
    head() {
      return headTags(
        home.title,
        home.description,
        home.keywords,
        posts.middleMtMomma2018
      )
    }
  }
</script>
