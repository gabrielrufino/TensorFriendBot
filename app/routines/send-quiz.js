const CronJob = require('cron').CronJob

const { getRandomPosition } = require('../helpers')
const quizzes = require('../data/quizzes.json')

const initialPodium = `
Pódio:

🥇 1º - [Aguardando você]
🥈 2º - [Aguardando você]
🥉 3º - [Aguardando você]
`

const sendQuiz = (bot) => {
  const { GROUP_CHAT_ID } = process.env

  new CronJob('0 * * * * *', async () => {
    const quiz = quizzes[getRandomPosition(quizzes)]
    const { question, options } = quiz

    const correctPosition = options.findIndex(({ correct }) => correct)

    const { message_id: quizMessageId } = await bot.telegram.sendQuiz(
      GROUP_CHAT_ID,
      question,
      options.map(({ text }) => text),
      { correct_option_id: correctPosition, is_anonymous: false, data: { a: 1 } }
    )
    bot.telegram.sendMessage(
      GROUP_CHAT_ID,
      initialPodium,
      { reply_to_message_id: quizMessageId }
    )
  }).start()
}

module.exports = sendQuiz
