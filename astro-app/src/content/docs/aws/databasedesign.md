---
title: AWS Database Design
description: Overview of designing DBs in AWS.
---

## Database Types
1. **Hosted Services**
    - Both relational and non-relational.
    - AWS Relational Database Service (RDS)
2. **Custom Instance**
    - Start the instance with the required OS (AMI).
    - Install the database service (bring your own).


### Flat-File vs Relations
**Flat-File Databases**:
- Have one line per record.
- Doesn't contain multiple tables (think Excel).

**Relational Databases**:
- Store portions of the data in designated tables.
- Tables are related based on unique identifier.

**NoSQL**:
- Not based on SQL or relational databases.
- Design supports fast transactions.

**Data Warehouses**: 
- Large, central repository for data, aggregated from one or more services.
- Used for online analytical processing (OLAP) - RedShift.

### Database Hosting Methods
1. **EC2 Instance-Based**
    - Launch an instance, install the db service, open appropriate ports in security group, connect to the DB.
2. **AWS Service-Based**
    - Launch DB, connect to the database.

### High-Availability Solutions

**Clustering**: Multiple instances, one database with replication, high availability, automatic failover.

**Standby Instances**: Multiple instances, one database with replication, increases recoverability, with no automatic failover.

You can use a single AZ deployment (one instance, one AZ, one region) OR multiple AZ deployment.

### Scalability Solutions
- For increasing capacity for storage and processing,

**Methods**:
- **Scale the Instance**: Increase type/class of EC2 instance.
- Note that **auto-scaling is not supported in RDS**.
    - But can be scripted via CLI.
- **Read-Replica**: Read-only copy of DB, offloads read-only traffic from the main DB.

### Database Security

**Encryption**:
- RDS databases support **"at-rest" encryption**.
- Must be **enabled** at **creation time**, can be enabled manually on recovery.

**Permissions**:
- Administration access based on IAM.
- Data access based on database capabilities (CRUD).
- Create a DBAdmin user for DB access.

### Aurora
- Relational DB.
- Optimized for online Transaction Processing (OTP) (**Very fast writes**).
- MySQL-compatible DB, yet syntax is more efficient.

**Scaling Aurora**:
- Initially 10 GB, scaling in 10 GB increments (max 64 TB).
- Max 32 CPU, s44 GiB RAM.
- Availability defaults: 2 DB copies in each AZ, min 3 AZs.
- Write capability: Continue to write even if 2 are lost.
- Read capability: Continue after 6 are lost.

**Aurora Replicas**: Up to 15, automatic failover.
**MySQL Read Replicas**: Up to 5, no automatic failover.

### RedShift
- **Data warehouse database**.
- Optimized for online analytical processing (OLAP).
- AWS managed.
- Pricing: entry: $0.25/hr or $1000 per TB/yr.
- Single node: 160 GB.
- Multi-node:
    - Leader Node: Connections and queries.
    - Compute Node: Store data and execute queries and calculations.

**RedShift Speed**
- Column like data stores, de-normalized (very fast sequential reads).
- Data compressions, massively parallel processing (MPP).

**RedShift Security**:
- SSL transit encryption.
- AES-256 storage encryption.
- Key managed through AWS key management. 

**Availability**:
- Operates in one AZ,
- Snapshots can be restored to new AZs.

### DynamoDB
- **NoSQL** database service.
- Provides special features.
  - **Millisecond latency at any scale**.
  - Very fast read and writes.
- Stored on SSD.
- Spread across 3 distinct data centers.

**Read Consistency Types**:
1. **Eventual Consistent Reads** (Second delays)
2. **Strong Consistent Reads** (Millisecond delays)

**Pricing**:
- Storage: $0.25/GB/month
- Throughput:
  - Write: Billed per hour for every 10 units.
  - Read: Billed per hour for every 50 units.
  - 1 unit = 1 write/second.

### Data Security Policies:

**Compliance vs. Policies**:

**Compliance** is **External (what)**:
- Government regulations.
- Industry requirements.
- Partner agreements.

**Policy** is **Internal (how)**:
- Data creation, management & destruction.

**Cardinal Rules of Privacy**:
- Do what is required.
- Do what you promise.
- Report quickly and accurately.

**Concerns**:
- Data is stored on someone else's network.
- Data is accessed through the Internet.
- Large volumes of data are concentrated.
- Without careful control, unknown data can be stored.
- A single breach = greater loss.

**Less Obvious Concerns**:
- Improperly configured services.
- Unused services remaining active.
- Remote access is how it's accessed. 

**So...**
- Address everything with policies.
- Ensure proper education for admins and users.
- Monitor for compliance.
