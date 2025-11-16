---
title: VPC Peering
description: Deep-dive into Virtual Private Cloud Peering.
---
- **Connect** one VPC to another.
- **Owner role** required for both **sender** and **receiver** VPCs.
- **IP CIDR blocks** in each VPC must **not** overlap.
- May require **routing table** and **security group** modifications.

### Amazon VPC Security:

**Security Groups**:
- Equivalent to a **firewall**.
- Assigned to an **instance** in a VPC.
- Applied to **instances**, **NOT** **subnets**.
- Defines allowed traffic flows.
  - **Ingress** (entrance).
  - **Egress** (exit).
  - Supports only **allow**, **deny is implicit**.
  - It's **stateful** (persists)

**Network Access Control Lists (NACLs)**
- Applies to **subnets**.
- **Stateless** processing.
- Supports both **allow** and **deny** rules.
- Rule number defines **precedence** (lower first, first match applies).

