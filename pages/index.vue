<template>
  <home>
    <div slot="first">
      <middle-mt-momma2018-home/>
      <rockstar-va2018-home/>
    </div>
  </home>
</template>
<script>
  import Home from '../components/Home/Home'
  import {home} from "../assets/head-tags";
  import {headTags} from "../assets/functions"
  import MiddleMtMomma2018Home from '../components/Home/MiddleMtMomma2018Home'
  import RockstarVa2018Home from '../components/Home/RockstarVa2018Home'

  export default {
    name: 'index',
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
        // Dummy "post" to simulate the base url
        // empty string because headTags adds in a slash
        {
          route: ''
        }
      )
    }
  }
</script>
