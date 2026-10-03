locals {
  tags = { project = var.project, env = var.env }
}

# ── KMS key for S3 ────────────────────────────────────────────────────────
resource "aws_kms_key" "s3" {
  description             = "${var.project}-${var.env} S3 encryption key"
  deletion_window_in_days = 14
  enable_key_rotation     = true
  tags                    = merge(local.tags, { Name = "${var.project}-${var.env}-s3-kms" })
}

resource "aws_kms_alias" "s3" {
  name          = "alias/${var.project}-${var.env}-s3"
  target_key_id = aws_kms_key.s3.key_id
}

# ── Documents bucket ──────────────────────────────────────────────────────
resource "aws_s3_bucket" "documents" {
  bucket        = "${var.project}-${var.env}-documents-${var.account_id}"
  force_destroy = var.env != "production"
  tags          = merge(local.tags, { Name = "documents" })
}

resource "aws_s3_bucket_public_access_block" "documents" {
  bucket                  = aws_s3_bucket.documents.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_server_side_encryption_configuration" "documents" {
  bucket = aws_s3_bucket.documents.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm     = "aws:kms"
      kms_master_key_id = aws_kms_key.s3.arn
    }
    bucket_key_enabled = true
  }
}

resource "aws_s3_bucket_versioning" "documents" {
  bucket = aws_s3_bucket.documents.id
  versioning_configuration { status = "Enabled" }
}

resource "aws_s3_bucket_lifecycle_configuration" "documents" {
  bucket = aws_s3_bucket.documents.id
  rule {
    id     = "archive-old-versions"
    status = "Enabled"
    noncurrent_version_transition {
      noncurrent_days = 90
      storage_class   = "GLACIER"
    }
    noncurrent_version_expiration {
      noncurrent_days = 2555 # 7 years (GDPR)
    }
  }
}

resource "aws_s3_bucket_policy" "documents_deny_unencrypted" {
  bucket = aws_s3_bucket.documents.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Sid       = "DenyUnencryptedObjectUploads"
      Effect    = "Deny"
      Principal = "*"
      Action    = "s3:PutObject"
      Resource  = "${aws_s3_bucket.documents.arn}/*"
      Condition = {
        StringNotEquals = {
          "s3:x-amz-server-side-encryption" = "aws:kms"
        }
      }
    }]
  })
}

# ── Audit logs bucket (Object Lock — WORM) ────────────────────────────────
resource "aws_s3_bucket" "audit_logs" {
  bucket              = "${var.project}-${var.env}-audit-logs-${var.account_id}"
  object_lock_enabled = true
  force_destroy       = false
  tags                = merge(local.tags, { Name = "audit-logs" })
}

resource "aws_s3_bucket_public_access_block" "audit_logs" {
  bucket                  = aws_s3_bucket.audit_logs.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_server_side_encryption_configuration" "audit_logs" {
  bucket = aws_s3_bucket.audit_logs.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm     = "aws:kms"
      kms_master_key_id = aws_kms_key.s3.arn
    }
  }
}

resource "aws_s3_bucket_object_lock_configuration" "audit_logs" {
  bucket = aws_s3_bucket.audit_logs.id
  rule {
    default_retention {
      mode  = "COMPLIANCE"
      years = 7
    }
  }
}
