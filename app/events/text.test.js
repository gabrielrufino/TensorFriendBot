const text = require('./text')

describe('Testing the text event', () => {
  test('Should be a function', () => {
    expect(text).toBeInstanceOf(Function)
  })
})
