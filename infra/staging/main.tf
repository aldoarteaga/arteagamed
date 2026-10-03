locals {
  env     = "staging"
  project = "eart"
}

module "networking" {
  source  = "../modules/networking"
  project = local.project
  env     = local.env
}

module "storage" {
  source     = "../modules/storage"
  project    = local.project
  env        = local.env
  account_id = var.account_id
}

# post-confirmation Lambda placeholder — deploy separately before Cognito
data "aws_lambda_function" "post_confirmation" {
  function_name = "${local.project}-${local.env}-cognito-post-confirmation"
}

module "cognito" {
  source                       = "../modules/cognito"
  project                      = local.project
  env                          = local.env
  post_confirmation_lambda_arn = data.aws_lambda_function.post_confirmation.arn
  callback_urls                = ["https://staging.arteagamed.com/auth/callback"]
  logout_urls                  = ["https://staging.arteagamed.com"]
}

module "rds" {
  source                = "../modules/rds"
  project               = local.project
  env                   = local.env
  subnet_ids            = module.networking.private_data_subnet_ids
  vpc_id                = module.networking.vpc_id
  proxy_sg_id           = module.networking.rds_proxy_sg_id
  multi_az              = false
  instance_class        = "db.t4g.medium"
  deletion_protection   = false
  backup_retention_days = 7
}

module "ecs" {
  source                 = "../modules/ecs"
  project                = local.project
  env                    = local.env
  vpc_id                 = module.networking.vpc_id
  public_subnet_ids      = module.networking.public_subnet_ids
  private_app_subnet_ids = module.networking.private_app_subnet_ids
  alb_sg_id              = module.networking.alb_sg_id
  ecs_sg_id              = module.networking.ecs_sg_id
  acm_certificate_arn    = var.acm_certificate_arn
  api_image              = var.api_image
  web_image              = var.web_image
  api_secrets_arns       = [module.rds.db_secret_arn]
  api_env_vars = {
    NODE_ENV                = "staging"
    AWS_REGION              = "eu-west-1"
    S3_DOCUMENTS_BUCKET     = module.storage.documents_bucket_name
    COGNITO_USER_POOL_ID    = module.cognito.user_pool_id
    COGNITO_CLIENT_ID       = module.cognito.client_id
  }
  web_env_vars = {
    NEXT_PUBLIC_API_URL                = "https://staging.arteagamed.com"
    NEXT_PUBLIC_COGNITO_REGION         = "eu-west-1"
    NEXT_PUBLIC_COGNITO_USER_POOL_ID   = module.cognito.user_pool_id
    NEXT_PUBLIC_COGNITO_CLIENT_ID      = module.cognito.client_id
  }
}
