'use strict'

const natural = require('natural')

const TensorFriendAPI = require('../../services/TensorFriendAPI')

const classifier = new natural.BayesClassifier()

TensorFriendAPI
  .get('intentions')
  .then(({ body: intentions }) => {
    intentions.forEach(({ alternatives, code }) => {
      alternatives.forEach(alternative => {
        classifier.addDocument(alternative, code)
      })
    })

    classifier.train()
  })
  .catch(() => {
    console.error('Error when training intentions model')
  })

module.exports = classifier
