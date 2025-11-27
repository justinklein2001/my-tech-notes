---
title: Designing Cost-Optimized Compute
description: Overview of ways to optimize costs in AWS.
---

### AWS Amplify
- Front-end and back-end full-stack development.
  - Authentication
  - Storage
  - APIs
  - Supports Angular, Vue, React, Node
  - A few clicks configures all requires AWS services to provide the full-stack.
  - Includes visual UI design
  - Figma designs can be imported and automatically converted to code.

### AppSync
- Provides a GraphQL-based solution for data integration.
- Data sources include DynamoDB, Lambda and HTTP APIs.
- Effectively acts as a GraphQL proxy allowing for access to other data sources that may not be cloud native.

### Device Farm
- Provides a farm of real iOS and Android phones/tablets for testing apps.
  - Automated testing with testing frameworks.
  - Manual testing through remote access and control.

### Lambda
- Compute service that runs code without servers.
- Runs code only when needed.
- Scales automatically (up to thousands of requests per second.)
- Billed by compute time.

**Automated Management**:
- Handles server and operating maintenance, logging.
  -Supports Node.js, Java, C#, Go, Python

**Lambda Use Process**:
1. Customer builds teh code.
2. Customer launches the code as a Lambda function.
3. AWS selects server.
4. Customer calls Lambda function as needed from applications.

### API Gateway (Serverless Architecture)
- API management in the cloud.
- Can interact with many targets (AWS services, other web services).

**Serverless Architecture**: Moves data in and out of the cloud without instances.
- Process functions without instances.

**Two Primary Services: APi Gateway + Lambda**

**Cross Origin Resource Sharing (CORS)**:
- Can be enabled for the API Gateway.
  - Allows receipt of requests from other domains.
    - Default is internal domain requests only (ie your backend only)
  - Without it, errors will occur (denials).

### Kinesis
- Processes streaming data.
- Real-time analytics.
- Multi-tier enabler.
- Very DevOps focused.
- Architecture is fully managed.
  - Configure producers & consumers.
  - Focus is on the analytics.

**Kinesis Data Streams**:

Input -> Kinesis Data Streams (temp) -> Processing Tools (Lambda) -> Output (Analytics)

**Kinesis Data Firehose**:

Input -> Kinesis Data Firehose (direct) -> Data Stores (S3) -> Output (Analytics)

**Kinesis Video Streams**:

SDK video device -> Kinesis Firehose -> Output (Video)

**Kinesis Data Analytics**:
- Analyzes real-time data streams.
- Based on standard SQL queries.
- Supports concurrent consumer streams.

Input (Kinesis data firehose) -> Kinesis Data Analytics (SQL queries against streams) -> Output (S3)

### Reference Architectures
- AWS provides well-architected frameworks.