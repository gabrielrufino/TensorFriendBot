const events = require('./')

describe('Testing the events index file', () => {
  test('Should be a function', () => {
    expect(events).toBeInstanceOf(Function)
  })
})
