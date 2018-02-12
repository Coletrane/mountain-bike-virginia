const global = require('../global.spec')
const By = require('selenium-webdriver').By

describe('<home> tests', () => {
  let driver
  let expect

  before(async () => {
    driver = await global.driver
    expect = await global.expect
  })
})
