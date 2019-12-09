require('dotenv').config()

const Telegraf = require('telegraf')
const commands = require('./src/commands')
const routines = require('./src/routines')

const bot = new Telegraf(process.env.BOT_TOKEN)

const data = {
  news: []
}

commands(bot)
routines(bot, data)

bot.on('new_chat_members', (context) => {
  context.reply(
    `Olá, ${context.from.first_name}. Bem vindo ao TensorFlow.js Brasil! :D`
  )
})

bot.catch(error => {
  console.log('Algo deu errado!', error)
})

bot.launch()
  .then(() => {
    console.log('TensorFriend funcionando!')
  })
