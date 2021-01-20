const leftChatMember = require('./left_chat_member')
const newChatMembers = require('./new_chat_members')
const photo = require('./photo')
const pollAnswer = require('./poll_answer')
const text = require('./text')

const events = bot => {
  bot.on('left_chat_member', leftChatMember)
  bot.on('new_chat_members', newChatMembers)
  bot.on('photo', photo(bot))
  bot.on('poll_answer', pollAnswer(bot))
  bot.on('text', text)
}

module.exports = events
