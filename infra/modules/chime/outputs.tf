output "sma_id" { value = aws_chimesdkvoice_sip_media_application.main.id }
output "lambda_arn" { value = aws_lambda_function.chime_sma.arn }
output "lambda_function_name" { value = aws_lambda_function.chime_sma.function_name }
