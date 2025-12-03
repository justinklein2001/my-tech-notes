---
title: Identity and Access Management (IAM) Best Practices
description: Overview of IAM Best Practices.
---

### Key Rotation
Rotate the Access Key & Secret Access Key.

**Process**:
1. Create a second access key in addition to teh one in use
2. Update all your applications to use the new access key, validating that the application is still working.
3. Change the state of the previous keys to inactive.
4. Validate that your applications are still working as expected.

### Managing Multiple Permissions
Use **boundaries** to properly monitor this use case.

### AWS Compliance Program
- AWS Compliance Center contains information on how to achieve regulatory compliance in the cloud.
- Includes HIPAA, PCI-DSS, ISO & government compliance.
- Each program has its own quick start guide.

### AWS Security Group
- Paid subscription.
- Runs automatic checks to scan for compliance with regulations & laws.
- Amazon GuardDuty is an intrusion detection system, Amazon inspector performs vulnerability analysis, Amazon macie provides S3 bucked policy compliance scams.

### Shared Responsibility Model
- AWS provides security of the cloud.
- You are responsible for security in the cloud.

### Data Security Control
- You own and control the data, AWS doesn't access it without your agreement.
- Data should be treated as on-prem, traditional data access policies apply.
- Includes data ingestion, transformation, classification, retention and removal.

### What to Encrypt
- PII (Personably Identifiable Information)
- Competitive advantages
- Customer Information

### Recovery and Retention
- Processes need to be implemented to allow data recover
  - Backup
  - Replication
- Data should be retained only as long as it is required.

### Federated Directory Services

**Federated Identity**: A system of trust between two parties.
- One party trusts the other to authenticate users.
- AWS supports standardized protocols:
  - Security Assertion Markup Language (SAML 2.0)
  - OpenID Connect (OIDC)
  - Open Authentication (OAuth 2.0)

**Federated Directory Service**: Link entire directories of users and groups, including optional extra levels of authentication.

**IAM Identity Center**: (AWS Single-Sign On) connects existing directories to AWS and requires AWS organizations
- Can be connected to Microsoft Active Directory.

### User Accounts
- When creating a user, a CSV is generated with their unique login link.
- Can only create an access key for a user after creating the user id.

**Password Policies**:

**Default Password Policy**: Min 8, max 128 characters
  - 3 of 4 character types (upper, lower, number, special)
  - Can't be the same as the account name or email.

**Best Practice**:
- Change it periodically.
- Use a unique password for AWS.
- Avoid easily guessed passwords.

### Credential Rotation
- Require periodic password changes limits the time for a password cracking attack.
- Reminds users of an organizations' emphasis on security.

### Principle of Least Privilege
- Grant only the access needed.
- Granting more access creates vulnerabilities.
- Opens the doors for attackers.
- It's achieved through permission management.
- Policy summaries can be used to see the cumulative permissions a user has.

### IAM Roles
- Never make a role an administrator.

### Policy Conditions
- Determines when a policy applies.
- Implemented through JSON policies.