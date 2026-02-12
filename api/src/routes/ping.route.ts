import { FastifyInstance } from 'fastify';
import { ping, pingAuth } from '../controllers/ping.controller';
import { pingSchema } from '../schemas/ping.schema';

declare module 'fastify' {
  interface FastifyInstance {
    requireAuth(): any;
  }
}

export default async function pingRoutes(app: FastifyInstance) {
  app.get(
    '/ping',
    { schema: pingSchema },
    ping
  );
  app.get(
    '/ping-protected',
    { preHandler: app.requireAuth() },
    pingAuth
  )
}