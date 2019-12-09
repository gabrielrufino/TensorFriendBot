const searchNews = require('./search-news')
const sendNews = require('./send-news')

const routines = (bot, data) => {
  searchNews(data)
  sendNews(bot, data)
}

module.exports = routines
