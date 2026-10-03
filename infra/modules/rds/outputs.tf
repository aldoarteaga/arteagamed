output "proxy_endpoint" { value = aws_db_proxy.main.endpoint }
output "db_secret_arn" { value = aws_secretsmanager_secret.db.arn }
output "rds_kms_key_arn" { value = aws_kms_key.rds.arn }
