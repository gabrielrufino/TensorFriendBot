const sendNews = require('./send-news')

describe('Testing the send-news routine', () => {
  test('Should be a function', () => {
    expect(sendNews).toBeInstanceOf(Function)
  })
})
