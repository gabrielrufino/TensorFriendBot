require('dotenv').config()

const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.command('ping', (ctx) => ctx.reply('Estou vivo!'))
bot.on('new_chat_members', (ctx) => {
  ctx.reply('Bem vindo ao TensorFlow.js Brasil! :D')
})

bot.launch()
  .then(() => {
    console.log('TensorFriend funcionando!')
  })