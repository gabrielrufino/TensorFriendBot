const CronJob = require('cron').CronJob
const NewsAPI = require('newsapi')
const moment = require('moment')

const searchNews = (data) => {
  const { NEWS_API_KEY } = process.env

  const newsapi = new NewsAPI(NEWS_API_KEY)

  const queries = [
    'Aprendizado de Máquina',
    'Artificial Intelligence',
    'Machine Learning',
    'TensorFlow',
    'TensorFlow.js',
    'Inteligência Artificial'
  ]

  new CronJob('0 59 23 * * *', async () => {
    const today = moment().format('YYYY-MM-DD')

    const responses = await Promise.all(
      queries.map(query => newsapi
        .v2
        .topHeadlines({
          q: query,
          from: today,
          to: today,
          sortBy: 'relevancy'
        })
      )
    )

    const articles = responses.map(response => response.articles).flat()

    data.news.push(...articles)
  }, null, false, 'America/Sao_Paulo').start()
}

module.exports = searchNews
