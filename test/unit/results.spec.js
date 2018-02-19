const results = require('../../assets/results')
const expect = require('./global.spec').expect

describe('results.js and results.vue test', () => {
  it('should find and return the correct race', () => {
    const searchStr = 'Middle Mountain Momma 2017'
    const raceIdx = results.findRaceIndex(searchStr)

    expect(results.resultsData[raceIdx].race)
      .to.equal(searchStr)
  })

  it('should not find a race', () => {
    expect(results.findRaceIndex('Rotor Meltdown'))
      .to.equal(-1)
  })

  it('should find the right race', () => {
    let raceIdx = results.findRaceIndex('middle mountain momma 2017')
    expect(results.resultsData[raceIdx].race)
      .to.equal('Middle Mountain Momma 2017')
  })
})
