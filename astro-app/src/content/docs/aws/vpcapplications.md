---
title: Amazon VPC Applications
description: Deep-dive into Virtual Private Clouds.
---

### Virtual Private Cloud (VPC)
- A virtual private personal data center.
- Can leverage a **VPN** to access it.

**VPC Provisions**
- Applications run in the VPC or on-prem.
- **Subnets** can be created in the VPC.
- **VPC endpoints** connect to resources.

There is a **default VPC**, Amazon does **not** recommend **deleting** it.

**Features**:
- **Dynamic private IP**
- **Dynamic public IP**
- AWS-provisioned **DNS** names
- **Private** DNS names
- **Public** DNS names

**Tenancy**: 2 Types
1. **Default**: new VPCs share resources with default VPC.
2. **Dedicated**: Separate hardware, costs more.


**VPC's can't talk to each other without a VPN**.

**DHCP**: Specifies the range of addresses to assign to devices on the network,
- **Option**: Config for IP protocol on the client that receives the connection.

**Elastic Ip  Addresses (EIP)**
- **Public** IP addresses from the VPC region.
- **Permanently allocated** to your account until **released**.
- Account is **charged* until release.
- **Network interfaces** consume EIPs
- EIPs can only be moved between instances in the **same region**.

**Elastic Network Interface (ENI)**:
- Virtual network interface attached to an instance.
- **Only available** within a VPC.
- Allows **dual-homing** (1 connection to the **internet**, 1 to the **private network**)

**Endpoints**:
- Connect VPCs to AWS Services
- Can enforce policies on different endpoints

**Creating an endpoint**:
- Specify the Amazon VPC.
- Specify the service that we want to connect to.
- Specify the policy.
- Specify the route tables.