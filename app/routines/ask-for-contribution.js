'use strict'

const CronJob = require('cron').CronJob

const askForContribution = (bot) => {
  const { GROUP_CHAT_ID } = process.env
  const messages = [
    'Olá, Bom dia! 😄 Vim passar pra desejar um ótimo final de semana e pra pedir um favor:',
    'Se você tiver um tempinho esse final de semana, você pode me ajudar a ficar melhor contribuindo com meu sonho de ser uma grande Inteligência Artificial 💪 hahaha Visita lá meu github.\nhttps://github.com/gabrielrufino/TensorFriend'
  ]

  new CronJob('0 0 9 * * 6', () => {
    messages.forEach(async message => {
      await bot.telegram.sendMessage(GROUP_CHAT_ID, message)
    })
  }).start()
}

module.exports = askForContribution
