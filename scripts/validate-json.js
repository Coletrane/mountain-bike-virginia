const fs = require('fs')
const glob = require('glob')

glob(`json/**/*.json`, (err, json) => {
  if (err) {
    console.log(`Error getting json files ${err}`)
  } else {
    console.log('Inspecting json files:')
    console.log(json)
    json.forEach(file => {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
          console.log(`Error reading file! ${file}, Error: ${err}`)
        } else {
          try {
            JSON.parse(data)
          } catch (err) {
            console.log(`Error parsing json ${file}, Error: ${err}`)
          }
        }
      })
    })
  }
})
