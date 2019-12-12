const CronJob = require('cron').CronJob

const sendNews = (bot, data) => {
  const { GROUP_CHAT_ID } = process.env

  new CronJob('0 0 7,19 * * *', () => {
    const news = data.news.shift()

    if (news) {
      bot.telegram.sendMessage(GROUP_CHAT_ID, news.url)
    }
  }, null, false, 'America/Sao_Paulo').start()
}

module.exports = sendNews
