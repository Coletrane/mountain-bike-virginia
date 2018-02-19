export const findRaceIndex = (name) => {
  let result

  resultsData.forEach((race, i, arr) => {
    if (race.race.toLowerCase() === name.toLowerCase()) {
      result = i
    }
  })

  return result
}

export const resultsData = [
  {
    race: 'Creature From Carvins Cove 2017',
    results: {
      classes: [
        {
          name: 'XXC Men',
          riders: [
            {
              name: 'Andrew Dunlap',
              time: '4:09'
            },
            {
              name: 'Robbie Bruce',
              time: '4:09'
            },
            {
              name: 'Jeffery Glenn',
              time: '4:25'
            },
            {
              name: 'Derek Dotson',
              time: '4:27'
            },
            {
              name: 'Alan Dyer',
              time: '4:28'
            }, {
              name: 'Jeff Cheng',
              time: '4:51'
            }, {
              name: 'Reid Bailey',
              time: '4:58'
            },
            {
              name: 'Joshua Cave',
              time: '4:59'
            }, {
              name: 'Chris Blankenship',
              time: '5:05'
            },
            {
              name: 'David Mccurdy',
              time: '5:07'
            },
            {
              name: 'Jeff Morris',
              time: '5:29'
            },
            {
              name: 'Scott Horner',
              time: '5:30'
            },
            {
              name: 'Roy Pruett',
              time: '5:33'
            },
            {
              name: 'Michael Cummings',
              time: '5:42'
            },
            {
              name: 'Derek Johnson',
              time: '5:46'
            },
            {
              name: 'Daniel Blankenship',
              time: '5:56'
            },
            {
              name: 'Cole Inman',
              time: '5:57'
            },
            {
              name: 'Sebastian Suppes',
              time: '6:27'
            },
            {
              name: 'Dan Richardson',
              time: '6:27'
            },
            {
              name: 'Andrew Burton',
              time: '6:29'
            },
            {
              name: 'Carlo Dy',
              time: '7:42'
            },
            {
              name: 'Phillip Mitchell',
              time: '7:42'
            }
          ]
        },
        {
          name: 'XXC Master Men 45-55',
          riders: [
            {
              name: 'Acie Hylton',
              time: '4:11'
            },
            {
              name: 'Wake Fulp',
              time: '4:21'
            },
            {
              name: 'Chris Powhosky',
              time: '4:36'
            },
            {
              name: 'Ronny Angell',
              time: '4:44'
            },
            {
              name: 'Steve Schumaker',
              time: '4:52'
            },
            {
              name: 'Daniel Hockenberger',
              time: '5:06'
            },
            {
              name: 'Charles Dye',
              time: '5:11'
            },
            {
              name: 'Scott Ramsey',
              time: '5:17'
            },
            {
              name: 'Jamison Baker',
              time: '5:18'
            },
            {
              name: 'Paul Sullivan',
              time: '5:21'
            },
            {
              name: 'Pierson Hotchkiss',
              time: '5:30'
            },
            {
              name: 'Rob Issem',
              time: '5:41'
            },
            {
              name: 'John McDowell',
              time: '5:47'
            },
            {
              name: 'Brian Bond',
              time: '6'
            },
            {
              name: 'Todd Hoge',
              time: '6:13'
            },
            {
              name: 'Mike Meadows',
              time: '6:29'
            },
            {
              name: 'Rob Odenwelder',
              time: '6:34'
            },
            {
              name: 'Jeff Baker',
              time: '7:08'
            }
          ]
        },
        {
          name: 'XXC Veteran Men 55+',
          riders: [
            {
              name: 'David Lanchlet',
              time: '5:49'
            }
          ]
        },
        {
          name: 'XXC Women',
          riders: [
            {
              name: 'Anna Sortore',
              time: '5:26'
            },
            {
              name: 'Susannah Cadwalader',
              time: '5:36'
            },
            {
              name: 'Becky Barkett',
              time: '6:06'
            },
            {
              name: 'Natalie Morris',
              time: '6:34'
            }
          ]
        },
        {
          name: 'XXC Singlespeed',
          riders: [
            {
              name: 'Scottie Pendeleton',
              time: '4:30'
            },
            {
              name: 'Tommy Oravetz',
              time: '4:34'
            },
            {
              name: 'Shannon Willis',
              time: '4:39'
            },
            {
              name: 'Laura Hamm',
              time: '4:41'
            },
            {
              name: 'Eric Sauer',
              time: '4:41:02'
            },
            {
              name: 'Benjamin Crandell',
              time: '4:44'
            },
            {
              name: 'Bryan Carpenter',
              time: '4:45'
            },
            {
              name: 'Dave Williams',
              time: '4:54'
            },
            {
              name: 'Gabor Szilagyi',
              time: '5:25'
            }
          ]
        }
      ]
    }
  },
  {
    race: 'Middle Mountain Momma 2017',
    results: {
      classes: [
        {
          name: 'XXC Single Speed - 39.5 miles',
          riders: [
            {
              name: 'Scottie Pendleton',
              time: '4:55'
            },
            {
              name: 'Andy Cremeans',
              time: '5:32'
            }
          ]
        },
        {
          name: 'XXC Master Men 45+ - 39.5 miles',
          riders: [
            {
              name: 'Wake Fulp',
              time: '4:26'
            },
            {
              name: 'Gordon Davies',
              time: '4:36'
            },
            {
              name: 'Chris Pohowsky',
              time: '4:45'
            },
            {
              name: 'Jeff Jennings',
              time: '5:40'
            },
            {
              name: 'John Stratiou',
              time: '6:05'
            },
            {
              name: 'Brian Bond',
              time: '6:15'
            },
            {
              name: 'Ben Faust',
              time: '7:36'
            },
            {
              name: 'Phil Rice',
              time: '7:36'
            },
            {
              name: 'Erin Setzer',
              time: '5:24'
            },
            {
              name: 'Sue George',
              time: '6:08'
            },
            {
              name: 'Lynn Faust',
              time: '7:36'
            }
          ]
        },
        {
          name: 'XXC Men - 39.5 miles',
          riders: [
            {
              name: 'Ryan Serbe;',
              time: '4:06'
            },
            {
              name: 'Andy Rhodes',
              time: '4:13'
            },
            {
              name: 'Andrew Dunlap',
              time: '4:15'
            },
            {
              name: 'Adam Stephens',
              time: '4:25'
            },
            {
              name: 'Steve Cundy',
              time: '4:52'
            },
            {
              name: 'Joe Perpetua',
              time: '4:52'
            },
            {
              name: 'Doug Cubbage',
              time: '5:06'
            },
            {
              name: 'Tyler Graf',
              time: '5:26'
            },
            {
              name: 'Jeff Glenn',
              time: '5:30'
            },
            {
              name: 'Marty McKeon',
              time: '5:31'
            },
            {
              name: 'Reid Bailey',
              time: '5:47'
            },
            {
              name: 'Benjamin Grabaskas',
              time: '6:24'
            },
            {
              name: 'Jay Pelletier',
              time: '6:25'
            }
          ]
        },
        {
          name: 'Beginner Women (Open) - 11 Miles',
          riders: [
            {
              name: 'Anna Sortore',
              time: '1:27'
            },
            {
              name: 'Mona Raza',
              time: '2:11'
            },
            {
              name: 'Richard Houge',
              time: '2:26'
            },
            {
              name: 'Michael Scales',
              time: '2:31'
            }
          ]
        },
        {
          name: 'Sport JV Women - 21 Miles',
          riders: [
            {
              name: 'Ruth Brown',
              time: '1:48'
            }
          ]
        },
        {
          name: 'Sport Women (Open) - 21 Miles',
          riders: [
            {
              name: 'Lynn Faust',
              time: '3:33'
            },
            {
              name: 'Ashley Mayer',
              time: '3:34'
            }
          ]
        },
        {
          name: 'Jr. Elementary Men (6th grade and under) - 6 Miles',
          riders: [
            {
              name: 'Nik Stratiou',
              time: '40:13'
            }
          ]
        },
        {
          name: 'Jurnior Varsity (12-14) - 11 Miles',
          riders: [
            {
              name: 'Thomas Phlegar',
              time: '1:37'
            },
            {
              name: 'Ryan Eads',
              time: '2:01'
            }
          ]
        },
        {
          name: 'Master Sport Women (45+) - 21 Miles',
          riders: [
            {
              name: 'Catherine Parisian',
              time: '4:51'
            }
          ]
        },
        {
          name: 'Master Sport Men (55+) - 21 Miles',
          riders: [
            {
              name: 'Pete Dailey',
              time: '3:38'
            },
            {
              name: 'Steve Johsnon',
              time: '4:55'
            }
          ]
        },
        {
          name: 'Master Sport Men (45-54) - 21 Miles',
          riders: [
            {
              name: 'Matt Trybus',
              time: '2:59'
            },
            {
              name: 'Paul Bower',
              time: '3:48'
            },
            {
              name: 'Toshun Campbell',
              time: '4:02'
            }
          ]
        },
        {
          name: 'Master/Vet Sport Men (35-44) - 21 Miles',
          riders: [
            {
              name: 'Georg Kaufman',
              time: '3:06'
            },
            {
              name: 'Richard McAfee',
              time: '3:16'
            },
            {
              name: 'Thomas Eads',
              time: '3:40'
            },
            {
              name: 'Derek Stroh',
              time: '4:33'
            },
            {
              name: 'Shaun Devane',
              time: '4:48'
            }
          ]
        },
        {
          name: 'Sport Men (Senior 19-34) - 21 Miles',
          riders: [
            {
              name: "Mike O'Brien",
              time: '2:51'
            }
          ]
        },
        {
          name: 'Varsity Junior Expert (15-18) - 21 miles',
          riders: [
            {
              name: 'Jonah Cooke',
              time: '3:26'
            },
            {
              name: 'Ryan Eads',
              time: '2:01'
            }
          ]
        },
        {
          name: 'John  Witherspoon',
          riders: [
            {
              name: 'Seth Elleis',
              time: '2:26'
            },
            {
              name: 'Scott Paisley',
              time: '2:30'
            },
            {
              name: 'Adam Harnois',
              time: '2:37'
            }
          ]
        },
        {
          name: 'Pro/Expert Women - 21 miles',
          riders: [
            {
              name: 'Julie Roach',
              time: '4:17'
            },
            {
              name: 'Ken Bell',
              time: '2:13'
            }
          ]
        },
        {
          name: 'Pro/Expert Men - 21 miles',
          riders: [
            {
              name: 'Roy Pruett',
              time: '2:52'
            },
            {
              name: 'Brett Lyons',
              time: '4:05'
            },
            {
              name: 'Clay Lyons',
              time: '4:05'
            }
          ]
        }
      ]
    }
  },
  {
    race: 'Creature From Carvins Cove 2016',
    results: {
      classes: [
        {
          name: 'XXC Men',
          riders: [
            {
              name: 'Jeremiah Bishop',
              time: '4:04'
            },
            {
              name: 'Adam Williams',
              time: '4:24'
            },
            {
              name: 'Alan Dyer',
              time: '4:30'
            },
            {
              name: 'Adam Stephens',
              time: '4:48'
            },
            {
              name: 'Charlie Ornsby',
              time: '4:48'
            },
            {
              name: 'Jackson Hotchkiss',
              time: '4:48'
            },
            {
              name: 'Ryan Miracle',
              time: '4:53'
            },
            {
              name: 'Ben Klimas',
              time: '4:58'
            },
            {
              name: 'Dave Williams',
              time: '5:02'
            },
            {
              name: 'Gary Carrier',
              time: '5:04'
            },
            {
              name: 'Sean Keefe',
              time: '5:06'
            },
            {
              name: 'Jeff Jennings',
              time: '5:11'
            },
            {
              name: 'John Compton',
              time: '5:12'
            },
            {
              name: 'Jeff Cheng',
              time: '5:14'
            },
            {
              name: 'Bradley Bayne',
              time: '5:14'
            },
            {
              name: 'Joshua Cave',
              time: '5:18'
            },
            {
              name: 'Carter Teague',
              time: '5:22'
            },
            {
              name: 'Ray Crowder',
              time: '5:23'
            },
            {
              name: 'Corey Heitz',
              time: '5:24'
            },
            {
              name: 'Jeffery Glenn',
              time: '5:54'
            },
            {
              name: 'Simon Rice',
              time: '5:54'
            },
            {
              name: 'Kyle Little',
              time: '6:02'
            },
            {
              name: 'Drew Duke',
              time: '6:03'
            },
            {
              name: 'Georg Kaufman',
              time: '5:22'
            },
            {
              name: 'Billy Miller',
              time: '5:23'
            },
            {
              name: 'Robbie Bruce',
              time: '6:18'
            },
            {
              name: 'Brian Poston',
              time: '6:23'
            },
            {
              name: 'Andrew Burton',
              time: '6:26'
            },
            {
              name: 'Jonas Malever',
              time: '6:29'
            },
            {
              name: 'Benjamin Martin',
              time: '6:34'
            }
          ]
        },
        {
          name: 'XXC Master Men 45+',
          riders: [
            {
              name: 'Wake Fulp',
              time: '4:38'
            },
            {
              name: 'Rob Issem',
              time: '4:49'
            },
            {
              name: 'Chris Pohowsky',
              time: '4:53'
            },
            {
              name: 'Jon Gaudio',
              time: '4:53'
            },
            {
              name: 'Charles Dye',
              time: '5:19'
            },
            {
              name: 'John Lewis',
              time: '6:02'
            },
            {
              name: 'Mike Meadows',
              time: '6:04'
            },
            {
              name: 'David Phlegar',
              time: '6:06'
            },
            {
              name: 'Michael Comer',
              time: '6:21'
            },
            {
              name: 'Martin Piedl',
              time: '6:25'
            },
            {
              name: 'Pierson Hotchkiss',
              time: '6:30'
            },
            {
              name: 'Paul Sullivan',
              time: '6:30'
            },
            {
              name: 'Gibson Barbee',
              time: '6:33'
            },
            {
              name: 'Mark McCardell',
              time: '6:35'
            },
            {
              name: 'Todd Hodge',
              time: '6:42'
            },
            {
              name: 'Don Crisp',
              time: '6:44'
            },
            {
              name: 'Rob Odenwelder',
              time: '6:53'
            },
            {
              name: 'Steve Johnson',
              time: '6:54'
            }
          ]
        },
        {
          name: 'XXC Women',
          riders: [
            {
              name: 'Laura Hamm',
              time: '4:46'
            },
            {
              name: 'Lauren Cantwell',
              time: '5:24'
            },
            {
              name: 'Christine Putnam',
              time: '5:55'
            },
            {
              name: 'Sydney Compton',
              time: '6:02'
            },
            {
              name: 'Sue George',
              time: '6:34'
            },
            {
              name: 'Susannah Cadwalader',
              time: '6:35'
            },
            {
              name: 'Mackenzie Prandi',
              time: '6:42'
            },
            {
              name: 'Melissa Cooper',
              time: '7:11'
            }
          ]
        },
        {
          name: 'XXC Singlespeed',
          riders: [
            {
              name: 'Bob Moss',
              time: '4:17:51'
            },
            {
              name: 'Victor Guerara',
              time: '4:32:33'
            },
            {
              name: 'Rich Dillen',
              time: '4:39:02'
            },
            {
              name: 'Cliff Hatchett',
              time: '4:40:24'
            },
            {
              name: 'Tommy Oravetz',
              time: '4:48:03'
            },
            {
              name: 'Gabor Szilagyi',
              time: '4:50'
            },
            {
              name: 'Michael Blankenship',
              time: '7:05'
            }
          ]
        }
      ]
    }
  },
  {
    race: 'Middle Mountain Momma 2016',
    results: {
      classes: [
        {
          name: 'XXC Men - 39.5 miles',
          riders: [
            {
              name: 'John Petrylak',
              time: '4:03'
            },
            {
              name: 'Acie Hylton',
              time: '4:38'
            },
            {
              name: 'Ben Klimas',
              time: '4:41'
            },
            {
              name: 'Robbie Bruce',
              time: '4:45'
            },
            {
              name: 'John Proppe',
              time: '4:53'
            },
            {
              name: 'William Walker',
              time: '5:16'
            },
            {
              name: 'Donald Sims',
              time: '5:29'
            },
            {
              name: 'Matt Whitford',
              time: '5:39'
            },
            {
              name: 'Juan Molap',
              time: '5:30'
            },
            {
              name: 'Kohl Amer',
              time: '6:06'
            },
            {
              name: 'Roy Pruett',
              time: '6:07'
            },
            {
              name: 'Drew Duke',
              time: '6:37'
            },
            {
              name: 'Alan Cross',
              time: '6:46'
            },
            {
              name: 'Wake Fulp',
              time: '4:21'
            },
            {
              name: 'David McCormick',
              time: '4:31'
            },
            {
              name: 'Gordon Davies',
              time: '4:36'
            },
            {
              name: 'Rob Issem',
              time: '4:43'
            },
            {
              name: 'Adam Lindstedt',
              time: '5:06'
            },
            {
              name: 'Aaron Thall',
              time: '5:16'
            },
            {
              name: 'David Phillips',
              time: '5:22'
            },
            {
              name: 'Sean Wehr',
              time: '5:38'
            },
            {
              name: 'Paul Sullivan',
              time: '5:54'
            },
            {
              name: 'John Stratiou',
              time: '6:24'
            },
            {
              name: 'Charles Patterson',
              time: '6:32'
            },
            {
              name: 'Phil Rice',
              time: '6:40'
            },
            {
              name: 'Ben Faust',
              time: '6:40'
            },
            {
              name: 'Steve Johnson',
              time: '6:40'
            },
            {
              name: 'Melissa Mertz',
              time: '5:48'
            },
            {
              name: 'Erin Setzer',
              time: '6:09'
            },
            {
              name: 'Michael Coco',
              time: '4:18'
            },
            {
              name: 'Brandon Cox',
              time: '4:43'
            },
            {
              name: 'Austin Hershberger',
              time: '4:53'
            },
            {
              name: 'Andy Cremeans',
              time: '4:55'
            },
            {
              name: 'Quinn Hershberger',
              time: '5:32'
            },
            {
              name: 'Cameron Novak',
              time: '6:02'
            }
          ]
        },
        {
          name: 'Beginner Women (Open) - 11 Miles',
          riders: [
            {
              name: 'Michelle Scarfe',
              time: '1:52'
            },
            {
              name: 'Julie Roach',
              time: '1:55'
            },
            {
              name: 'Mona Raza',
              time: '2:20'
            },
            {
              name: 'Annette Dusenbury',
              time: '2:28'
            },
            {
              name: 'Michael Scales',
              time: '2:24:15'
            },
            {
              name: 'Daniel McPeake',
              time: '2:34:39'
            },
            {
              name: 'Matthew Ralph',
              time: '3:03'
            }
          ]
        },
        {
          name: 'Beginner Men (Open)',
          riders: [
            {
              name: 'Raymond Crowder',
              time: '1:15'
            },
            {
              name: 'Ben Cregger',
              time: '1:18'
            },
            {
              name: 'Richard Whitfield',
              time: '1:28'
            },
            {
              name: 'Erik Petzing',
              time: '1:39'
            },
            {
              name: 'Alex Kovzel',
              time: '1:41'
            },
            {
              name: 'Charlie Safley',
              time: '1:48'
            },
            {
              name: 'Ross Bailes',
              time: '2:18'
            }
          ]
        },
        {
          name: 'Pierson Hotchkiss III',
          riders: [
            {
              name: 'Anderson Huger',
              time: '2:55:01'
            },
            {
              name: 'Robert Berry',
              time: '31:27'
            },
            {
              name: 'Camden Woodard',
              time: '31:55'
            },
            {
              name: 'Thomas Phlegar',
              time: '49:23'
            },
            {
              name: 'Nik Stratiou',
              time: '41:10'
            },
            {
              name: 'Ally Burrow',
              time: '44:59'
            },
            {
              name: 'Lynn Faust',
              time: '3:33'
            },
            {
              name: 'Ashley Mayer',
              time: '3:34'
            },
            {
              name: 'Ruth Brown',
              time: '1:48'
            }
          ]
        },
        {
          name: 'Jurnior Varsity (12-14) - 11 Miles',
          riders: [
            {
              name: 'Russell Phlegar',
              time: '1:38'
            },
            {
              name: 'Henry Brown',
              time: '1:45'
            },
            {
              name: 'David Bears',
              time: '1:53'
            },
            {
              name: 'Joe Bears',
              time: '2:01:30'
            },
            {
              name: 'Knox Robertson',
              time: '2:05:30'
            }
          ]
        },
        {
          name: 'Master Sport Women (35-44) - 21 Miles',
          riders: [
            {
              name: 'Alex Dahlgren',
              time: '3:25'
            },
            {
              name: 'Ellen Ramsey',
              time: '4:33'
            }
          ]
        },
        {
          name: 'Master Sport Men (45-54) - 21 Miles',
          riders: [
            {
              name: 'Scott Paisley',
              time: '2:19'
            },
            {
              name: 'Trae Duty',
              time: '2:36'
            },
            {
              name: 'Barrett WussyKat',
              time: '2:57'
            },
            {
              name: 'Jody Beasley',
              time: '3:11'
            }
          ]
        },
        {
          name: 'Master/Vet Sport Men (35-44) - 21 Miles',
          riders: [
            {
              name: 'Richard McAfee',
              time: '2:41'
            },
            {
              name: 'Adam Harnois',
              time: '2:42'
            },
            {
              name: 'Michael Lipka',
              time: '2:44'
            },
            {
              name: 'Rob Allen',
              time: '2:58'
            },
            {
              name: 'Kevin Tachelly',
              time: '3:01'
            },
            {
              name: 'Brent Provix',
              time: '3:40'
            },
            {
              name: 'Rick Thompson',
              time: '3:55'
            },
            {
              name: 'Dan Wright',
              time: '3:56'
            },
            {
              name: 'Derek Stroh',
              time: '4:45'
            }
          ]
        },
        {
          name: 'Varsity Junior Expert (15-18) - 21 miles',
          riders: [
            {
              name: 'Jonah Cooke',
              time: '3:26'
            },
            {
              name: 'Aaron Workowski',
              time: '2:22'
            },
            {
              name: 'Kyle Little',
              time: '3:03'
            },
            {
              name: 'Jackson Hotchkiss',
              time: '3:03'
            },
            {
              name: 'Roger Sapp',
              time: '3:05'
            },
            {
              name: 'Charlie Charping',
              time: '3:19'
            },
            {
              name: 'Carter Shumaker',
              time: '3:19'
            },
            {
              name: 'Wayne Laws',
              time: '3:41'
            },
            {
              name: 'Ryan Little',
              time: '4:30'
            }
          ]
        },
        {
          name: 'Pro/Expert Women - 21 miles',
          riders: [
            {
              name: 'Philicia Marion',
              time: '2:55'
            },
            {
              name: 'Janel Demeter',
              time: '3:08'
            },
            {
              name: 'Gary Roach',
              time: '2:16'
            },
            {
              name: 'Ray Adams',
              time: '2:27'
            },
            {
              name: 'Tyler Graf',
              time: '2:32'
            },
            {
              name: 'Davy Hazlegrove',
              time: '2:49'
            },
            {
              name: 'Scott Ramsey',
              time: '2:55'
            }
          ]
        },
        {
          name: 'Team',
          riders: [
            {
              name: 'Matthew Bailey',
              time: '1:56'
            },
            {
              name: 'Robert Marion',
              time: '1:59'
            },
            {
              name: 'Abe Goorsky',
              time: '2:09'
            },
            {
              name: 'Sam Roach',
              time: '2:16'
            },
            {
              name: 'Scottie Pendleton',
              time: '2:20'
            }
          ]
        }
      ]
    }
  }
].reverse()
