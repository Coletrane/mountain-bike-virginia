const jsdom = require('jsdom')
const {JSDOM} = jsdom
const fs = require('fs')

const html = fs.readFileSync('./sheet001.html', 'utf-8')

const isName = (line) => {
  return !line.includes('>') &&
    !line.includes('<') &&
    !line.includes('&') &&
    !line.includes(':') &&
    !parseInt(line)
}

const isTime = (line) => {
  return line.includes(':') &&
    !line.includes('pt') &&
    !line.includes('span')
}

const printClasses = (classes) => {
  classes.forEach(clazz => {
    console.log(`{
      name: '${clazz.name}',`)
    console.log('riders: [')
    clazz.riders.forEach(rider => {
      console.log(`{
        name: '${rider.name}',
        time: '${rider.time}',
      },`)
    })
    console.log(']')
    console.log('},')
  })
  console.log('--------------------------------------------------------')
}

// Parsing HTML strings because MS is stupid and defined their own schema
let data = []
html.split('\n').forEach(line => {
  let sanitized = line.substring(line.indexOf('>') + 1, line.lastIndexOf('<'))

  if (isName(sanitized) || isTime(sanitized)) {
    data.push(sanitized)
  }
})

// Get them into the interface defined in results.js
let results = []
let currentClass = -1
// let currentRider = 0
data.forEach((line, i, arr) => {
  if (i !== arr.length - 1 &&
    isName(line)) {
    if (line.split(' ').length === 2 &&
      isTime(arr[i + 1])) {
      results[currentClass].riders.push({

        name: line,
        time: arr[i + 1]
      })
    } else if (line.match(/[a-z]/i)) {
      results.push({
        name: line,
        riders: []
      })
      currentClass++
      // currentRider = 0
    }
  }
})

// Omit classes that don't have riders
let cleanClasses = []
results.forEach(res => {
  if (res.riders.length > 0) {
    cleanClasses.push(res)
  }
})

printClasses(cleanClasses.reverse())
