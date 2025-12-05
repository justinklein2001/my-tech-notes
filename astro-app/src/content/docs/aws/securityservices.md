---
title: Security Services
description: Overview of various IAM-related security services
---

### Amazon STS (Security Token Service)
- Provide **trusted users with temporary security credentials** that can control access to AWS resources.
- Short-term: lasts a few minutes to a few hours.
- Not stored with the user.
- AssumeRole: API for temporarily assigning user permissions.

### CloudTrail
- A **logging** service offering **Governance, Compliance, Auditing**.
- Gives you event histories from:
  - Management console
  - AWS SDK
  - Command Line
  - Additional AWS Services
- Can link directly into CloudWatch (notification event)
- Standard is 90 days of datastorage if you leave CloudTrail as is.

### AWS Control Tower
- Setup and **govern** your **multi-account** AWS environment.
- No extra charge, but it makes use of services that cost money.

### Service Control Policies (SCP)
- **Manages permissions in an organization**.
  - Centralized control of accounts/capabilities
  - Enforces guardrails (limits)
- Requires that all organization features be enabled.

**SCP Inheritance**:
- **Deny statements apply to all lower levels**.
- **Allow statements do the same, unless overridden**.

**SCP Strategies**:

1. **Open List Strategy (Open-to-Close)**
   - Leave default SCP (FullAWSAccess) in place.
   - Apply deny SCPs at appropriate lower levels. 
2. **Deny List Strategy (Close-to-Open)**
   - Remove the default SCP (FullAWSAccess)
   - Apply allow SCPs at appropriate lower levels.

**Primary Rule**: Implicit deny can be overridden, explicit deny cannot.

### AWS Shield
- **Protection against DDos attacks.**
- Two versions: Standard and Advanced.
  - **Standard** is **free**.
  - Advanced enhances the protection.
- Provides protection at **Layers 3, 4 and 7**.
  - Layer 3: **Network/IP**
  - Layer 4: **Transport/TCP/UDP**
  - Layer 7: **Application/HTTPS**

### Web Application Firewall (WAF)
- **Application layer firewall (HTTP/HTTPS)**
- **Web Access Control Lists (Web ACLs)**
  - Contains rules.
  - May use reusable groups.

### Secrets Manager
- Allows for applications to **retrieve** **credentials** through **APIs**
  - No stored credentials.
  - No manual credential rotation.

### Amazon Cognito
- Provides **authentication**, **authorization** and **user management** for:
  - Web & Mobile applications.
- Authentication through usernames/passwords or third parties.
- Uses User and Identity pool.
  - User pools provide a directory of user profiles.
    - All users have a profile, even through a social identity provider (Facebook)
    - Social identity requires external registration with the provider.
  - Identity pools provide access to AWS resources.
    - Through user pools or direct social identity.
    - User profiles only saved when integrated with user pools.

### Amazon GuardDuty
- Provides **security monitoring** services.
- Processes data sources.
  - CloudTrail data (S3 logs, VPC flow logs, DNS logs, EBS volume data)
- Uses threat intelligence feeds and machine learning to **identify threats**.

### Amazon Macie
- Provides **discovery**, **monitoring** and **protection** of **sensitive** data.
  - Monitors S3 buckets for sensitive data.
  - Uses machine learning and pattern matching.
  - Can use regex-based custom data identifiers.