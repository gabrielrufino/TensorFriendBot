const insight = require('./insight')
const searchNews = require('./search-news')
const sendNews = require('./send-news')

const routines = (bot, helpers) => {
  insight(bot)
  searchNews(helpers)
  sendNews(bot)
}

module.exports = routines
