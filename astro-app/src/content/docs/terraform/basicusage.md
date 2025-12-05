---
title: Basic Usage
description: Explains Terraform Backend logic, local vs, remote.
---

### `terraform init`
- Downloads the code for the stated providers in the `main.tf`.
- Downloads additional modules leveraged.

### State File
- Terraform's representation of the world.
- JSON file containing information about every resource and data object.
- Contains Sensitive Info (e.g. database password) - **DO NOT COMMIT THIS**.
- Can be stored locally or remotely.

### Local Backend
You install Terraform on your local machine, along with the Terraform State file.

**The Good**:
  - Simple to get started.
  
**The Bad**:
  - Sensitive data is stored in plain text.
- Uncollaborative.
- Manual.

### Remote Backend
Could leverage Terraform Cloud or self-host (Amazon S3).

**The Good**:
- Sensitive data is encrypted.
- Collaboration is possible.
- Automation is now possible (CI/CD).
- 
**The Bad**:
- Increased complexity.

**Terraform Cloud**:
```terraform
terraform {
    backend "remote" {
        organization = "your-org"

        workspaces {
            name = "your-workspace"
        }
    }
}
```
- Free up to **5 users**.

**AWS**:
```terraform
terraform {
    backend "s3" {
        bucket = "bucket_name"
        key = "key_for_bucket"
        region = "us-east-1"
        dynamodb_table = "terraform-state-locking"
        encrypt = true
    }
}
```
- S3 Bucket used for storage.
- DynamoDB used for locking (race condition with multiple users).

**But...**
- You can't provision this if you don't have a Terraform state.

**So you can...**
1. **Bootstrap it**
   - No Remote Backend Specified (defaults to local).
   - Define the resources needed.
   - Run `terraform apply` to apply them to AWS.
   - Now change the backend back to AWS remote.
   - Keep the specified resources, run `terraform init` again, it migrates local to remote.
### `terraform plan`
- Looks at the **Terraform Config (Desired State)** and compares it to the **Terraform State (Actual State)**.
- Finds the discrepancies between the two sates, and leverages a provider to make the desired state the actual state.

### `terraform destroy`
- Plan: `Destroy Everything`.
- You only do this when you **never** need that project back.
