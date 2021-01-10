const classifiers = require('../models/classifiers/')
const intentions = require('../data/intentions.json')

const text = context => {
  const { text } = context.update.message

  const classifications = classifiers.text.getClassifications(text)
  console.log(classifications)

  const firstClassification = classifications[0]
  const lastClassification = classifications[classifications.length - 1]

  if ((firstClassification.value - lastClassification.value) > 0.0001) {
    const intention = intentions.find(intention => intention.code === firstClassification.label)
    const { answers } = intention

    const answer = answers[Math.floor(Math.random() * answers.length)]
    context.reply(answer)
  }
}

module.exports = text