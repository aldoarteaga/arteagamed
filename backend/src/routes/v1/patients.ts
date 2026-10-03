import type { FastifyInstance } from 'fastify';
import { db } from '../../db/index.js';
import { PatientUpdateSchema } from '@eart/shared-types';

export default async function patientRoutes(fastify: FastifyInstance) {
  // GET /v1/patients/me
  fastify.get('/patients/me', async (request, reply) => {
    const { sub } = request.cognitoClaims;

    const result = await db.query(
      `SELECT id, cognito_sub, full_name, date_of_birth, address, country_of_origin,
              preferred_language, phone, email, has_spanish_insurance, permanent_medications,
              subscription_status, subscription_plan, consent_version, consent_at,
              created_at, updated_at
       FROM patients WHERE cognito_sub = $1`,
      [sub],
    );

    if (result.rowCount === 0) {
      return reply.status(404).send({ success: false, error: { code: 'NOT_FOUND', message: 'Patient not found', requestId: request.id } });
    }

    await db.query(
      `INSERT INTO audit_log (patient_id, actor_sub, action, resource, resource_id, ip_address)
       VALUES ($1, $2, 'READ', 'patient_profile', $1, $3)`,
      [result.rows[0].id, sub, request.ip],
    );

    return reply.send({ success: true, data: result.rows[0] });
  });

  // PATCH /v1/patients/me
  fastify.patch('/patients/me', async (request, reply) => {
    const { sub } = request.cognitoClaims;
    const body = PatientUpdateSchema.parse(request.body);

    if (Object.keys(body).length === 0) {
      return reply.status(400).send({ success: false, error: { code: 'VALIDATION_ERROR', message: 'No fields to update', requestId: request.id } });
    }

    const fields = Object.keys(body) as (keyof typeof body)[];
    const setClauses = fields.map((k, i) => `${toSnakeCase(k)} = $${i + 2}`).join(', ');
    const values = fields.map((k) => body[k]);

    const result = await db.query(
      `UPDATE patients SET ${setClauses} WHERE cognito_sub = $1 RETURNING id`,
      [sub, ...values],
    );

    if (result.rowCount === 0) {
      return reply.status(404).send({ success: false, error: { code: 'NOT_FOUND', message: 'Patient not found', requestId: request.id } });
    }

    await db.query(
      `INSERT INTO audit_log (patient_id, actor_sub, action, resource, resource_id, ip_address)
       VALUES ($1, $2, 'UPDATE', 'patient_profile', $1, $3)`,
      [result.rows[0].id, sub, request.ip],
    );

    return reply.send({ success: true, data: { updated: true } });
  });

  // DELETE /v1/patients/me — GDPR Art. 17 right to erasure
  fastify.delete('/patients/me', async (request, reply) => {
    const { sub } = request.cognitoClaims;

    // Anonymise instead of hard-delete to preserve audit trail integrity
    await db.query(
      `UPDATE patients SET
         full_name = 'DELETED',
         date_of_birth = '1900-01-01',
         address = 'DELETED',
         phone = 'DELETED',
         email = 'DELETED',
         permanent_medications = '{}',
         cognito_sub = 'DELETED_' || id::text
       WHERE cognito_sub = $1`,
      [sub],
    );

    return reply.send({ success: true, data: { deleted: true } });
  });
}

function toSnakeCase(str: string): string {
  return str.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);
}
