const dotenv = require('dotenv')

function environment () {
  return dotenv.config()
}

module.exports = environment
