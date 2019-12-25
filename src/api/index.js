const express = require('express')

const app = express()

app.get('/', (_, response) => {
  response.json({ alive: true })
})

app.listen(process.env.PORT || 8080)
