---
title: Compute Services Management
description: Deep-dive into managing various compute services.
---

### Launching Instances
1. **Bootstrapping**: Provide **code** to be run on an instance launch.
2. **VM Import/Export**: Import **existing** VM into EC2.


### Instance Metadata
- **Security groups**
- **Instance Id**
- **Instance type**
- **AMI** base of the instance

**To change an instance type, just need to stop it and switch it**.

### Security Groups in  Instances

**Security Groups vs ACLs**
|  **Security Groups** | **ACLs**  |
|----------------------|-----------|
|Operates at the **instance** level.| Operates at the **subnet** level. |
| Supports **allow** rules only. | Supports **allow** and **deny**. |
| **Stateful**: Return traffic is automatically allowed, regardless of rules. | **Stateless**: Return traffic must be **explicitly** allowed by the rules. |
| Evaluate **all rules** **before** deciding whether to allow traffic. | Process rules in **number order** when deciding whether to allow traffic. |
| Applies to an instance only if someone **specifies** the security group when launching the instance, or associates it later on. | **Automatically** applies to all instances in the subnets its associated with. |

** Security Group Constraints**:
- By **default**, security groups are only bound to the **primary network interface**.

### Advanced EC2 Management
- Provides cost optimization recommendations in AWS console.
- **Host recovery** restarts EC2 instances when a problem is detected or when a new host is available.
- **Traffic monitoring** copies network traffic from an **Elastic Network Interface (ENI)** of an EC2 instance and sends it where you need it.


### AWS Batch
- Enables running **batch** processing of scripts within the AWS environment.
- Batch jobs can run at any scale.
- A **job** is a unit of work executed by an AWS batch.

### Elastic Container Service (ECS)
- Implement **Docker** container in AWS.
- No VM builds required.
- Leverages Amazon **Fargate** to automatically build environments.

### Elastic Beanstalk Environment
- Creates an EC2 instance with extra bells and whistles.
- Handles **multi-container** Docker (**compose equivalent**)