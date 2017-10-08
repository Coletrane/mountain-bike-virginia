<template>
  <div id="creature-2017-results" class="post-container">
    <div class="title race-title">{{race}}</div>
    <img class="results-header" src="../../resources/img/creature-generic.png">
    <div class="columns results-columns">
      <div class="column">
        <div v-for="clazz in firstColumnClasses">
          <div class="subtitle results-subtitle">{{clazz.name}}</div>
          <table class="table is-striped">
            <thead>
            <tr>
              <td>Position</td>
              <td class="name">Name</td>
              <td>Time</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(rider, index) in clazz.riders">
              <td>{{index + 1}}</td>
              <td>{{rider.name}}</td>
              <td>{{rider.time}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="column">
        <div v-for="clazz in secondColumnClasses">
          <div class="subtitle results-subtitle">{{clazz.name}}</div>
          <table class="table is-striped">
            <thead>
            <tr>
              <td>Position</td>
              <td class="name">Name</td>
              <td>Time</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(rider, index) in clazz.riders">
              <td>{{index + 1}}</td>
              <td>{{rider.name}}</td>
              <td>{{rider.time}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'creature-2017-results',
    created() {
      this.firstColumnClasses = [this.results.classes[0], this.results.classes[4]]
      this.secondColumnClasses = this.results.classes.slice(1, 4)
    },
    data() {
      return {
        race: "Virginia's Blue Ridge, Creature From Carvins Cove 2017",
        results: {
          classes: [
            {
              name: "XXC Men",
              riders: [
                {
                  name: "Andrew Dunlap",
                  time: "4:09"
                },
                {
                  name: "Robbie Bruce",
                  time: "4:09"
                },
                {
                  name: "Jeffery Glenn",
                  time: "4:25"
                },
                {
                  name: "Derek Dotson",
                  time: "4:27"
                },
                {
                  name: "Alan Dyer",
                  time: "4:28"
                }, {
                  name: "Jeff Cheng",
                  time: "4:51"
                }, {
                  name: "Reid Bailey",
                  time: "4:58"
                },
                {
                  name: "Joshua Cave",
                  time: "4:59"
                }, {
                  name: "Chris Blankenship",
                  time: "5:05"
                },
                {
                  name: "David Mccurdy",
                  time: "5:07"
                },
                {
                  name: "Jeff Morris",
                  time: "5:29"
                },
                {
                  name: "Scott Horner",
                  time: "5:30"
                },
                {
                  name: "Roy Pruett",
                  time: "5:33"
                },
                {
                  name: "Michael Cummings",
                  time: "5:42"
                },
                {
                  name: "Derek Johnson",
                  time: "5:46"
                },
                {
                  name: "Daniel Blankenship",
                  time: "5:56"
                },
                {
                  name: "Cole Inman",
                  time: "5:57"
                },
                {
                  name: "Sebastian Suppes",
                  time: "6:27"
                },
                {
                  name: "Dan Richardson",
                  time: "6:27"
                },
                {
                  name: "Andrew Burton",
                  time: "6:29"
                },
                {
                  name: "Carlo Dy",
                  time: "7:42"
                },
                {
                  name: "Phillip Mitchell",
                  time: "7:42"
                },
              ]
            },
            {
              name: "XXC Master Men 45-55",
              riders: [
                {
                  name: "Acie Hylton",
                  time: "4:11"
                },
                {
                  name: "Wake Fulp",
                  time: "4:21"
                },
                {
                  name: "Chris Powhosky",
                  time: "4:36"
                },
                {
                  name: "Ronny Angell",
                  time: "4:44"
                },
                {
                  name: "Steve Schumaker",
                  time: "4:52"
                },
                {
                  name: "Daniel Hockenberger",
                  time: "5:06"
                },
                {
                  name: "Charles Dye",
                  time: "5:11"
                },
                {
                  name: "Scott Ramsey",
                  time: "5:17"
                },
                {
                  name: "Jamison Baker",
                  time: "5:18"
                },
                {
                  name: "Paul Sullivan",
                  time: "5:21"
                },
                {
                  name: "Pierson Hotchkiss",
                  time: "5:30"
                },
                {
                  name: "Rob Issem",
                  time: "5:41"
                },
                {
                  name: "John McDowell",
                  time: "5:47"
                },
                {
                  name: "Brian Bond",
                  time: "6:00"
                },
                {
                  name: "Todd Hoge",
                  time: "6:13"
                },
                {
                  name: "Mike Meadows",
                  time: "6:29"
                },
                {
                  name: "Rob Odenwelder",
                  time: "6:34"
                },
                {
                  name: "Jeff Baker",
                  time: "7:08"
                },
              ]
            },
            {
              name: "XXC Veteran Men 55+",
              riders: [
                {
                  name: "David Lanchlet",
                  time: "5:49"
                },
              ]
            },
            {
              name: "XXC Women",
              riders: [
                {
                  name: "Anna Sortore",
                  time: "5:26"
                },
                {
                  name: "Susannah Cadwalader",
                  time: "5:36"
                },
                {
                  name: "Becky Barkett",
                  time: "6:06"
                },
                {
                  name: "Natalie Morris",
                  time: "6:34"
                },
              ]
            },
            {
              name: "XXC Singlespeed",
              riders: [
                {
                  name: "Scottie Pendeleton",
                  time: "4:30"
                },
                {
                  name: "Tommy Oravetz",
                  time: "4:34"
                },
                {
                  name: "Shannon Willis",
                  time: "4:39"
                },
                {
                  name: "Laura Hamm",
                  time: "4:41"
                },
                {
                  name: "Eric Sauer",
                  time: "4:41:02"
                },
                {
                  name: "Benjamin Crandell",
                  time: "4:44"
                },
                {
                  name: "Bryan Carpenter",
                  time: "4:45"
                },
                {
                  name: "Dave Williams",
                  time: "4:54"
                },
                {
                  name: "Gabor Szilagyi",
                  time: "5:25"
                },
              ]
            }
          ]
        }
      }
    }
  }
</script>
