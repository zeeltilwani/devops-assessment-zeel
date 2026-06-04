terraform {
  backend "s3" {
    bucket         = "zee-devops-tfstate-2026"
    key            = "dev/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}