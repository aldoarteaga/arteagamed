locals {
  tags = { project = var.project, env = var.env }
}

# ── KMS key for RDS encryption ────────────────────────────────────────────
resource "aws_kms_key" "rds" {
  description             = "${var.project}-${var.env} RDS encryption key"
  deletion_window_in_days = 14
  enable_key_rotation     = true
  tags                    = merge(local.tags, { Name = "${var.project}-${var.env}-rds-kms" })
}

resource "aws_kms_alias" "rds" {
  name          = "alias/${var.project}-${var.env}-rds"
  target_key_id = aws_kms_key.rds.key_id
}

# ── RDS credentials in Secrets Manager ───────────────────────────────────
resource "random_password" "db" {
  length           = 32
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}

resource "aws_secretsmanager_secret" "db" {
  name                    = "${var.project}/${var.env}/rds/credentials"
  recovery_window_in_days = 7
  tags                    = local.tags
}

resource "aws_secretsmanager_secret_version" "db" {
  secret_id = aws_secretsmanager_secret.db.id
  secret_string = jsonencode({
    username = "eart_app"
    password = random_password.db.result
    dbname   = var.db_name
    host     = aws_db_instance.main.address
    port     = 5432
  })
}

# ── Subnet group ──────────────────────────────────────────────────────────
resource "aws_db_subnet_group" "main" {
  name       = "${var.project}-${var.env}-db-subnet-group"
  subnet_ids = var.subnet_ids
  tags       = merge(local.tags, { Name = "${var.project}-${var.env}-db-subnet-group" })
}

# ── Parameter group (force SSL) ───────────────────────────────────────────
resource "aws_db_parameter_group" "main" {
  name   = "${var.project}-${var.env}-pg16"
  family = "postgres16"
  parameter {
    name  = "rds.force_ssl"
    value = "1"
  }
  tags = local.tags
}

# ── RDS PostgreSQL instance ───────────────────────────────────────────────
resource "aws_db_instance" "main" {
  identifier             = "${var.project}-${var.env}-postgres"
  engine                 = "postgres"
  engine_version         = "16"
  instance_class         = var.instance_class
  allocated_storage      = 20
  max_allocated_storage  = 100
  storage_type           = "gp3"
  storage_encrypted      = true
  kms_key_id             = aws_kms_key.rds.arn
  db_name                = var.db_name
  username               = "eart_app"
  password               = random_password.db.result
  db_subnet_group_name   = aws_db_subnet_group.main.name
  parameter_group_name   = aws_db_parameter_group.main.name
  vpc_security_group_ids = [var.proxy_sg_id]
  multi_az               = var.multi_az
  backup_retention_period = var.backup_retention_days
  backup_window          = "03:00-04:00"
  maintenance_window     = "Mon:04:00-Mon:05:00"
  deletion_protection    = var.deletion_protection
  skip_final_snapshot    = var.env != "production"
  final_snapshot_identifier = var.env == "production" ? "${var.project}-${var.env}-final-snapshot" : null
  enabled_cloudwatch_logs_exports = ["postgresql", "upgrade"]
  tags = merge(local.tags, { Name = "${var.project}-${var.env}-postgres" })
}

# ── RDS Proxy ─────────────────────────────────────────────────────────────
resource "aws_iam_role" "rds_proxy" {
  name = "${var.project}-${var.env}-rds-proxy-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { Service = "rds.amazonaws.com" }
      Action    = "sts:AssumeRole"
    }]
  })
  tags = local.tags
}

resource "aws_iam_role_policy" "rds_proxy_secrets" {
  role = aws_iam_role.rds_proxy.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect   = "Allow"
      Action   = ["secretsmanager:GetSecretValue"]
      Resource = [aws_secretsmanager_secret.db.arn]
    }]
  })
}

resource "aws_db_proxy" "main" {
  name                   = "${var.project}-${var.env}-rds-proxy"
  debug_logging          = false
  engine_family          = "POSTGRESQL"
  idle_client_timeout    = 1800
  require_tls            = true
  role_arn               = aws_iam_role.rds_proxy.arn
  vpc_security_group_ids = [var.proxy_sg_id]
  vpc_subnet_ids         = var.subnet_ids

  auth {
    auth_scheme = "SECRETS"
    secret_arn  = aws_secretsmanager_secret.db.arn
    iam_auth    = "DISABLED"
  }

  tags = merge(local.tags, { Name = "${var.project}-${var.env}-rds-proxy" })
}

resource "aws_db_proxy_default_target_group" "main" {
  db_proxy_name = aws_db_proxy.main.name
  connection_pool_config {
    max_connections_percent = 80
  }
}

resource "aws_db_proxy_target" "main" {
  db_instance_identifier = aws_db_instance.main.id
  db_proxy_name          = aws_db_proxy.main.name
  target_group_name      = aws_db_proxy_default_target_group.main.name
}
