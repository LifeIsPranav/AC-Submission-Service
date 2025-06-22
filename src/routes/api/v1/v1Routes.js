async function v1Router(fastify, options) {
  fastify.register(require('./test/testRoutes'), { prefix: '/test' })
  fastify.register(require('./submissionRoutes'), { prefix: '/submissions' })
}

module.exports = v1Router