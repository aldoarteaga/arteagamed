locals {
  tags = { project = var.project, env = var.env }
}

# ── ECR Repositories ──────────────────────────────────────────────────────
resource "aws_ecr_repository" "api" {
  name                 = "${var.project}-${var.env}-api"
  image_tag_mutability = "MUTABLE"
  image_scanning_configuration { scan_on_push = true }
  tags = local.tags
}

resource "aws_ecr_repository" "web" {
  name                 = "${var.project}-${var.env}-web"
  image_tag_mutability = "MUTABLE"
  image_scanning_configuration { scan_on_push = true }
  tags = local.tags
}

# ── ECS Cluster ───────────────────────────────────────────────────────────
resource "aws_ecs_cluster" "main" {
  name = "${var.project}-${var.env}"
  setting {
    name  = "containerInsights"
    value = "enabled"
  }
  tags = local.tags
}

resource "aws_ecs_cluster_capacity_providers" "main" {
  cluster_name       = aws_ecs_cluster.main.name
  capacity_providers = ["FARGATE", "FARGATE_SPOT"]
  default_capacity_provider_strategy {
    capacity_provider = "FARGATE"
    weight            = 1
  }
}

# ── IAM: task execution role (shared) ─────────────────────────────────────
resource "aws_iam_role" "ecs_execution" {
  name = "${var.project}-${var.env}-ecs-execution-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { Service = "ecs-tasks.amazonaws.com" }
      Action    = "sts:AssumeRole"
    }]
  })
  tags = local.tags
}

resource "aws_iam_role_policy_attachment" "ecs_execution" {
  role       = aws_iam_role.ecs_execution.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

# ── IAM: API task role ─────────────────────────────────────────────────────
resource "aws_iam_role" "api_task" {
  name = "${var.project}-${var.env}-api-task-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { Service = "ecs-tasks.amazonaws.com" }
      Action    = "sts:AssumeRole"
    }]
  })
  tags = local.tags
}

resource "aws_iam_role_policy" "api_task_secrets" {
  count = length(var.api_secrets_arns) > 0 ? 1 : 0
  role  = aws_iam_role.api_task.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect   = "Allow"
      Action   = ["secretsmanager:GetSecretValue"]
      Resource = var.api_secrets_arns
    }]
  })
}

# ── ALB ───────────────────────────────────────────────────────────────────
resource "aws_lb" "main" {
  name               = "${var.project}-${var.env}-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [var.alb_sg_id]
  subnets            = var.public_subnet_ids
  drop_invalid_header_fields = true
  tags               = local.tags
}

resource "aws_lb_target_group" "api" {
  name        = "${var.project}-${var.env}-api-tg"
  port        = 3001
  protocol    = "HTTP"
  vpc_id      = var.vpc_id
  target_type = "ip"
  health_check {
    path                = "/health"
    healthy_threshold   = 2
    unhealthy_threshold = 3
    timeout             = 5
    interval            = 15
  }
  tags = local.tags
}

resource "aws_lb_target_group" "web" {
  name        = "${var.project}-${var.env}-web-tg"
  port        = 3000
  protocol    = "HTTP"
  vpc_id      = var.vpc_id
  target_type = "ip"
  health_check {
    path                = "/"
    healthy_threshold   = 2
    unhealthy_threshold = 3
    timeout             = 5
    interval            = 15
  }
  tags = local.tags
}

resource "aws_lb_listener" "https" {
  load_balancer_arn = aws_lb.main.arn
  port              = 443
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-TLS13-1-2-2021-06"
  certificate_arn   = var.acm_certificate_arn

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.web.arn
  }
}

resource "aws_lb_listener_rule" "api" {
  listener_arn = aws_lb_listener.https.arn
  priority     = 10
  condition {
    path_pattern { values = ["/v1/*", "/health"] }
  }
  action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.api.arn
  }
}

# ── CloudWatch log groups ─────────────────────────────────────────────────
resource "aws_cloudwatch_log_group" "api" {
  name              = "/ecs/${var.project}/${var.env}/api"
  retention_in_days = var.env == "production" ? 365 : 90
  tags              = local.tags
}

