---
title: Compute Services Design
description: Deep-dive into EC2 Design.
---

### EC2 Overview

**Elastic Compute Cloud**: Virtual Machine (VM) in the cloud.
- Leverages **pay as you go**.
- Integrates with **storage, networking and security**.


### EC2 Deployment

1. Select an **Amazon Machine Image (AMI)**.
2. Configure **networking and security**.
3. Choose the **instance type**.
4. Choose **AZ Zone**.
5. Attach **storage** (ABS).
6. **Start** the instance.

**EC2 Instance Types**:
1. **General Purpose**: T2 (**burst**), M5, M4, M3
    - Provides a **balance** of **memory** and **network** resources.
    - **T2** provides **burst** performance, credits accrued on **idle** stored when bigger load.
2. **Storage Optimized**: H1, I3, D2
   - Useful for **high memory** requirements (in-mem dbs, large dbs)
3. **Advanced Computing**: (P3, P2, G3 and F1)
   - Specialty Hardware (**GPU**)

**Instance types can be swapped at a later time**.

### EC2 Pricing

**Pricing Categories**:
1. **On Demand**: Charged for usage at a **flat-rate**.
   - Billed in **60-second** increments **rounded up**.
2. **Reserved**: Reserve usage for a minimum of **1 year**, usually cheaper.
   - Cheapest way is to do **more** years and pay **everything** up front.
3. **Spot** Big on **unused** compute time (up to **90% cheaper** than on-demand).

