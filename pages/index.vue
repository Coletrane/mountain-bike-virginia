<template>
  <home>
    <div slot="first">
      <middle-mt-momma-2018-home/>
      <rockstar-va-2018-home/>
    </div>
  </home>
</template>
<script>
  import Home from '../components/Home/Home'
  import {home} from "../assets/head-tags";
  import {headTags} from "../assets/functions"
  import MiddleMtMomma2018 from '../components/Home/MiddleMtMomma2018'
  import RockstarVa2018 from '../components/Home/RockstarVa2018'

  export default {
    name: 'index',
    components: {
      Home,
      MiddleMtMomma2018,
      RockstarVa2018
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
