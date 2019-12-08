const ping = require('./ping')

const commands = bot => {
  bot.command('ping', ping)
}

module.exports = commands
