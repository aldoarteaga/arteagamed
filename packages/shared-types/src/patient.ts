import { z } from 'zod';

export const SupportedLanguage = z.enum(['es', 'en', 'nl', 'no', 'fi']);
export type SupportedLanguage = z.infer<typeof SupportedLanguage>;

export const CountryCode = z.string().length(2).toUpperCase();

export const PhoneNumber = z.string().regex(/^\+[1-9]\d{6,14}$/, {
  message: 'Phone must be in E.164 format (e.g. +34600000000)',
});

export const PatientRegistrationSchema = z.object({
  fullName: z.string().min(2).max(120),
  dateOfBirth: z.string().date(),
  address: z.string().min(5).max(255),
  countryOfOrigin: CountryCode,
  preferredLanguage: SupportedLanguage,
  phone: PhoneNumber,
  email: z.string().email(),
  password: z
    .string()
    .min(10)
    .regex(/[A-Z]/, 'Must contain uppercase')
    .regex(/[a-z]/, 'Must contain lowercase')
    .regex(/[0-9]/, 'Must contain number')
    .regex(/[^A-Za-z0-9]/, 'Must contain symbol'),
  hasSpanishInsurance: z.boolean(),
  permanentMedications: z.array(z.string().max(200)).max(50).default([]),
  consentTerms: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the Terms of Use and Privacy Policy' }),
  }),
  consentMedicalData: z.literal(true, {
    errorMap: () => ({
      message: 'You must consent to the processing of your medical data (GDPR Art. 9)',
    }),
  }),
});

export type PatientRegistration = z.infer<typeof PatientRegistrationSchema>;

export const PatientProfileSchema = z.object({
  id: z.string().uuid(),
  cognitoSub: z.string(),
  fullName: z.string(),
  dateOfBirth: z.string().date(),
  address: z.string(),
  countryOfOrigin: CountryCode,
  preferredLanguage: SupportedLanguage,
  phone: PhoneNumber,
  email: z.string().email(),
  hasSpanishInsurance: z.boolean(),
  permanentMedications: z.array(z.string()),
  subscriptionStatus: z.enum(['active', 'past_due', 'canceled', 'trialing', 'none']),
  subscriptionPlan: z.enum(['basic', 'integral', 'continuada', 'avanzada']).nullable(),
  consentVersion: z.string(),
  consentAt: z.string().datetime(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type PatientProfile = z.infer<typeof PatientProfileSchema>;

export const PatientUpdateSchema = PatientProfileSchema.pick({
  fullName: true,
  address: true,
  phone: true,
  preferredLanguage: true,
  hasSpanishInsurance: true,
  permanentMedications: true,
}).partial();

export type PatientUpdate = z.infer<typeof PatientUpdateSchema>;

export const ClinicalEntrySchema = z.object({
  id: z.string().uuid(),
  patientId: z.string().uuid(),
  date: z.string().date(),
  summary: z.string().max(2000),
  professional: z.string().max(120),
  speciality: z.string().max(100),
  notes: z.string().max(5000).optional(),
  createdAt: z.string().datetime(),
});

export type ClinicalEntry = z.infer<typeof ClinicalEntrySchema>;

export const DocumentMetaSchema = z.object({
  id: z.string().uuid(),
  patientId: z.string().uuid(),
  filename: z.string().max(255),
  mimeType: z.string().max(100),
  sizeBytes: z.number().int().positive(),
  category: z.enum(['xray', 'lab_result', 'prescription', 'report', 'other']),
  uploadedAt: z.string().datetime(),
});

export type DocumentMeta = z.infer<typeof DocumentMetaSchema>;
