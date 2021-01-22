'use strict'

const newChatMembers = context => {
  const { first_name: firstName } = context.from

  const responses = [
    [
      `Olá, ${firstName}. Seja bem vindo(a) ao TensorFlow.js Brasil! 😄`,
      'Conta um pouco sobre quem é você!'
    ],
    [
      `Seja muito bem vindo ao TensorFlow.js Brasil, ${firstName}.`,
      'A proposta dessa comunidade é o compartilhamento de conhecimentos em torno de TensorFlow, Machine Leaning, Javascript e afins 🧐'
    ],
    [
      `Hey, ${firstName}. Obrigado por juntar-se à nossa comunidade. 😊`,
      'Tenho certeza que você tem muito a contribuir e aprender conosco!'
    ],
    [
      '+1 Membro 😍 Uhuuul!',
      `Seja muito bem vindo(a) ao TensorFlow.js Brasil, ${firstName}.`
    ]
  ]

  const response = responses[Math.floor(Math.random() * responses.length)]

  response.forEach(async text => {
    await context.reply(text)
  })
}

module.exports = newChatMembers
