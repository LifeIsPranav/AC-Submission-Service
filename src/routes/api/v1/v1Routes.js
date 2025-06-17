async function v1Router(fastify, options) {
  fastify.register(require('./test/testRoutes'), { prefix: '/test' })
}

module.exports = v1Router