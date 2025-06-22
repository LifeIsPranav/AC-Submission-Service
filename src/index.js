const fastify = require("fastify")({    // Calling the fastify Constructor
  logger: true  
})

const app = require('./app')
const connectDB = require("./config/dbConfig")
const { PORT } = require("./config/serverConfig")

const port = PORT

fastify.register(app)

fastify.get('/', (req, res) => {
  res.send({ data: 'pong' })
})

fastify.listen({ port }, async(err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  console.log(`Server up at ${port}`)
  await connectDB()
})