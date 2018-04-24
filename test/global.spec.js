const importTest = (path) => {
  describe(path, () => {
    require(path)
  })
}

describe('Mountain Bike Virginia Test Suite', () => {

  importTest('./json/global.spec')
  importTest('./integration/global.chrome.spec')
  importTest('./integration/global.safari.spec')
  importTest('./unit/global.spec')
})