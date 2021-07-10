import path from "path";


export const server = require('fastify')({
  logger: true
})

server.register(import('fastify-static'), {
  root: path.join(__dirname, '..', '..', 'client', 'dist'),
})

server.get('/api', async (request, reply) => {
  reply.type('application/json').code(200)
  return { message: 'doge-sb api' }
});

server.get('*', async (request, reply) => {
  reply.type('application/json').code(200)
  return reply.sendFile('index.html')
});
