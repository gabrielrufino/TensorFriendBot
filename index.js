'use strict'

const bootstrap = require('./bootstrap')

bootstrap()
  .then(require('./app'))
  .catch(console.error)
