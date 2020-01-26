const insight = require('./insight')

describe('Testing the insight routine', () => {
  test('Should be a function', () => {
    expect(insight).toBeInstanceOf(Function)
  })
})
