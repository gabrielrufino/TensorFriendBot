require('dotenv').config()

const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.on('new_chat_members', (ctx) => {
  ctx.reply('Bem vindo ao TensorFlow.js Brasil! :D')
})

bot.launch()
