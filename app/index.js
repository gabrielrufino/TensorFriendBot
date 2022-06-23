'use strict'

const { Telegraf, session } = require('telegraf')

const commands = require('./commands')
const events = require('./events')
const helpers = require('./helpers')
const routines = require('./routines')

function app ({ database, cooldown }) {
  const bot = new Telegraf(process.env.BOT_TOKEN)

  bot.use(session())

  commands(bot)
  routines(bot, helpers, database)
  events(bot, database)

  bot.catch(error => {
    console.error('Erro no telegraf\n', error)
  })

  bot.launch()
    .then(() => {
      cooldown({ bot })
      console.log('TensorFriend funcionando!')
    })
    .catch(error => {
      console.error(error)
    })
}

module.exports = app
