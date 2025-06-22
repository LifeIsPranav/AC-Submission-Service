const fastifyPlugin = require("fastify-plugin");

/**
 * 
 * @param {Fastify object} fastify 
 * @param {*} options 
 */

async function app(fastify, options) {
  fastify.register(require('@fastify/cors')) 

  fastify.register(require('./repository/repositoryPlugin'))
  
  fastify.register(require('./services/servicePlugin'))
  
  // Registering Routes
  // fastify.register(require('./routes/api/test/testRoutes'), { prefix: '/test' })
  fastify.register(require('./routes/api/apiRoutes'), { prefix: '/api' })
  // fastify.register(require('./routes/testRoutes'))

  // fastify.register(require('./routes/todoRoutes'), { prefix: '/todos' })

}

module.exports = fastifyPlugin(app)