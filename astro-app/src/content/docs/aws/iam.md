---
title: Identity and Access Management (IAM)
description: Overview of IAM.
---
- Manage access to AWS
  - Does **not** manage OS, services or applications.
  - Supports **users**, **groups** and **roles**.

### Principals

**Identity**: **Entity** that can perform an action (can be a **user**, **group** or **role**.)

**Users**:
- **Entity** created in AWS
- **Person** or **service** with **permissions**.
  - Created via AWS Management console or AWS API/CLI.
- **User Credentials**: Consists of a **name** and **password** and up to two **access** **keys**.
  - Access keys are used with the API or CLI.
- Users can be a member of groups.

**Groups**:
- A **collection** of IAM **users**.
- **Permissions** should be **managed** at the **group level**.
- Users can be added or removed.
- Groups are **not used to log in**.

**Roles**:
- An **identity granted permissions**.
- Roles **aren't permanently** assigned.
- **Assumed** by an **entity** with a need for it.
- Can be **federated**.

**Users vs. Roles**:
- Create a **user** when...
  - You're the only person working with the account.
  - Multiple people need **permanent access**.
  - One or more users require CLI access.
- Create a **role** when...
  - **Applications** need **access** to an AWS service.
  - **Mobile** phone apps make requests of AWS.
  - Existing company users need **federated** access.

**Root User**:
- **Email address** used to create the AWS subscription.
- **Unlimited** capabilities.
- **Not recommended for everyday access**.
- Create an IAM admin user and safely store the root user account.

**Root-Only Tasks**:
1. Modifying the root user.
2. Changing the AWS support plan (or closing it).
3. Generating a CloudFront key-pair.
4. Enabling MFA on an S3 bucket.

**Authentication**:
- S3 allows anonymous access (world-write access).
- Leverage username and password for console access.
- Use keys for API/CLI access.

### Policies
- **Rules** that determine **allowed actions or access**.
- Uses **JSON**, can be coded directly or generated via the GUI.
- Policies can vary by entity.
- Authorization is provided by AWS policies.

**Authorization**:
1. **Identity-based policies**: Used with users, groups or roles.
2. **Resource-based policies**: Used for cross-account access.

**Policy Processing**:
- By **default**, all **requests** are **denied**.
- **Explicit** **allow** **overrides** the default.
- **Permission boundaries** can **override** explicit allows.
- **Explicit** **denies** **override** explicit allows.

**Actions or Operations**:
- Request is authenticated: Action or operation is processed.
- Request is authorized: Linked to a service.
- Process against a resource.
- Includes CRUD: Create, Read, Update, Delete.