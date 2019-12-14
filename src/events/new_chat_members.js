const newChatMembers = context => {
  context.reply(
    `Olá, ${context.from.first_name}. Bem vindo ao TensorFlow.js Brasil! :D`
  )
}

module.exports = newChatMembers
