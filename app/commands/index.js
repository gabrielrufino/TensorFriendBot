'use strict'

const admins = require('./admins')
const ping = require('./ping')

const commands = bot => {
  bot.command('admins', admins({ bot }))
  bot.command('ping', ping)
}

module.exports = commands
