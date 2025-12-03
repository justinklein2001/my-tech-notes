---
title: Designing For Elasticity and Scalability.
description: Overview of ways to design elastic/scalable solutions in AWS.
---

### OpsWorks
- Configuration managed service (Automated Deployment)
    - Configure (code-based).
        - Instance deployment.
        - Service deployment.
        - Application deployment.
    - Operate:
        - Application development/updates.

**OpsWorks Services**:
1. OpsWorks Stacks
    - Initial OpsWorks mode, a collection of layers.
        - Any AWS service, any runtime environment.
2. OpsWork Chef Automate
    - Cookbooks contain recipes.
    - Recipes equivalent to layers (defined config settings).
3. OpsWorks Puppet
    - Master servers.
        - Pre-configured modules.
        - Modules equivalent to layers.

**Prebuilt Layers**: Ruby, PHP, Node.js, Java, Amazon RDS, Ha Proxy, MySQL.

**Use stacks on-prem, chef and puppet are cloud-only.

### Cognito
- User identity and synchronization service (SSO).
- Public identity providers are leveraged (Google, Facebook, Amazon).
- Private identity providers can be leveraged (Active Directory with SAML).
- Based on Open Standards (OAuth 2.0, SAML 2.0, OpenID connect)
- Profile Management Console (scales to millions of users).
- Controls access to AWS resources, define roles, map users to roles.

### Elastic MapReduce (EMR)
- Distributes processing across clusters.
    - Implements a managed Hadoop framework.
- Pulls data from S3 buckets.
- Process data on EC2 instances.
- User defines the number of needed clusters.

### EMR Cluster Nodes
- Master
    - Coordinates job distribution across core and task nodes.
- Core
    - Runs tasks assigned by the master node.
    - Stores data in the cluster.
- Task
    - Runs only tasks that do not store data.

### CloudFormation
- Rapid deployment of full, multi-instanced solutions.
- Mirror existing internal architectures.
- Take advantages of templates created by others.
- Can effectively take a snapshot of your deployment/current AWS services and load it into a template (CloudFormer).

**CloudFormation Properties**;
- AWS periodically updates properties that can be configured in CloudFormation.

### CloudWatch
- Monitors the cloud and on-prem systems.
- Can build dashboard (ie security, cost, ect...)
- Built from logs & events.
- Events can trigger alarms.

### Trusted Advisor
- Service that evaluates your environment and can recommend improvements.
- Security improvements included in free tier.
- With payment, get cost & performance improvement. 

### Organizations
- Collection of AWS accounts.
- Centralized: 
    - One management interface.
    - Billing.
    - Account management.
- No additional charge for use.

**Organizations Units (OUs)**
- Hierarchical account management. 
- Can nest up to five level deep.
- Can apply policies at the OU Level.