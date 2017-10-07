<template>
  <div id="creature-2016-results" class="post-container">
    <div class="title race-title">{{data.name}}</div>
    <img class="results-header" src="../../resources/img/creature-generic.png">
    <div class="columns results-columns">
      <div class="column">
        <div class="subtitle results-subtitle">{{data.results.classes[0].name}}</div>
        <table class="table is-striped">
          <thead>
          <tr>
            <td>Position</td>
            <td class="name">Name</td>
            <td>Time</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(rider, key, index) in data.results.classes[0].riders">
            <td>{{index + 1}}</td>
            <td>{{rider.name}}</td>
            <td>{{rider.time}}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="column">
        <div v-for="clazz in data.secondColumnClasses">
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
            <tr v-for="(rider, key, index) in clazz.riders">
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
    name: 'creature-2016-results',
    data: function() {
      return {
        name: "Virginia's Blue Ridge, Creature From Carvins Cove 2016",
        results: {
          classes: [
            {
              name: "XXC Men",
              riders: [
                {
                  name: "Jeremiah Bishop",
                  time: "4:04"
                },
                {
                  name: "Adam Williams",
                  time: "4:24"
                },
                {
                  name: "Alan Dyer",
                  time: "4:30"
                },
                {
                  name: "Adam Stephens",
                  time: "4:48"
                },
                {
                  name: "Charlie Ornsby",
                  time: "4:48"
                },
                {
                  name: "Jackson Hotchkiss",
                  time: "4:48"
                },
                {
                  name: "Ryan Miracle",
                  time: "4:53"
                },
                {
                  name: "Ben Klimas",
                  time: "4:58"
                },
                {
                  name: "Dave Williams",
                  time: "5:02"
                },
                {
                  name: "Gary Carrier",
                  time: "5:04"
                },
                {
                  name: "Sean Keefe",
                  time: "5:06"
                },
                {
                  name: "Jeff Jennings",
                  time: "5:11"
                },
                {
                  name: "John Compton",
                  time: "5:12"
                },
                {
                  name: "Jeff Cheng",
                  time: "5:14"
                },
                {
                  name: "Bradley Bayne",
                  time: "5:14"
                },
                {
                  name: "Joshua Cave",
                  time: "5:18"
                },
                {
                  name: "Carter Teague",
                  time: "5:22"
                },
                {
                  name: "Ray Crowder",
                  time: "5:23"
                },
                {
                  name: "Corey Heitz",
                  time: "5:24"
                },
                {
                  name: "Jeffery Glenn",
                  time: "5:54"
                },
                {
                  name: "Simon Rice",
                  time: "5:54"
                },
                {
                  name: "Kyle Little",
                  time: "6:02"
                },
                {
                  name: "Drew Duke",
                  time: "6:03"
                },
                {
                  name: "Georg Kaufman",
                  time: "5:22"
                },
                {
                  name: "Billy Miller",
                  time: "5:23"
                },
                {
                  name: "Robbie Bruce",
                  time: "6:18"
                },
                {
                  name: "Brian Poston",
                  time: "6:23"
                },
                {
                  name: "Andrew Burton",
                  time: "6:26"
                },
                {
                  name: "Jonas Malever",
                  time: "6:29"
                },
                {
                  name: "Benjamin Martin",
                  time: "6:34"
                }
              ]
            },
            {
              name: "XXC Master Men 45+",
              riders: [
                {
                  name: "Wake Fulp",
                  time: "4:38"
                },
                {
                  name: "Rob Issem",
                  time: "4:49"
                },
                {
                  name: "Chris Pohowsky",
                  time: "4:53"
                },
                {
                  name: "Jon Gaudio",
                  time: "4:53"
                },
                {
                  name: "Charles Dye",
                  time: "5:19"
                },
                {
                  name: "John Lewis",
                  time: "6:02"
                },
                {
                  name: "Mike Meadows",
                  time: "6:04"
                },
                {
                  name: "David Phlegar",
                  time: "6:06"
                },
                {
                  name: "Michael Comer",
                  time: "6:21"
                },
                {
                  name: "Martin Piedl",
                  time: "6:25"
                },
                {
                  name: "Pierson Hotchkiss",
                  time: "6:30"
                },
                {
                  name: "Paul Sullivan",
                  time: "6:30"
                },
                {
                  name: "Gibson Barbee",
                  time: "6:33"
                },
                {
                  name: "Mark McCardell",
                  time: "6:35"
                },
                {
                  name: "Todd Hodge",
                  time: "6:42"
                },
                {
                  name: "Don Crisp",
                  time: "6:44"
                },
                {
                  name: "Rob Odenwelder",
                  time: "6:53"
                },
                {
                  name: "Steve Johnson",
                  time: "6:54"
                }
              ]
            },
            {
              name: "XXC Women",
              riders: [
                {
                  name: "Laura Hamm",
                  time: "4:46"
                },
                {
                  name: "Lauren Cantwell",
                  time: "5:24"
                },
                {
                  name: "Christine Putnam",
                  time: "5:55"
                },
                {
                  name: "Sydney Compton",
                  time: "6:02"
                },
                {
                  name: "Sue George",
                  time: "6:34"
                },
                {
                  name: "Susannah Cadwalder",
                  time: "6:35"
                },
                {
                  name: "Mackenzie Prandi",
                  time: "6:42"
                },
                {
                  name: "Melissa Cooper",
                  time: "7:11"
                }
              ]
            },
            {
              name: "XXC Singlespeed",
              riders: [
                {
                  name: "Bob Moss",
                  time: "4:17:51"
                },
                {
                  name: "Victor Guerara",
                  time: "4:32:33"
                },
                {
                  name: "Rich Dillen",
                  time: "4:39:02"
                },
                {
                  name: "Cliff Hatchett",
                  time: "4:40:24"
                },
                {
                  name: "Tommy Oravetz",
                  time: "4:48:03"
                },
                {
                  name: "Gabor Szilagyi",
                  time: "4:50"
                },
                {
                  name: "Michael Blankenship",
                  time: "7:05"
                }
              ]
            }
          ]
        },
        secondColumnClasses: this.results.classes.slice(1, 4)
      }
    }
  }
</script>
