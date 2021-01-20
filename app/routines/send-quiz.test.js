const sendQuiz = require('./send-quiz')

describe('Testing the send-quiz routine', () => {
  test('Should be a function', () => {
    expect(sendQuiz).toBeInstanceOf(Function)
  })
})
