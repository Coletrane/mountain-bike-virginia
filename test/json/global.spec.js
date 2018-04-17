const chai = require('chai')
chai.use(require('chai-as-promised'))
const expect = chai.expect

exports.expect = expect


const importTest = (path) => {
  describe(path, () => {
    require(path)
  })
}

describe('Mountain Bike Virginia JSON tests', () => {

  importTest('./posts.spec')

})