const natural = require('natural')

const intentions = require('../../data/intentions.json')

const classifier = new natural.BayesClassifier()

intentions.forEach(intention => {
  intention.alternatives.forEach(alternative => {
    classifier.addDocument(alternative, intention.code)
  })
})

classifier.train()

module.exports = classifier
