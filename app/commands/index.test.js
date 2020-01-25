const commands = require('./')

describe('Testing the commands index file', () => {
  test('Should be a function', () => {
    expect(commands).toBeInstanceOf(Function)
  })
})
