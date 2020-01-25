const mongodb = require('mongodb')

async function database () {
  const { DATABASE_NAME, DATABASE_URL } = process.env
  const MongoClient = mongodb.MongoClient

  const client = new MongoClient(DATABASE_URL, { useUnifiedTopology: true })

  try {
    await client.connect()

    const database = client.db(DATABASE_NAME)

    return database
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = database
