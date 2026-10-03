variable "project" { type = string }
variable "env" { type = string }
variable "post_confirmation_lambda_arn" { type = string }
variable "callback_urls" { type = list(string) }
variable "logout_urls" { type = list(string) }
