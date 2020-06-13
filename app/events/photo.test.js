const photo = require('./photo')

describe('Testing the photo event', () => {
  test('Should be a function', () => {
    expect(photo).toBeInstanceOf(Function)
  })
})
