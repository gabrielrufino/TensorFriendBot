const CronJob = require('cron').CronJob

const insight = (bot) => {
  const { GROUP_CHAT_ID } = process.env

  const insights = [
    `
    Toda grande jornada começa com um pequeno passo! Aprenda a instalar o TensorFlow.js no Browser ou no Node.js: https://www.tensorflow.org/js/tutorials/setup
    `,
    `
    Sabia que o TensorFlow.js é dividido em duas APIs: A API Principal e a API de Camadas. Saiba mais: https://www.tensorflow.org/js/guide/tensors_operations    
    `,
    `
    Um modelo no TensorFlow.js nada mais é do que uma rede neural com parâmetros "aprendíveis" que mapeiam uma entrada para uma saída. Se interessou? Clica aqui abaixo: https://www.tensorflow.org/js/guide/models_and_layers
    `,
    `
    Um modelo, quando é iniciado, ainda tem seu parâmetros "burros". Por isso, precisamos treiná-los com dados: https://www.tensorflow.org/js/guide/train_models
    `,
    `
    Conheça o lado negro da força. TensorFlow.js no Node.js: https://www.tensorflow.org/js/guide/nodejs
    `
  ]

  new CronJob('10 35 9 * * *', () => {
    const response = insights[Math.floor(Math.random() * insights.length)]

    bot.telegram.sendMessage(GROUP_CHAT_ID, response)
  }).start()
}

module.exports = insight
