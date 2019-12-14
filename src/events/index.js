const newChatMembers = require('./new_chat_members')
const photo = require('./photo')

const events = bot => {
  bot.on('new_chat_members', newChatMembers)
  bot.on('photo', photo(bot))
}

module.exports = events
