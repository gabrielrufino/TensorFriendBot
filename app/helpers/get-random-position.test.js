const getRandomPosition = require('./get-random-position')

describe('Testing the helper getRandomPosition', () => {
  const array = [1, 2, 3, 4, 5]

  test('Should be a function', () => {
    expect(getRandomPosition).toBeInstanceOf(Function)
  })

  test('Should throw an error when passing a non-array', () => {
    const nonArray = {}

    expect(() => getRandomPosition(nonArray)).toThrow()
  })

  test('Should return a integer', () => {
    expect(
      Number.isInteger(getRandomPosition(array))
    ).toBeTruthy()
  })

  test('Should return a number between 0 and array.length', () => {
    const position = getRandomPosition(array)

    expect(position).toBeGreaterThanOrEqual(0)
    expect(position).toBeLessThan(array.length)
  })
})
