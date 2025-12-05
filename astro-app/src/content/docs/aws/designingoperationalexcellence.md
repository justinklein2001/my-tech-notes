---
title: Designing For Operational Excellence
description: Overview of ways to leverage services in AWS.
---

### CloudFront
- **Content Delivery Network (CDN)**
    - Distribute content to localized regions.
    - Reduces latency, provides high data transfer speeds.

**3 Types of Items Usually Leveraged**:
1. **S3** - **Cached** locally near the user.
2. MediaPackage Channel - AWS service for different media types.
3. HTTP(s) Server.

**Content Access**: **Public** or **Restricted**.

**Content Restraint**: HTTPS required, Geo-Restrictions (ie Netflix).

**CloudFront** uses regional edge caches and edge locations to provide localized content.

### Web Application Firewall (WAF)
- Controls **access** to HTTP and HTTPS servers.
    - Based on requests.
    - Based on source IPs.
- Works with CloudFront or Private Elastic Load Balancer.

**WAF Behaviours**:
- **Allow all requests**.
    - **EXCEPT for the ones you specify**.
Monitoring:
- Requests that match specified parameters.

**WAF Operations**:
- Error Handling: HTTP Error, like HTTP 403 Forbidden.
- Configurable Default Behaviour: Allow or Deny.

### AWS Shield
- **Standard**: **Monitoring** and **DDoS support** (Free)
- Advanced: $3k USD/month.

### Simple Queue Service (SQS)
- Used to **decouple** applications.
    - **Break** applications into **separate** **processing** **tasks**.
    - Allow many small processes to form a complete solution.

**SQS Messages**:
- Outputs from other processes, inputs to other processes.
- Queued and processed asynchronously.
- Up to 25 KiB data.

**SQS Participants**:
- Message producers.
- Message consumers.
- Messaging service (SQS)

**Good to Know**: 
- It's redundant across multiple AZs.
- Queued until processed.
- Retention up to 14 days.
- Auto-scales.

**Queue Types**:
1. **Standard** (Default)
    - Doesn't guarantee sequential delivery of messages.
2. **First-In-First-Out**:
    - Guarantees sequential delivery of messages.
    - Supports fewer transactions per second.

### Simple Notification System (SNS)
- Getting **alerts** in the cloud.
- Uses the pub-sub messaging model based on "topics".
- Stored across multiple AZs.
- Several Delivery Options:
    - HTTPS/HTTPS
    - Email
    - SMS
    - Lambda
- Max 256 Kib of Data
- SMS Max: 140 bytes.

### Simple Workflow (SWF)
- Defines the sequence of events required to achieve a workflow.
- Used to decouple application.

**Workflows**: Activities that result in a desired objective, logic that controls the activities.
- Decider function determines the best workflow.
- Operates in a Domain:
    - Logical boundary to constrain scope of activities.

**SWF Activity Workers**: Applications that receives and processes activity tasks.

### Step Functions
- Replacement for SWF, recommended by AWS. Can flow through different steps in parallel concurrently.