---
title: Amazon VPC Security
description: Deep-dive into VPC Security.
---

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

**Network Address Translation (NAT)**
- Translates a single **external** address to **multiple internal** addresses.
  - In most cases, the external address is a true external Internet address.
  - External address may be another internal network address in less common implementations.
  - The Nat device **tracks** the outgoing messaging and the incoming responses to those messages.

**AWS NAT Gateway**:
- Implements **NAT** as a **service**.
- Instances in a private subnet (**non-internet routable**) can initiate communications.
- External devices **cannot** initiate internal connections.
- Supports **public** and **private** implementations. 

**NAT Instances**:
- Implemented via **EC2**.
  - Allows **Linux/Windows** based NAT services.
  - Implement in a **public** subnet, allows instances linked in the **private** subnet to access **Internet** resources.

### Gateway VPGs and CGWs

**Virtual Private Gateway (VPG)**: Connects **local** networks to the VPC.
- It is the **VPN concentrator** (concentrate multiple VPN connections into the VPG one-connection).

**Customer Gateway (CGW)**: Physical device or software application - **anchored on the customer side**, connecting to the **VPG**.

**Alternatives**:
- AWS hardware VPN
- AWS Direct Connect
- VPN CloudHub
- Software VPN

**VPN Configuration Options**:

- **Split-tunnel** gives for routing traffic across the VPN, specifically for traffic going directly out to the internet.
- AWS has now enabled certificates for authentication to the VPN
- Direct Connect bypasses traditional Internet Service Provider (ISP) and connects **straight to AWS**.