require('dotenv').config()

const Telegraf = require('telegraf')
const commands = require('./src/commands')

const bot = new Telegraf(process.env.BOT_TOKEN)

commands(bot)

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
