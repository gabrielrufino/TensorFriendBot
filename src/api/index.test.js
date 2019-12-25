const api = require('./')

describe('Testing the api index file', () => {
  test('Should be a function', () => {
    expect(api).toBeInstanceOf(Function)
  })
})
