import Auth0 from '@auth0/auth0-fastify-api';
import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';

const authPlugin = fp(async (app: FastifyInstance) => {
  app.register(Auth0, {
    domain: process.env.AUTH0_DOMAIN!,
    audience: process.env.AUTH0_AUDIENCE!,
    });
});

export default authPlugin;