resource "aws_cloudwatch_log_group" "web" {
  name              = "/ecs/${var.project}/${var.env}/web"
  retention_in_days = var.env == "production" ? 365 : 90
  tags              = local.tags
}

# ── ECS Task Definitions ──────────────────────────────────────────────────
resource "aws_ecs_task_definition" "api" {
  family                   = "${var.project}-${var.env}-api"
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = var.api_cpu
  memory                   = var.api_memory
  execution_role_arn       = aws_iam_role.ecs_execution.arn
  task_role_arn            = aws_iam_role.api_task.arn

  container_definitions = jsonencode([{
    name      = "api"
    image     = var.api_image
    essential = true
    portMappings = [{ containerPort = 3001, protocol = "tcp" }]
    environment = [for k, v in var.api_env_vars : { name = k, value = v }]
    logConfiguration = {
      logDriver = "awslogs"
      options = {
        "awslogs-group"         = aws_cloudwatch_log_group.api.name
        "awslogs-region"        = "eu-west-1"
        "awslogs-stream-prefix" = "api"
      }
    }
    healthCheck = {
      command     = ["CMD-SHELL", "wget -qO- http://localhost:3001/health || exit 1"]
      interval    = 15
      timeout     = 5
      retries     = 3
      startPeriod = 30
    }
  }])

  tags = local.tags
}

resource "aws_ecs_task_definition" "web" {
  family                   = "${var.project}-${var.env}-web"
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = var.web_cpu
  memory                   = var.web_memory
  execution_role_arn       = aws_iam_role.ecs_execution.arn

  container_definitions = jsonencode([{
    name      = "web"
    image     = var.web_image
    essential = true
    portMappings = [{ containerPort = 3000, protocol = "tcp" }]
    environment = [for k, v in var.web_env_vars : { name = k, value = v }]
    logConfiguration = {
      logDriver = "awslogs"
      options = {
        "awslogs-group"         = aws_cloudwatch_log_group.web.name
        "awslogs-region"        = "eu-west-1"
        "awslogs-stream-prefix" = "web"
      }
    }
  }])

  tags = local.tags
}

# ── ECS Services ──────────────────────────────────────────────────────────
resource "aws_ecs_service" "api" {
  name            = "${var.project}-${var.env}-api"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.api.arn
  desired_count   = var.env == "production" ? 2 : 1
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = var.private_app_subnet_ids
    security_groups  = [var.ecs_sg_id]
    assign_public_ip = false
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.api.arn
    container_name   = "api"
    container_port   = 3001
  }

  deployment_minimum_healthy_percent = 100
  deployment_maximum_percent         = 200

  enable_execute_command = var.env != "production"

  lifecycle { ignore_changes = [task_definition, desired_count] }
  tags = local.tags
}

resource "aws_ecs_service" "web" {
  name            = "${var.project}-${var.env}-web"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.web.arn
  desired_count   = var.env == "production" ? 2 : 1
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = var.private_app_subnet_ids
    security_groups  = [var.ecs_sg_id]
    assign_public_ip = false
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.web.arn
    container_name   = "web"
    container_port   = 3000
  }

  deployment_minimum_healthy_percent = 100
  deployment_maximum_percent         = 200

  lifecycle { ignore_changes = [task_definition, desired_count] }
  tags = local.tags
}

# ── Auto-scaling ──────────────────────────────────────────────────────────
resource "aws_appautoscaling_target" "api" {
  max_capacity       = var.env == "production" ? 10 : 3
  min_capacity       = var.env == "production" ? 2 : 1
  resource_id        = "service/${aws_ecs_cluster.main.name}/${aws_ecs_service.api.name}"
  scalable_dimension = "ecs:service:DesiredCount"
  service_namespace  = "ecs"
}

resource "aws_appautoscaling_policy" "api_cpu" {
  name               = "${var.project}-${var.env}-api-cpu-scaling"
  policy_type        = "TargetTrackingScaling"
  resource_id        = aws_appautoscaling_target.api.resource_id
  scalable_dimension = aws_appautoscaling_target.api.scalable_dimension
  service_namespace  = aws_appautoscaling_target.api.service_namespace

  target_tracking_scaling_policy_configuration {
    target_value = 60.0
    predefined_metric_specification {
      predefined_metric_type = "ECSServiceAverageCPUUtilization"
    }
  }
}
