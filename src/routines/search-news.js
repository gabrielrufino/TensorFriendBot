const amqp = require('amqplib')
const CronJob = require('cron').CronJob
const moment = require('moment')
const NewsAPI = require('newsapi')

const searchNews = async (helpers) => {
  const { AMQP_URL, NEWS_API_KEY } = process.env

  const newsapi = new NewsAPI(NEWS_API_KEY)

  const connection = await amqp.connect(AMQP_URL)
  const channel = await connection.createChannel()

  const queue = 'news'

  await channel.assertQueue(queue, { durable: true })

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
          to: today
        })
      )
    )

    const articles = responses.map(response => response.articles).flat()
    const urls = helpers.removeRepetitions(articles.map(article => article.url))

    urls.sort(() => Math.random() - 0.5)

    urls.forEach(url => {
      channel.sendToQueue(queue, Buffer.from(url))
    })
  }, null, false, 'America/Sao_Paulo').start()
}

module.exports = searchNews
