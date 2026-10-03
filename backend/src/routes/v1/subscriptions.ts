import type { FastifyInstance } from 'fastify';
import Stripe from 'stripe';
import { CreateSubscriptionSchema, PLAN_DETAILS } from '@eart/shared-types';
import { db } from '../../db/index.js';
import { config } from '../../config.js';

const stripe = new Stripe(config.STRIPE_SECRET_KEY, { apiVersion: '2024-11-20.acacia' });

const STRIPE_PRICE_MAP: Record<string, string> = {
  basic: config.STRIPE_PRICE_BASIC,
  integral: config.STRIPE_PRICE_INTEGRAL,
  continuada: config.STRIPE_PRICE_CONTINUADA,
  avanzada: config.STRIPE_PRICE_AVANZADA,
};

export default async function subscriptionRoutes(fastify: FastifyInstance) {
  // GET /v1/subscriptions/status
  fastify.get('/subscriptions/status', async (request, reply) => {
    const { sub } = request.cognitoClaims;

    const result = await db.query(
      `SELECT stripe_customer_id, stripe_subscription_id, subscription_status, subscription_plan
       FROM patients WHERE cognito_sub = $1`,
      [sub],
    );

    if (result.rowCount === 0) {
      return reply.status(404).send({ success: false, error: { code: 'NOT_FOUND', message: 'Patient not found', requestId: request.id } });
    }

    return reply.send({ success: true, data: result.rows[0] });
  });

  // POST /v1/subscriptions — create/change subscription
  fastify.post('/subscriptions', async (request, reply) => {
    const { sub, email } = request.cognitoClaims;
    const body = CreateSubscriptionSchema.parse(request.body);
    const priceId = STRIPE_PRICE_MAP[body.planId];

    const patientResult = await db.query(
      'SELECT id, stripe_customer_id FROM patients WHERE cognito_sub = $1',
      [sub],
    );
    if (patientResult.rowCount === 0) {
      return reply.status(404).send({ success: false, error: { code: 'NOT_FOUND', message: 'Patient not found', requestId: request.id } });
    }

    const patient = patientResult.rows[0] as { id: string; stripe_customer_id: string | null };

    let customerId = patient.stripe_customer_id;

    if (!customerId) {
      const customer = await stripe.customers.create(
        { email, metadata: { patient_id: patient.id } },
        { idempotencyKey: `create-customer-${patient.id}` },
      );
      customerId = customer.id;
      await db.query('UPDATE patients SET stripe_customer_id = $1 WHERE id = $2', [customerId, patient.id]);
    }

    await stripe.paymentMethods.attach(body.paymentMethodId, { customer: customerId });
    await stripe.customers.update(customerId, { invoice_settings: { default_payment_method: body.paymentMethodId } });

    const planDetails = PLAN_DETAILS[body.planId];

    const subscription = await stripe.subscriptions.create(
      {
        customer: customerId,
        items: [{ price: priceId }],
        payment_settings: { payment_method_types: ['card'], save_default_payment_method: 'on_subscription' },
        add_invoice_items: [
          {
            price_data: {
              currency: 'eur',
              product_data: { name: `${body.planId} onboarding fee` },
              unit_amount: planDetails.firstMonthPriceCents - planDetails.monthlyPriceCents,
            },
          },
        ],
        expand: ['latest_invoice.payment_intent'],
      },
      { idempotencyKey: `create-sub-${patient.id}-${body.planId}` },
    );

    await db.query(
      `UPDATE patients SET stripe_subscription_id = $1, subscription_status = $2, subscription_plan = $3
       WHERE id = $4`,
      [subscription.id, subscription.status, body.planId, patient.id],
    );

    return reply.status(201).send({ success: true, data: { subscriptionId: subscription.id, status: subscription.status } });
  });

  // DELETE /v1/subscriptions — cancel at period end
  fastify.delete('/subscriptions', async (request, reply) => {
    const { sub } = request.cognitoClaims;

    const result = await db.query(
      'SELECT stripe_subscription_id FROM patients WHERE cognito_sub = $1',
      [sub],
    );

    if (result.rowCount === 0 || !result.rows[0].stripe_subscription_id) {
      return reply.status(404).send({ success: false, error: { code: 'NOT_FOUND', message: 'No active subscription', requestId: request.id } });
    }

    await stripe.subscriptions.update(
      result.rows[0].stripe_subscription_id as string,
      { cancel_at_period_end: true },
      { idempotencyKey: `cancel-sub-${result.rows[0].stripe_subscription_id}` },
    );

    return reply.send({ success: true, data: { canceledAtPeriodEnd: true } });
  });
}
