import type { FastifyInstance } from 'fastify';
import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { randomUUID } from 'crypto';
import { z } from 'zod';
import { db } from '../../db/index.js';
import { config } from '../../config.js';

const s3 = new S3Client({ region: config.AWS_REGION });

const RequestUploadSchema = z.object({
  filename: z.string().min(1).max(255),
  mimeType: z.string().min(1).max(100),
  sizeBytes: z.number().int().positive().max(50 * 1024 * 1024), // 50 MB max
  category: z.enum(['xray', 'lab_result', 'prescription', 'report', 'other']),
});

export default async function documentRoutes(fastify: FastifyInstance) {
  // POST /v1/documents/upload-url — request a presigned S3 upload URL
  fastify.post('/documents/upload-url', async (request, reply) => {
    const { sub } = request.cognitoClaims;
    const body = RequestUploadSchema.parse(request.body);

    const patientResult = await db.query(
      'SELECT id FROM patients WHERE cognito_sub = $1',
      [sub],
    );
    if (patientResult.rowCount === 0) {
      return reply.status(404).send({ success: false, error: { code: 'NOT_FOUND', message: 'Patient not found', requestId: request.id } });
    }

    const patientId = patientResult.rows[0].id as string;
    const documentId = randomUUID();
    const s3Key = `patients/${patientId}/documents/${documentId}`;

    const uploadUrl = await getSignedUrl(
      s3,
      new PutObjectCommand({
        Bucket: config.S3_DOCUMENTS_BUCKET,
        Key: s3Key,
        ContentType: body.mimeType,
        ServerSideEncryption: 'aws:kms',
        Metadata: {
          'patient-id': patientId,
          'document-id': documentId,
          'original-filename': encodeURIComponent(body.filename),
        },
      }),
      { expiresIn: config.S3_PRESIGN_EXPIRY_SECONDS },
    );

    // Pre-create the document record; a Lambda on S3 event confirms the upload
    await db.query(
      `INSERT INTO documents (id, patient_id, s3_key, filename, mime_type, size_bytes, category)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [documentId, patientId, s3Key, body.filename, body.mimeType, body.sizeBytes, body.category],
    );

    return reply.status(201).send({
      success: true,
      data: {
        uploadUrl,
        documentId,
        expiresAt: new Date(Date.now() + config.S3_PRESIGN_EXPIRY_SECONDS * 1000).toISOString(),
      },
    });
  });

  // GET /v1/documents — list patient documents
  fastify.get('/documents', async (request, reply) => {
    const { sub } = request.cognitoClaims;

    const result = await db.query(
      `SELECT d.id, d.filename, d.mime_type, d.size_bytes, d.category, d.uploaded_at
       FROM documents d
       JOIN patients p ON p.id = d.patient_id
       WHERE p.cognito_sub = $1
       ORDER BY d.uploaded_at DESC`,
      [sub],
    );

    return reply.send({ success: true, data: result.rows });
  });

  // GET /v1/documents/:id/download-url — get presigned download URL
  fastify.get('/documents/:id/download-url', async (request, reply) => {
    const { sub } = request.cognitoClaims;
    const { id } = request.params as { id: string };

    const result = await db.query(
      `SELECT d.s3_key FROM documents d
       JOIN patients p ON p.id = d.patient_id
       WHERE d.id = $1 AND p.cognito_sub = $2`,
      [id, sub],
    );

    if (result.rowCount === 0) {
      return reply.status(404).send({ success: false, error: { code: 'NOT_FOUND', message: 'Document not found', requestId: request.id } });
    }

    const downloadUrl = await getSignedUrl(
      s3,
      new GetObjectCommand({ Bucket: config.S3_DOCUMENTS_BUCKET, Key: result.rows[0].s3_key as string }),
      { expiresIn: config.S3_PRESIGN_EXPIRY_SECONDS },
    );

    return reply.send({ success: true, data: { downloadUrl, expiresAt: new Date(Date.now() + config.S3_PRESIGN_EXPIRY_SECONDS * 1000).toISOString() } });
  });

  // DELETE /v1/documents/:id
  fastify.delete('/documents/:id', async (request, reply) => {
    const { sub } = request.cognitoClaims;
    const { id } = request.params as { id: string };

    const result = await db.query(
      `SELECT d.id, d.s3_key FROM documents d
       JOIN patients p ON p.id = d.patient_id
       WHERE d.id = $1 AND p.cognito_sub = $2`,
      [id, sub],
    );

    if (result.rowCount === 0) {
      return reply.status(404).send({ success: false, error: { code: 'NOT_FOUND', message: 'Document not found', requestId: request.id } });
    }

    await s3.send(new DeleteObjectCommand({ Bucket: config.S3_DOCUMENTS_BUCKET, Key: result.rows[0].s3_key as string }));
    await db.query('DELETE FROM documents WHERE id = $1', [id]);

    return reply.send({ success: true, data: { deleted: true } });
  });
}
