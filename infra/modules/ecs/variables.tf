variable "project" { type = string }
variable "env" { type = string }
variable "vpc_id" { type = string }
variable "public_subnet_ids" { type = list(string) }
variable "private_app_subnet_ids" { type = list(string) }
variable "alb_sg_id" { type = string }
variable "ecs_sg_id" { type = string }
variable "acm_certificate_arn" { type = string }

variable "api_image" { type = string }
variable "web_image" { type = string }

variable "api_cpu" { type = number; default = 1024 }
variable "api_memory" { type = number; default = 2048 }
variable "web_cpu" { type = number; default = 512 }
variable "web_memory" { type = number; default = 1024 }

variable "api_secrets_arns" {
  type        = list(string)
  description = "List of Secrets Manager ARNs the API task role can read"
  default     = []
}
variable "api_env_vars" {
  type    = map(string)
  default = {}
}
variable "web_env_vars" {
  type    = map(string)
  default = {}
}
