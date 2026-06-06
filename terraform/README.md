# DevOps Assessment

## Project Overview

Two-tier microservice application deployed on Kubernetes with Terraform, CI/CD, Monitoring and Logging.

---

## Architecture

User
|
Ingress
|
Frontend
|
Backend API
|
Prometheus + Grafana
|
Elasticsearch + Kibana

---

## Tools Used

Terraform
AWS
Docker
Kubernetes
Helm
Prometheus
Grafana
Elasticsearch
Kibana
GitHub Actions

---

## Terraform Deployment

terraform init

terraform plan

terraform apply

---

## Kubernetes Deployment

kubectl apply -f k8s/

---

## CI/CD Pipeline

CI:
- Terraform Validate
- Docker Build
- Kubernetes Checks

CD:
- Terraform Plan
- Docker Build
- Deploy
- Smoke Test

---

## Monitoring

Grafana installed using Helm.

Dashboards:
- Pod CPU
- Pod Memory
- Node CPU
- Node Memory

(Add screenshots)

---

## Logging

ELK Stack

Components:
- Elasticsearch
- Kibana

(Add screenshots)

---

## Challenges

- Docker Desktop resets
- Image pull failures
- Grafana startup troubleshooting
- Kibana port conflicts

---

## Future Improvements

- ArgoCD
- EKS deployment
- Terraform Cloud
- Loki integration
