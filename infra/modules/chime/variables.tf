variable "project" { type = string }
variable "env" { type = string }
variable "vpc_id" { type = string }
variable "private_app_subnet_ids" { type = list(string) }
variable "ecs_sg_id" { type = string }
variable "api_internal_url" { type = string; description = "Internal ALB URL for the API" }
variable "phone_number_id" { type = string; description = "Chime SDK phone number ID provisioned out-of-band" }
