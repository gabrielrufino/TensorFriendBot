const app = require('./app')
const bootstrap = require('./bootstrap')

bootstrap()
  .then(app)
  .catch(console.error)
