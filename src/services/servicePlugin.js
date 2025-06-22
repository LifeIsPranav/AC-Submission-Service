const fastifyPlugin = require('fastify-plugin')
const submissionService = require('./submissionService')

async function servicePlugin(fastify, options){
  fastify.decorate('submissionService', new submissionService(this.submissionRepository))
  console.log("Service Plugin Invoked!")
  // console.log(fastify)
}

module.exports = fastifyPlugin(servicePlugin)
// module.exports = servicePlugin