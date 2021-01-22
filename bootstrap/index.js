'use strict'

const database = require('./database')
const environment = require('./environment')

async function bootstrap () {
  environment()

  return {
    database: await database()
  }
}

module.exports = bootstrap
