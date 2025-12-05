---
title: Compute Services Implementation
description: Deep-dive into implementing various compute services.
---

### EBS and EC2

**Elastic Block Storage (EBS)**: **Persistent** block storage.
- Requires an **EBS-optimized instance**.
- **Magnetic** or **SSD**.

**AWS Compute Optimizer**:
- **EC2/C2** auto-scaling, it needs **30 hours** of consecutive **Cloud-Watch metric data** to make recommendations.


### Windows Server
- Requires more **power** than Linux instances.
- After launching it, connect to it with **Remote Desktop**.
- You will need an **RDP configuration file** downloaded from AWs to access the Windows instance.

### Shared Tenancy
- **Multiple customers** share the time and space on the physical machine.
- This is the **default** instance behavior.
- **Pros**: Simpler deployment, reduced costs.
- **Cons**: Lower performance, less control.

### Dedicated Hosts
- Physical machines run the virtual machines.
- Used by **one customer**, explicitly configured, cannot be free.
- **Pros**: More accurate licensing management, detailed reporting, compliance management.
- **Cons**: **Much** more **expensive**.

### Dedicated Instance
- Runs on a physical machine, and it's the only instance on the machine. **However...**
  - On **restart**, it can be **moved**.
  - **Less** accurate license management.

### Amazon Machine Image (AMI)
- **Blueprint** with server configuration.
- **Hardware Virtual Machine (HVM)**.
  - AMIs fully **virtualize** the hardware.
