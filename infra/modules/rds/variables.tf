variable "project" { type = string }
variable "env" { type = string }
variable "subnet_ids" { type = list(string) }
variable "vpc_id" { type = string }
variable "proxy_sg_id" { type = string }
variable "multi_az" { type = bool; default = false }
variable "instance_class" { type = string; default = "db.t4g.medium" }
variable "db_name" { type = string; default = "eart" }
variable "deletion_protection" { type = bool; default = true }
variable "backup_retention_days" { type = number; default = 7 }
