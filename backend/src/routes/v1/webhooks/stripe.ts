import type { FastifyInstance } from 'fastify';
import Stripe from 'stripe';
import { db } from '../../../db/index.js';
import { config } from '../../../config.js';

const stripe = new Stripe(config.STRIPE_SECRET_KEY, { apiVersion: '2024-11-20.acacia' });

const DEDUP_TTL_SECONDS = 86_400; // 24 h

export default async function stripeWebhookRoutes(fastify: FastifyInstance) {
  fastify.post(
    '/webhooks/stripe',
    { config: { public: true }, bodyLimit: 65_536 },
    async (request, reply) => {
      const sig = request.headers['stripe-signature'];
      if (!sig || typeof sig !== 'string') {
        return reply.status(400).send({ error: 'Missing stripe-signature header' });
      }

      let event: Stripe.Event;
      try {
        event = stripe.webhooks.constructEvent(request.rawBody as string, sig, config.STRIPE_WEBHOOK_SECRET);
      } catch {
        return reply.status(400).send({ error: 'Webhook signature verification failed' });
      }

      // Deduplicate via Redis — key: stripe-event:<id>
      const redis = fastify.redis;
      const dedupKey = `stripe-event:${event.id}`;
      const alreadyProcessed = await redis.get(dedupKey);
      if (alreadyProcessed) {
        return reply.send({ received: true, deduplicated: true });
      }
      await redis.set(dedupKey, '1', { EX: DEDUP_TTL_SECONDS });

      try {
        await handleEvent(event);
      } catch (err) {
        request.log.error({ err, eventId: event.id, eventType: event.type }, 'Stripe webhook handler failed');
        // Delete dedup key so the event can be retried
        await redis.del(dedupKey);
        return reply.status(500).send({ error: 'Internal error processing event' });
      }

      return reply.send({ received: true });
    },
  );
}

async function handleEvent(event: Stripe.Event) {
  switch (event.type) {
    case 'invoice.payment_succeeded': {
      const invoice = event.data.object as Stripe.Invoice;
      if (invoice.subscription) {
        await db.query(
          `UPDATE patients SET subscription_status = 'active'
           WHERE stripe_subscription_id = $1`,
          [invoice.subscription],
        );
      }
      break;
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object as Stripe.Invoice;
      if (invoice.subscription) {
        await db.query(
          `UPDATE patients SET subscription_status = 'past_due'
           WHERE stripe_subscription_id = $1`,
          [invoice.subscription],
        );
      }
      break;
    }

    case 'customer.subscription.updated': {
      const sub = event.data.object as Stripe.Subscription;
      await db.query(
        `UPDATE patients SET subscription_status = $1
         WHERE stripe_subscription_id = $2`,
        [sub.status, sub.id],
      );
      break;
    }

    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription;
      await db.query(
        `UPDATE patients SET subscription_status = 'canceled', subscription_plan = NULL
         WHERE stripe_subscription_id = $1`,
        [sub.id],
      );
      break;
    }
  }
}
