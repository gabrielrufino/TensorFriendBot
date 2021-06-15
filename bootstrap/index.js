'use strict'

const cooldown = require('./cooldown')
const database = require('./database')
const environment = require('./environment')

async function bootstrap () {
  environment()

  return {
    cooldown,
    database: await database()
  }
}

module.exports = bootstrap
