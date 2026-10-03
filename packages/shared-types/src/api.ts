import { z } from 'zod';

export const ApiSuccessSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.literal(true),
    data: dataSchema,
  });

export const ApiErrorSchema = z.object({
  success: z.literal(false),
  error: z.object({
    code: z.string(),
    message: z.string(),
    requestId: z.string(),
  }),
});

export type ApiError = z.infer<typeof ApiErrorSchema>;

export const PaginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

export type Pagination = z.infer<typeof PaginationSchema>;

export const PresignedUploadSchema = z.object({
  uploadUrl: z.string().url(),
  documentId: z.string().uuid(),
  expiresAt: z.string().datetime(),
});

export type PresignedUpload = z.infer<typeof PresignedUploadSchema>;
