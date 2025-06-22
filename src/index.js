const fastify = require("fastify")({    // Calling the fastify Constructor
  logger: true  
})

const app = require('./app')
const { PORT } = require("./config/serverConfig")

const port = PORT

fastify.register(app)

fastify.get('/', (req, res) => {
  res.send({ data: 'pong' })
})

fastify.listen({ port }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  console.log(`Server up at ${port}`)
})