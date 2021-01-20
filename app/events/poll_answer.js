const db = require('../db')
const { generateQuizPodium } = require('../helpers')

const pollAnswer = bot => context => {
  const { GROUP_CHAT_ID } = process.env

  const {
    poll_id: pollId,
    option_ids: optionIds,
    user
  } = context.update.poll_answer

  const [{ quiz: { options }, podium, podium_message_id: podiumMessageId }] = db
    .get('quizzes_history')
    .filter({ poll_id: pollId })
    .value()

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

  db.get('quizzes_history')
    .find({ podium_message_id: podiumMessageId })
    .assign({ podium })
    .write()
}

module.exports = pollAnswer
