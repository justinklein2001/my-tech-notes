---
title: AWS Database Deployment
description: Overview of deploying DBs in AWS.
---

### DynamoDB
- You don't create DBs, you only create tables.
  - You need table name & partition/primary key.
  - Use this for fast transactions (mobile apps).

### MySQL
- Requires username & password.
- Available in the free tier.

### Configuring DBs
- RDS managed instances won't be shown to you in thee EC2 view, since it's a fully managed instance.
- They are managed in the RDS dashboards.
  - This is where you configure specific DB instances.
  - When you convert single-to-multi AZ, there is a performance impact.
- Read-Replica:
  - ARN (Amazon Resource-Name) -> use this designation to query DB name.
  - Creates a DNS URL, always use this DNS URL and not the IP (due to multi-AZ zones).
- Some configuration options are only available at creation time, such as Database Type.

### Backups Plan:
- Maximum retention period for an RDS database in 35 days.
- AWS backups the DB regularly using snapshots (by default).
- You can create a snapshots any time you desire.
- Snapshots create a point-in-time picture of the DB.
- When you restore from snapshots, you restore to a new DB instance, not the original.