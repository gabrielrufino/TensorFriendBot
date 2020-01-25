const searchNews = require('./search-news')

describe('Testing the search-news routine', () => {
  test('Should be a function', () => {
    expect(searchNews).toBeInstanceOf(Function)
  })
})
