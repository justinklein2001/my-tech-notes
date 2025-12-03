---
title: Virtual Network Services
description: Overview of Virtual Network Services.
---

### Domain Name System (DNS)
- Read more into RFS 1034 and 1035 protocols.
- Domains are specified bounds of activity.
- Provides name to IP address mapping.

|  **aws** |.|**amazon**  |.|**com**|
|----------|-|------------|-|-------|
| host name| | org domain |  | top-level domain| 

Together they are a **Fully Qualified Domain Name (FQDN)**.

**DNS Hosting**:
- Provides name resolution.
  - Leverages recursion and caching.
- Stores DNS database (zones).
  - Achieved through Aliasing.
- Provide DNS zone transfers.
  - Offloads name resolution processing.

**DNS Resolution**:
- Requests IP address of a hostname (Forward Lookup).
- Requests host name of an IP address (Reverse Lookup).
- Requests is configured with a DNS server address (8.8.8.8 if Google's public DNS IP)

**DNS Records**:
1. A & AAAA: IPv4 or IPv6.
2. NS: Domain to Hostname.
3. MX: Mail Record.
4. CNAME: Real (canonical).

### Route 53 (Custom Domains)
- You can register custom non-paid domains privately within a VPC.

**Routing Policies**:
1. Classic: Simple DNS
2. Weighted: Multiple IP addresses, assign weight for when to route to each app.
3. Latency: Send to the IP with the lowest latency.
4. Failover: if fail, use next IP.
5. Geolocation: Closest IP.
6. Multi-Value Answer: Health checks of IPs, route to healthiest.

### ACL (Access Control List) & NACL
- S3 buckets can use ACLs to determine who has access to buckets (should be a bucket policy instead).
- VPCs and subnets can also use ACLs.
- Can be configured from management console or CLI.

### VPC Flow Logs
- Logging source and destination within a network.
