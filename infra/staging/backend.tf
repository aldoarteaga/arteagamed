terraform {
  required_version = ">= 1.9"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.6"
    }
  }

  backend "s3" {
    bucket         = "eart-terraform-state"
    key            = "staging/terraform.tfstate"
    region         = "eu-west-1"
    dynamodb_table = "eart-terraform-locks"
    encrypt        = true
  }
}

provider "aws" {
  region = "eu-west-1"
  default_tags {
    tags = {
      project     = "eart"
      env         = "staging"
      managed_by  = "terraform"
    }
  }
}
