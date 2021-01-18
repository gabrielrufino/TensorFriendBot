const generateQuizPodium = require('./generate-quiz-podium')

describe('Testing the helper generateQuizPodium', () => {
  test('Should be a function', () => {
    expect(generateQuizPodium).toBeInstanceOf(Function)
  })
})
