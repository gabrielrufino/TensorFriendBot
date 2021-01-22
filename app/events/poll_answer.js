'use strict'

const { generateQuizPodium } = require('../helpers')

const pollAnswer = (bot, database) => async context => {
  const { GROUP_CHAT_ID } = process.env

  const {
    poll_id: pollId,
    option_ids: optionIds,
    user
  } = context.update.poll_answer

  try {
    const { quiz: { options }, podium, podium_message_id: podiumMessageId } = await database
      .collection('quizzes_history')
      .findOne({ poll_id: pollId })

    if (optionIds[0] === options.findIndex(({ correct }) => correct)) {
      if (!podium.first) {
        podium.first = user
      } else if (!podium.second) {
        podium.second = user
      } else if (!podium.third) {
        podium.third = user
      }
    }

    bot.telegram.editMessageText(
      GROUP_CHAT_ID,
      podiumMessageId,
      null,
      generateQuizPodium(podium)
    )

    database
      .collection('quizzes_history')
      .updateOne({ podium_message_id: podiumMessageId }, { $set: { podium } })
  } catch (error) {
    console.error(error)
  }
}

module.exports = pollAnswer
