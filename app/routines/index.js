const askForContribution = require('./ask-for-contribution')
const insight = require('./insight')
const searchNews = require('./search-news')
const sendNews = require('./send-news')

const routines = (bot, helpers) => {
  askForContribution(bot)
  insight(bot)
  searchNews(helpers)
  sendNews(bot)
}

module.exports = routines
