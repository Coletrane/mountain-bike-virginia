export const importTest = (path) => {
  describe(path, () => {
    require(path)
  })
}