---
title: Infrastructure as Code
description: Explains the concept of IaC and how it relates to the evolution of cloud computing.
---

### What is Terraform?
- It's a tool for building, changing and versioning infrastructure safely and efficiently.
- It's an Infrastructure as Code (IaC) tool.
- It enables application software best practices to infrastructure.
- It's compatible with many clouds and services.

### What is Infrastructure as Code (IaC)?

**Categories of IaC Tools**:
1. **Ad Hoc Scripts**: Writing a shell script to make calls to a cloud provider to provision resources.
2. **Configuration Management Tools**: Managing software running on hardware (usually on-prem).
3. **Server Templating Tools**: Think of AMI (Amazon Machine Image), a predefined image of an OS built to your application's needs.
4. **Orchestration Tools**: Think of Kubernetes, Docker Compose, used to define the application deployment.
5. **Provisioning Tools** - Get your resourced provisioned in the cloud via a tool.

Consider **Declarative** vs. **Imperative**...
- **Declarative**: You define the **end-state** of what you want.
- **Imperative**: You tell the system **what you want to happen** and the **sequence** in which they happen.

Terraform is a **declarative, cloud-agnostic provisioning tool**.