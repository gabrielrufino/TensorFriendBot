const askForContribution = require('./ask-for-contribution')

describe('Testing the ask-for-contribution routine', () => {
  test('Should be a function', () => {
    expect(askForContribution).toBeInstanceOf(Function)
  })
})
