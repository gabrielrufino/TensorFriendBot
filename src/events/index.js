const new_chat_members = require('./new_chat_members')

const events = bot => {
  bot.on('new_chat_members', new_chat_members)
}

module.exports = events
