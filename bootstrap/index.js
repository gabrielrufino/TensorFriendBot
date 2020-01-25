const database = require('./database')

async function bootstrap () {
  return {
    database: await database()
  }
}

module.exports = bootstrap
