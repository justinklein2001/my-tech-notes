---
title: Testing in Terraform
description: Explains how to implement testing in terraform.
---

### Code Rot
- When code isn't used and the system is still changing, it rots away if it isn't properly tested.
- When applied to Terraform, the points most vulnerable to code rot are...
  - Out of band changes.
  - Unpinned versions.
  - Deprecated dependencies.
  - Unapplied changes.

### Testing in Terraform
**Built in**:
- terraform fmt.
- terraform validate.
- terraform plan.
- custom validation rules.

**External**:
- tflint
- checkov, tfsec, terrascan, terraform-compliance, snyk
- Terraform Sentinal (enterprise only).