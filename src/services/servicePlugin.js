const fastifyPlugin = require('fastify-plugin')
const testService = require('./testService')

async function servicePlugin(fastify, options){
  fastify.decorate('testService', new testService("InjectingRubbish"))
  console.log("Service Plugin Invoked!")
  // console.log(fastify)
}

module.exports = fastifyPlugin(servicePlugin)
// module.exports = servicePlugin