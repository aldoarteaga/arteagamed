import type { FastifyInstance, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';
import jwksClient from 'jwks-rsa';
import jwt from 'jsonwebtoken';
import { config } from '../config.js';

const JWKS_URI = `https://cognito-idp.${config.AWS_REGION}.amazonaws.com/${config.COGNITO_USER_POOL_ID}/.well-known/jwks.json`;

const client = jwksClient({
  jwksUri: JWKS_URI,
  cache: true,
  cacheMaxAge: 10 * 60 * 1000, // 10 minutes
  rateLimit: true,
});

function getSigningKey(header: jwt.JwtHeader): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!header.kid) return reject(new Error('No kid in token header'));
    client.getSigningKey(header.kid, (err, key) => {
      if (err || !key) return reject(err ?? new Error('Key not found'));
      resolve(key.getPublicKey());
    });
  });
}

export interface CognitoClaims {
  sub: string;
  email: string;
  'cognito:username': string;
  token_use: string;
  iss: string;
  aud: string;
  exp: number;
  iat: number;
}

declare module 'fastify' {
  interface FastifyRequest {
    cognitoClaims: CognitoClaims;
  }
}

async function authPlugin(fastify: FastifyInstance) {
  fastify.decorateRequest('cognitoClaims', null);

  fastify.addHook('preHandler', async (request: FastifyRequest, reply) => {
    const routeConfig = request.routeOptions.config as Record<string, unknown>;
    if (routeConfig['public'] === true) return;

    const authHeader = request.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return reply.status(401).send({ success: false, error: { code: 'UNAUTHORIZED', message: 'Missing token', requestId: request.id } });
    }

    const token = authHeader.slice(7);

    try {
      const decoded = await new Promise<CognitoClaims>((resolve, reject) => {
        jwt.verify(token, getSigningKey, {
          issuer: `https://cognito-idp.${config.AWS_REGION}.amazonaws.com/${config.COGNITO_USER_POOL_ID}`,
          audience: config.COGNITO_CLIENT_ID,
        }, (err, payload) => {
          if (err || !payload) return reject(err);
          resolve(payload as CognitoClaims);
        });
      });

      if (decoded.token_use !== 'access') {
        return reply.status(401).send({ success: false, error: { code: 'UNAUTHORIZED', message: 'Invalid token type', requestId: request.id } });
      }

      request.cognitoClaims = decoded;
    } catch {
      return reply.status(401).send({ success: false, error: { code: 'UNAUTHORIZED', message: 'Invalid token', requestId: request.id } });
    }
  });
}

export default fp(authPlugin, { name: 'auth' });
