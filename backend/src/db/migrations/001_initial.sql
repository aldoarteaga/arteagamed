-- Migration: 001_initial
-- Creates core schema for EART patient platform

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Patients ---------------------------------------------------------------
CREATE TABLE patients (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cognito_sub           TEXT NOT NULL UNIQUE,
  full_name             TEXT NOT NULL,
  date_of_birth         DATE NOT NULL,
  address               TEXT NOT NULL,
  country_of_origin     CHAR(2) NOT NULL,
  preferred_language    TEXT NOT NULL CHECK (preferred_language IN ('es','en','nl','no','fi')),
  phone                 TEXT NOT NULL,
  email                 TEXT NOT NULL,
  has_spanish_insurance BOOLEAN NOT NULL DEFAULT FALSE,
  permanent_medications TEXT[] NOT NULL DEFAULT '{}',
  stripe_customer_id    TEXT,
  stripe_subscription_id TEXT,
  subscription_status   TEXT NOT NULL DEFAULT 'none'
                        CHECK (subscription_status IN ('active','past_due','canceled','trialing','none')),
  subscription_plan     TEXT CHECK (subscription_plan IN ('basic','integral','continuada','avanzada')),
  consent_version       TEXT NOT NULL,
  consent_at            TIMESTAMPTZ NOT NULL,
  created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_patients_cognito_sub ON patients (cognito_sub);
CREATE INDEX idx_patients_email       ON patients (email);

-- Clinical history -------------------------------------------------------
CREATE TABLE clinical_entries (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id  UUID NOT NULL REFERENCES patients(id) ON DELETE CASCADE,
  entry_date  DATE NOT NULL,
  summary     TEXT NOT NULL,
  professional TEXT NOT NULL,
  speciality  TEXT NOT NULL,
  notes       TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_clinical_entries_patient ON clinical_entries (patient_id, entry_date DESC);

-- Documents --------------------------------------------------------------
CREATE TABLE documents (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id  UUID NOT NULL REFERENCES patients(id) ON DELETE CASCADE,
  s3_key      TEXT NOT NULL,
  filename    TEXT NOT NULL,
  mime_type   TEXT NOT NULL,
  size_bytes  BIGINT NOT NULL,
  category    TEXT NOT NULL
              CHECK (category IN ('xray','lab_result','prescription','report','other')),
  uploaded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_documents_patient ON documents (patient_id, uploaded_at DESC);

-- Audit log --------------------------------------------------------------
CREATE TABLE audit_log (
  id          BIGSERIAL PRIMARY KEY,
  patient_id  UUID REFERENCES patients(id) ON DELETE SET NULL,
  actor_sub   TEXT NOT NULL,
  action      TEXT NOT NULL,
  resource    TEXT NOT NULL,
  resource_id TEXT,
  ip_address  INET,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_audit_log_patient   ON audit_log (patient_id, created_at DESC);
CREATE INDEX idx_audit_log_actor     ON audit_log (actor_sub, created_at DESC);

-- Auto-update updated_at -------------------------------------------------
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_patients_updated_at
  BEFORE UPDATE ON patients
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();
