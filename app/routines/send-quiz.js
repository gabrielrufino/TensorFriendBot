'use strict'

const CronJob = require('cron').CronJob

const quizzes = require('../data/quizzes.json')
const { generateQuizPodium, getRandomPosition } = require('../helpers')

const sendQuiz = (bot, database) => {
  const { GROUP_CHAT_ID } = process.env

  new CronJob('0 10 18 * * 5', async () => {
    const quiz = quizzes[getRandomPosition(quizzes)]
    const { question, options } = quiz

    const correctPosition = options.findIndex(({ correct }) => correct)

    const { message_id: quizMessageId, poll: { id: pollId } } = await bot.telegram.sendQuiz(
      GROUP_CHAT_ID,
      question,
      options.map(({ text }) => text),
      { correct_option_id: correctPosition, is_anonymous: false, data: { a: 1 } }
    )
    const { message_id: podiumMessageId } = await bot.telegram.sendMessage(
      GROUP_CHAT_ID,
      generateQuizPodium(),
      { reply_to_message_id: quizMessageId }
    )

    database
      .collection('quizzes_history')
      .insertOne({
        quiz,
        podium: {
          first: null,
          second: null,
          third: null
        },
        quiz_message_id: quizMessageId,
        podium_message_id: podiumMessageId,
        poll_id: pollId
      })
  }).start()
}

module.exports = sendQuiz
