const expect = require("./global.spec").expect
const glob = require("glob")

describe("/results/ test", () => {
  let resultsFiles = []

  for (const filename of glob.sync("json/results/**/*.json")) {
    describe(filename, () => {
      let resultJson
      before(async () => {
        resultJson = await require("../../" + filename)
      })

      describe("times test", () => {
        let classes = []
        before(async () => {
          classes = await resultJson.results.classes
        })

        it("should have all times in order", async () => {
          let times = classes.map(clazz => {
            let timeObj = {
              race: filename,
              clazz: clazz.name
            }
            timeObj.times = clazz.riders.map(rider => {
              let timeSplit = rider.time.split(":")
              return +timeSplit[0] * 60 * 60 + +timeSplit[1] * 60
            })

            return timeObj
          })

          for (const clazz of times) {
            let sorted = await clazz.times.sort((a, b) => {
              if (a < b) return -1
              if (a > b) return 1
              return 0
            })
            clazz.times.forEach((time, i, arr) => {
              if (time !== sorted[i]) {
                console.log(`FAIL: ${clazz.race} ${clazz.clazz}`)
              }
              expect(time).to.equal(sorted[i])
            })
          }
        })
      })
    })
  }
})
