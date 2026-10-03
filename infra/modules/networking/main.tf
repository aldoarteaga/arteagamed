locals {
  tags = { project = var.project, env = var.env }
}

# ── VPC ───────────────────────────────────────────────────────────────────
resource "aws_vpc" "main" {
  cidr_block           = var.vpc_cidr
  enable_dns_hostnames = true
  enable_dns_support   = true
  tags                 = merge(local.tags, { Name = "${var.project}-${var.env}-vpc" })
}

# ── Public subnets (ALB + NAT GW) ─────────────────────────────────────────
resource "aws_subnet" "public" {
  count                   = length(var.azs)
  vpc_id                  = aws_vpc.main.id
  cidr_block              = var.public_subnet_cidrs[count.index]
  availability_zone       = var.azs[count.index]
  map_public_ip_on_launch = false
  tags = merge(local.tags, { Name = "${var.project}-${var.env}-public-${count.index + 1}", Tier = "public" })
}

# ── Private app subnets (ECS Fargate, ElastiCache) ────────────────────────
resource "aws_subnet" "private_app" {
  count             = length(var.azs)
  vpc_id            = aws_vpc.main.id
  cidr_block        = var.private_app_subnet_cidrs[count.index]
  availability_zone = var.azs[count.index]
  tags = merge(local.tags, { Name = "${var.project}-${var.env}-app-${count.index + 1}", Tier = "app" })
}

# ── Private data subnets (RDS, RDS Proxy) ─────────────────────────────────
resource "aws_subnet" "private_data" {
  count             = length(var.azs)
  vpc_id            = aws_vpc.main.id
  cidr_block        = var.private_data_subnet_cidrs[count.index]
  availability_zone = var.azs[count.index]
  tags = merge(local.tags, { Name = "${var.project}-${var.env}-data-${count.index + 1}", Tier = "data" })
}

# ── Internet Gateway ──────────────────────────────────────────────────────
resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id
  tags   = merge(local.tags, { Name = "${var.project}-${var.env}-igw" })
}

# ── NAT Gateways (one per AZ for HA) ─────────────────────────────────────
resource "aws_eip" "nat" {
  count  = length(var.azs)
  domain = "vpc"
  tags   = merge(local.tags, { Name = "${var.project}-${var.env}-nat-eip-${count.index + 1}" })
}

resource "aws_nat_gateway" "main" {
  count         = length(var.azs)
  allocation_id = aws_eip.nat[count.index].id
  subnet_id     = aws_subnet.public[count.index].id
  tags          = merge(local.tags, { Name = "${var.project}-${var.env}-nat-${count.index + 1}" })
  depends_on    = [aws_internet_gateway.main]
}

# ── Route tables ──────────────────────────────────────────────────────────
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main.id
  }
  tags = merge(local.tags, { Name = "${var.project}-${var.env}-rt-public" })
}

resource "aws_route_table_association" "public" {
  count          = length(var.azs)
  subnet_id      = aws_subnet.public[count.index].id
  route_table_id = aws_route_table.public.id
}

resource "aws_route_table" "private_app" {
  count  = length(var.azs)
  vpc_id = aws_vpc.main.id
  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.main[count.index].id
  }
  tags = merge(local.tags, { Name = "${var.project}-${var.env}-rt-app-${count.index + 1}" })
}

resource "aws_route_table_association" "private_app" {
  count          = length(var.azs)
  subnet_id      = aws_subnet.private_app[count.index].id
  route_table_id = aws_route_table.private_app[count.index].id
}

resource "aws_route_table" "private_data" {
  vpc_id = aws_vpc.main.id
  tags   = merge(local.tags, { Name = "${var.project}-${var.env}-rt-data" })
}

resource "aws_route_table_association" "private_data" {
  count          = length(var.azs)
  subnet_id      = aws_subnet.private_data[count.index].id
  route_table_id = aws_route_table.private_data.id
}

# ── Security Groups ───────────────────────────────────────────────────────
resource "aws_security_group" "alb" {
  name        = "${var.project}-${var.env}-alb-sg"
  vpc_id      = aws_vpc.main.id
  description = "ALB: inbound HTTPS from internet"
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  tags = merge(local.tags, { Name = "${var.project}-${var.env}-alb-sg" })
}

resource "aws_security_group" "ecs" {
  name        = "${var.project}-${var.env}-ecs-sg"
  vpc_id      = aws_vpc.main.id
  description = "ECS Fargate tasks: inbound from ALB only"
  ingress {
    from_port       = 3000
    to_port         = 3001
    protocol        = "tcp"
    security_groups = [aws_security_group.alb.id]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  tags = merge(local.tags, { Name = "${var.project}-${var.env}-ecs-sg" })
}

resource "aws_security_group" "rds_proxy" {
  name        = "${var.project}-${var.env}-rds-proxy-sg"
  vpc_id      = aws_vpc.main.id
  description = "RDS Proxy: inbound from ECS only"
  ingress {
    from_port       = 5432
    to_port         = 5432
    protocol        = "tcp"
    security_groups = [aws_security_group.ecs.id]
  }
  tags = merge(local.tags, { Name = "${var.project}-${var.env}-rds-proxy-sg" })
}

resource "aws_security_group" "elasticache" {
  name        = "${var.project}-${var.env}-elasticache-sg"
  vpc_id      = aws_vpc.main.id
  description = "ElastiCache: inbound from ECS only"
  ingress {
    from_port       = 6379
    to_port         = 6379
    protocol        = "tcp"
    security_groups = [aws_security_group.ecs.id]
  }
  tags = merge(local.tags, { Name = "${var.project}-${var.env}-elasticache-sg" })
}

# ── VPC Endpoints (keep traffic off the internet) ─────────────────────────
resource "aws_vpc_endpoint" "s3" {
  vpc_id            = aws_vpc.main.id
  service_name      = "com.amazonaws.eu-west-1.s3"
  vpc_endpoint_type = "Gateway"
  route_table_ids   = concat(
    [aws_route_table.private_data.id],
    aws_route_table.private_app[*].id,
  )
  tags = merge(local.tags, { Name = "${var.project}-${var.env}-vpce-s3" })
}

locals {
  interface_endpoints = ["ecr.api", "ecr.dkr", "secretsmanager", "ssm", "logs", "bedrock-runtime", "execute-api"]
}

resource "aws_vpc_endpoint" "interface" {
  for_each            = toset(local.interface_endpoints)
  vpc_id              = aws_vpc.main.id
  service_name        = "com.amazonaws.eu-west-1.${each.key}"
  vpc_endpoint_type   = "Interface"
  subnet_ids          = aws_subnet.private_app[*].id
  security_group_ids  = [aws_security_group.ecs.id]
  private_dns_enabled = true
  tags = merge(local.tags, { Name = "${var.project}-${var.env}-vpce-${each.key}" })
}
