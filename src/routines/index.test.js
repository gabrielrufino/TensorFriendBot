const routines = require('./')

describe('Testing the routines index file', () => {
  test('Should be a function', () => {
    expect(routines).toBeInstanceOf(Function)
  })
})
