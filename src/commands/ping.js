const ping = context => {
  console.log(context.update.message.chat.id)
  context.reply('Estou vivo!')
}

module.exports = ping
