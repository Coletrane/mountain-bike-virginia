const results = require('../../assets/results')
const expect = require('./global.spec').expect

describe('results.js and results.vue test', () => {
  it('should find and return the correct race', () => {
    const searchStr = 'Middle Mountain Momma 2017'
    const raceIdx = results.findRaceIndex(searchStr)

    expect(results.resultsData[raceIdx].race)
      .to.equal(searchStr)
  })
})
