import path from "path";
import fastify, { FastifyInstance } from "fastify";
import { config } from "./_config";

export const initServer = async () => {
  /**
   * Exported instance of our fastify.
   * @param config The configration for fastify.
   */
  const server: FastifyInstance = fastify(config);

  /**
   * Setup static directory.
   */
  server.register(import('fastify-static'), {
    root: path.join(__dirname, '..', '..', 'client', 'dist'),
  })

  /**
   * API Base URL Endpoint
   */
  server.get('/api', async (_request, reply) => {
    reply.type('application/json').code(200)
    return { message: 'doge-sb api' }
  });

  /**
   * Send all API base requests to client.
   */
  server.get('*', async (_request, reply) => {
    reply.type('application/json').code(200)
    return reply.sendFile('index.html')
  });

  /**
   * Ensure the server is ready and export.
   */
  await server.ready();

  return server;
}

/**
 * A utility function to start the server.
 * @param server An instance of Fastify. 
 */
export const startServer = async (server: FastifyInstance) => {
  await server.listen(3000);
}