variable "acm_certificate_arn" {
  type        = string
  description = "ACM certificate ARN for the ALB HTTPS listener (must be in eu-west-1)"
}

variable "account_id" {
  type        = string
  description = "AWS account ID (used for unique S3 bucket names)"
}

variable "api_image" {
  type        = string
  description = "Full ECR image URI for the API (e.g. 123456789.dkr.ecr.eu-west-1.amazonaws.com/eart-staging-api:sha-abc)"
}

variable "web_image" {
  type        = string
  description = "Full ECR image URI for the web app"
}
