# DevOps Assessment – Zeel Tilwani

## Project Overview

This project demonstrates the implementation of a complete DevOps workflow using Terraform, Docker, Kubernetes, Monitoring, Logging, and CI/CD practices.

The objective was to deploy a production-style two-tier application while following infrastructure automation, containerization, orchestration, observability, and automation best practices.

---

## Architecture

```text
User
  │
  ▼
Ingress Controller (Nginx)
  │
  ▼
Frontend Application (Node.js)
  │
  ▼
Backend API (Node.js)
  │
  ▼
Kubernetes Cluster
  │
  ├── Prometheus
  ├── Grafana
  ├── Elasticsearch
  └── Kibana
```

---

## Technologies Used

### Infrastructure

* Terraform
* AWS
* Remote Backend
* Custom Terraform Modules

### Containerization

* Docker
* Docker Hub

### Orchestration

* Kubernetes
* Helm
* Nginx Ingress Controller

### Monitoring

* Prometheus
* Grafana

### Logging

* Elasticsearch
* Kibana

### CI/CD

* GitHub Actions

---

# Infrastructure Provisioning (Terraform)

Infrastructure was provisioned using Terraform following Infrastructure as Code (IaC) principles.

### Components

* VPC
* Public Subnets
* Private Subnets
* Route Tables
* NAT Gateway
* Security Groups
* EKS Ready Structure
* Remote Backend Configuration
* Custom VPC Module

### Terraform Commands

```bash
terraform init
terraform plan
terraform apply
```

---

# Application Deployment

A two-tier microservice application was containerized using Docker.

## Frontend

* Node.js Application
* Dockerized
* Exposed through Kubernetes Service

## Backend

* REST API
* /health endpoint
* /metrics endpoint
* Structured JSON logging

---

# Kubernetes Deployment

Application components were deployed using Kubernetes manifests and Helm.

## Implemented Features

* Deployments
* Services
* ConfigMaps
* Secrets
* Resource Limits
* Readiness Probes
* Liveness Probes
* Rolling Updates
* Horizontal Pod Autoscaler (HPA)
* CronJob
* Nginx Ingress Controller

### Deployment

```bash
kubectl apply -f k8s/
```

---

# Monitoring with Grafana

Monitoring stack was installed using Helm and kube-prometheus-stack.

### Metrics Collected

* Pod CPU Usage
* Pod Memory Usage
* Node CPU Usage
* Node Memory Usage
* Application Health

## Screenshots

### Grafana Dashboard

![Grafana Dashboard](screenshots/grafana-dashboard.png)

### Grafana Pods

![Grafana Pods](screenshots/grafana-pods.png)

---

# Logging with Kibana

Centralized logging was implemented using Elasticsearch and Kibana.

### Features

* Log Aggregation
* Log Search
* Dashboard Visualization
* Structured Log Support

## Screenshots

### Kibana Home

![Kibana Home](screenshots/kibana-home.png)

### Kibana Discover

![Kibana Discover](screenshots/kibana-discover.png)

---

# CI/CD Pipeline

GitHub Actions was used to automate validation and deployment workflows.

## CI Workflow

* Terraform Validate
* Docker Build Validation
* Kubernetes Manifest Validation

## CD Workflow

* Terraform Plan
* Docker Image Build
* Deployment Verification
* Smoke Testing

---

# Challenges Faced

### Docker Desktop Reset

Several Kubernetes resources were removed after Docker Desktop restart and had to be redeployed.

### Prometheus Image Pull Failure

Temporary internet connectivity issues prevented image downloads.

### Grafana Access Issues

Port-forward configuration was required to access Grafana locally.

### Kibana Port Conflict

Existing Elasticsearch containers occupied required ports and required troubleshooting.

---

# Key Learnings

* Infrastructure as Code using Terraform
* Containerization using Docker
* Kubernetes Resource Management
* Monitoring using Prometheus & Grafana
* Logging using Elasticsearch & Kibana
* CI/CD Automation using GitHub Actions

---

# Future Improvements

* Deploy on AWS EKS
* GitOps using ArgoCD
* Loki Integration
* Advanced Alerting
* Blue-Green Deployments
* Automated Security Scanning

---

# Repository Structure

```text
devops-assessment-zeel
│
├── app
├── terraform
├── k8s
├── monitoring
├── logging
├── screenshots
├── presentation
└── .github/workflows
```

---

# Author

Zeel Tilwani

DevOps Assessment Submission
