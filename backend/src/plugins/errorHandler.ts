import type { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import { ZodError } from 'zod';

async function errorHandlerPlugin(fastify: FastifyInstance) {
  fastify.setErrorHandler((error, request, reply) => {
    const requestId = request.id;
    const log = request.log;

    if (error instanceof ZodError) {
      return reply.status(400).send({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Request validation failed',
          details: error.flatten().fieldErrors,
          requestId,
        },
      });
    }

    if (error.statusCode && error.statusCode < 500) {
      return reply.status(error.statusCode).send({
        success: false,
        error: { code: 'CLIENT_ERROR', message: error.message, requestId },
      });
    }

    // 500 — log full error, never expose internals
    log.error({ err: error, requestId }, 'Unhandled server error');
    return reply.status(500).send({
      success: false,
      error: { code: 'INTERNAL_ERROR', message: 'An unexpected error occurred', requestId },
    });
  });
}

export default fp(errorHandlerPlugin, { name: 'errorHandler' });
