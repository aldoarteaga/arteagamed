output "cluster_name" { value = aws_ecs_cluster.main.name }
output "alb_dns_name" { value = aws_lb.main.dns_name }
output "alb_zone_id" { value = aws_lb.main.zone_id }
output "api_ecr_url" { value = aws_ecr_repository.api.repository_url }
output "web_ecr_url" { value = aws_ecr_repository.web.repository_url }
output "api_service_name" { value = aws_ecs_service.api.name }
output "web_service_name" { value = aws_ecs_service.web.name }
