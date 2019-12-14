const new_chat_members = require('./new_chat_members')
const photo = require('./photo')

const events = bot => {
  bot.on('new_chat_members', new_chat_members)
  bot.on('photo', photo(bot))
}

module.exports = events
