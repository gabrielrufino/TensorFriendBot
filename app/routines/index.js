const searchNews = require('./search-news')
const sendNews = require('./send-news')

const routines = (bot, helpers) => {
  searchNews(helpers)
  sendNews(bot)
}

module.exports = routines
