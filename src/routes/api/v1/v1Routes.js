async function v1Router(fastify, options) {
  fastify.register(require('./submissionRoutes'), { prefix: '/submissions' })
}

module.exports = v1Router