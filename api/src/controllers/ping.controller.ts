import { FastifyRequest, FastifyReply } from 'fastify';

export async function ping(
  request: FastifyRequest,
  reply: FastifyReply
) {
  return reply.code(200).send({ message: 'PONG' });
}

export async function pingAuth(
  request: FastifyRequest,
  reply: FastifyReply
) {
  // Auth0 adds the validated token claims to request.user
  return reply.send({
    message: 'PONG (protected)',
    user: request.user
  });
}