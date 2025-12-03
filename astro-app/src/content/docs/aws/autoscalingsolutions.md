---
title: Auto Scaling Solutions
description: Overview of Auto Scaling Solutions.
---

- Monitors your applications and adjusts capacity to fit your needs.
- Adjusts capacity, manage costs.
- Free to use, results of use may cost: more instances, CloudWatch, Elastic Load Balancers...

**Auto Scaling Groups**:
- Collection of instances with similar characteristics.
- Can be scaled based on criteria.
- Unhealthy instances can be auto-replaced (only non-running services)
- Takes time to launch and configure a server, consider this!

### Termination Policies (Scaling In)

**Custom Termination Policies**:
- OldestInstance (Oldest First)
- NewestInstance (Newest First)
- OldestLaunchConfiguration
- ClosestToNextInstanceHour
- Default (AZ Zones -> oldestLaunch -> nextClosestBillingHour -> Random)

### Launching Auto Scaling Groups
- You must create a Launch Configuration to create an auto-scaling group.
- The Launch configuration contains the instance type, key pair & security groups.

**Launch Methods:**
- Launch template must include ALL parameters required to launch an EC2 instance, such as an AMI Id and instance type.
- Role or user using a Launch template must have permission to use the Ec2:RunInstances.
- You can create a custom AMI then launch it through an auto-scaling group.
- Role or user using a Launch template must have permission to use EC2:RunInstances.
- You can create a custom AMI then launch it through an auto-scaling group.

### Load Balancer Concepts

**Load Balancing Categories**:
1. Sender Initiated: Sender locates best target
2. Receiver Initiated: Receiver selects best target (ie load balancer)

**Static Load Balancing**:
- Multi-Tier applications
  - Specific actions are assigned to specific servers/resources
  - Actions always processed on assigned target.
  - No scalability.

**Dynamic Load Balancing**:
- True load balancing
  - Actions dynamically assigned.
  - Scalability is provided.
  - Used by AWS Elastic Loading Balancing (ELB)

**Load Balancing ALgorithms**:
1. Round Robin (RR)
2. Randomized
3. Centrally Managed
4. Threshold-Based

**Elastic Load Balancing (ELB)**:
- Highly available, secure, flexible, monitoring and auditing included.

**3 Types on AWS**:
1. Classic Load Balancer: Intended to work with the legacy EC2-Classic network.
2. Network Load Balancer: Layer 4 (Network), suited for TCP traffic among Amazon VPC.
3. Application Load Balancer: Layer 7 (Individual requests), best suited for http and https requests

**Supported Services**: EC2, ECS, Auto-Scaling, CloudWatch, Route 53



