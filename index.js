require('dotenv').config()

const bootstrap = require('./bootstrap')

bootstrap()
  .then(() => console.log('Deu certo'))
const Telegraf = require('telegraf')
const api = require('./src/api')
const commands = require('./src/commands')
const events = require('./src/events')
const helpers = require('./src/helpers')
const routines = require('./src/routines')

const bot = new Telegraf(process.env.BOT_TOKEN)

api()
commands(bot)
routines(bot, helpers)
events(bot)

bot.catch(async error => {
  console.error('Erro no telegraf\n', error)
})

bot.launch()
  .then(() => {
    console.log('TensorFriend funcionando!')
  })
  .catch(error => {
    console.error(error)
  })
