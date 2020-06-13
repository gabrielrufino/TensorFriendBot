const ping = require('./ping')

describe('Testing the ping command', () => {
  test('Should be a function', () => {
    expect(ping).toBeInstanceOf(Function)
  })
})
