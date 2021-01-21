const askForContribution = require('./ask-for-contribution')
const insight = require('./insight')
const searchNews = require('./search-news')
const sendQuiz = require('./send-quiz')
const sendNews = require('./send-news')

const routines = (bot, helpers, database) => {
  askForContribution(bot)
  insight(bot)
  searchNews(helpers)
  sendQuiz(bot, database)
  sendNews(bot)
}

module.exports = routines
