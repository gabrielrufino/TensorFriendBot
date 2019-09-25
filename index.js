require('dotenv').config()

const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.command('ping', context => context.reply('Estou vivo!'))
bot.on('new_chat_members', (context) => {
  context.reply(
    `Olá, ${context.from.first_name}. Bem vindo ao TensorFlow.js Brasil! :D`
  )
})

bot.launch()
  .then(() => {
    console.log('TensorFriend funcionando!')
  })