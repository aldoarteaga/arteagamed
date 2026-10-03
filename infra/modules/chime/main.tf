locals {
  tags = { project = var.project, env = var.env }
}

# ── IAM role for the SMA Lambda ───────────────────────────────────────────
resource "aws_iam_role" "chime_lambda" {
  name = "${var.project}-${var.env}-chime-lambda-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { Service = "lambda.amazonaws.com" }
      Action    = "sts:AssumeRole"
    }]
  })
  tags = local.tags
}

resource "aws_iam_role_policy_attachment" "chime_lambda_vpc" {
  role       = aws_iam_role.chime_lambda.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaVPCAccessExecutionRole"
}

resource "aws_iam_role_policy" "chime_lambda_bedrock" {
  role = aws_iam_role.chime_lambda.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect   = "Allow"
        Action   = ["bedrock:InvokeModelWithResponseStream"]
        Resource = ["arn:aws:bedrock:eu-west-1::foundation-model/amazon.nova-sonic-v1:0"]
      },
      {
        Effect   = "Allow"
        Action   = ["chime:*"]
        Resource = "*"
      }
    ]
  })
}

# ── CloudWatch log group ──────────────────────────────────────────────────
resource "aws_cloudwatch_log_group" "chime_lambda" {
  name              = "/aws/lambda/${var.project}-${var.env}-chime-sma"
  retention_in_days = 90
  tags              = local.tags
}

# ── Lambda function (ZIP deployment — handler code in pbx/ directory) ────
resource "aws_lambda_function" "chime_sma" {
  function_name = "${var.project}-${var.env}-chime-sma"
  role          = aws_iam_role.chime_lambda.arn
  runtime       = "nodejs22.x"
  handler       = "index.handler"
  timeout       = 300
  memory_size   = 512

  # Placeholder — CI/CD pipeline updates this ZIP on deploy
  filename         = "${path.module}/placeholder.zip"
  source_code_hash = filebase64sha256("${path.module}/placeholder.zip")

  vpc_config {
    subnet_ids         = var.private_app_subnet_ids
    security_group_ids = [var.ecs_sg_id]
  }

  environment {
    variables = {
      API_INTERNAL_URL = var.api_internal_url
      BEDROCK_MODEL_ID = "amazon.nova-sonic-v1:0"
      AWS_REGION       = "eu-west-1"
      TRANSFER_EXT     = "1000"
    }
  }

  logging_config {
    log_group  = aws_cloudwatch_log_group.chime_lambda.name
    log_format = "JSON"
  }

  tags = local.tags

  lifecycle { ignore_changes = [filename, source_code_hash] }
}

resource "aws_lambda_permission" "chime" {
  statement_id  = "AllowChimeInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.chime_sma.function_name
  principal     = "voiceconnector.chime.amazonaws.com"
}

# ── Chime SIP media application ───────────────────────────────────────────
resource "aws_chimesdkvoice_sip_media_application" "main" {
  name       = "${var.project}-${var.env}-sma"
  aws_region = "eu-west-1"
  endpoints {
    lambda_arn = aws_lambda_function.chime_sma.arn
  }
  tags = local.tags
}

# ── Chime SIP rule: route phone number to SMA ─────────────────────────────
resource "aws_chimesdkvoice_sip_rule" "inbound" {
  name          = "${var.project}-${var.env}-inbound-rule"
  trigger_type  = "ToPhoneNumber"
  trigger_value = var.phone_number_id
  target_applications {
    sip_media_application_id = aws_chimesdkvoice_sip_media_application.main.id
    priority                 = 1
    aws_region               = "eu-west-1"
  }
}
