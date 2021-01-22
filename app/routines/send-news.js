'use strict'

const amqp = require('amqplib')
const CronJob = require('cron').CronJob
const { sleep } = require('sleep')

const sendNews = async (bot) => {
  const { AMQP_URL, GROUP_CHAT_ID } = process.env

  const connection = await amqp.connect(AMQP_URL)
  const channel = await connection.createChannel()

  const queue = 'news'

  await channel.assertQueue(queue, { durable: true })

  new CronJob('0 0 7,19 * * *', async () => {
    const news = await channel.get(queue, { noAck: true })

    if (news) {
      bot.telegram.sendMessage(GROUP_CHAT_ID, news.content.toString())
    }

    sleep(1)
  }, null, false, 'America/Sao_Paulo').start()
}

module.exports = sendNews
