'use strict'

const { default: got } = require('got')

const TensorFriendAPI = got.extend({
  responseType: 'json',
  prefixUrl: process.env.TENSORFRIEND_API_URL
})

module.exports = TensorFriendAPI
