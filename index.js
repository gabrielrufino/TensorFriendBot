require('dotenv').config()

const Telegraf = require('telegraf')
const api = require('./src/api')
const commands = require('./src/commands')
const events = require('./src/events')
const routines = require('./src/routines')

const bot = new Telegraf(process.env.BOT_TOKEN)

const data = {
  news: []
}

api()
commands(bot)
routines(bot, data)
events(bot)

bot.catch(error => {
  console.log('Algo deu errado!', error)
})

bot.launch()
  .then(() => {
    console.log('TensorFriend funcionando!')
  })
