require('dotenv').config()

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

bot.catch(error => {
  console.log('Algo deu errado!', error)
})

bot.launch()
  .then(() => {
    console.log('TensorFriend funcionando!')
  })
  .catch(error => {
    console.error(error)
  })
