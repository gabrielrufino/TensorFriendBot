'use strict'

const natural = require('natural')

const intentions = require('../../data/intentions.json')

const classifier = new natural.BayesClassifier()

intentions.forEach(({ alternatives, code }) => {
  alternatives.forEach(alternative => {
    classifier.addDocument(alternative, code)
  })
})

classifier.train()

module.exports = classifier
