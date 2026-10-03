output "documents_bucket_name" { value = aws_s3_bucket.documents.id }
output "documents_bucket_arn" { value = aws_s3_bucket.documents.arn }
output "audit_logs_bucket_name" { value = aws_s3_bucket.audit_logs.id }
output "s3_kms_key_arn" { value = aws_kms_key.s3.arn }
