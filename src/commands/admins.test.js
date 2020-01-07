const admins = require('./admins')

describe('Testing the admins command handler', () => {
  test('Should be a function', () => {
    expect(admins).toBeInstanceOf(Function)
  })

  test('Shoud return a function', () => {
    expect(admins({})).toBeInstanceOf(Function)
  })
})
