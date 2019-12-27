const helpers = require('./')

describe('Testing the helpers index file', () => {
  test('Should be an object', () => {
    expect(helpers).toBeInstanceOf(Object)
  })
})
