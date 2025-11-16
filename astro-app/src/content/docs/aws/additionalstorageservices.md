---
title: Additional Storage Services
description: Deep-dive into Glacier, EFS, EBS.
---

### Glacier
**Archival** data storage, costing **fractions of a penny** per GiB/month.

**Three Access Methods**:

Listed from **most** expensive to **least** expensive.
1. **Expedited** (3-5 minutes)
2. **Standard** (3-5 hours)
3. **Bulk** (5-12 hours)

You define the region for storage, where it is stored with **AES-256-bit** encryption.

**Data Retrieval** Up to **5%** can be retrieved at no charge each month with **no rollover**.
- Your **vault** can be configured to **limit costs**.

### Glacier & S3

**2** ways to approach Glacier:
1. Set up a **Glacier Vault**.
2. Use it as a class in **S3**.
   - S3 **cold data** can **automatically** be **moved** into Glacier (via **lifecycle rules**).
   - **Snow** devices can be used to import data.
   - **Storage Gateway** can be connected to Glacier.
   - **Objects** in S3 become **archives** in Glacier Vaults (vaults can be **locked** if needed).

Glacier is **not** available in the **free tier** and your first vault is restricted to your **default region**.

**ARN: Amazon Resource Name (unique identifier)**

**S3 Enhanced Features**:
- Use lifecycle rules to implement itelligent tiering.
- S3 object lock supports **write-once-read-many (WORM)** as a file storage method.
- Batch Operations create jobs to enable automatic options.

### Elastic Block Store (EBS)
- Used for **durable** storage in EC2 instances (**persists** even when an instance is turned off).
- **Block-level** storage from one AWS service to another.

**EBS Volume Types**:
1. **Magnetic** (cheapest, slowest) [Hard Drive] (free-tier eligible)
2. **SSD**
   - **General Purpose**
   - **Provisioned IOPS** (provisioned input/output operations per second)
     - If you need more than **10500 IOPS**, you need **PIOPS**.
   - **EBS-Optimized** instances should be used to take full advantage of SSD storage.

**Protecting EBS Data**:
- Use **snapshots** (backup & duplicate instances)
- **Volume** recovery (caching volumes from one instance to another)
- **Volume-Level** encryption.

EBS **isn't** offered as **standalone service**, but as an **EC2 option** (type of volume).

### Elastic File System (EFS)
- **Shareable** between instances.
- **Hierarchical** (**Real** file/folder hierarchy).
  - Can be accessed through **NFSv4 (Network File System)** while EBS is tied to an instance.
- EC2 instances can use EFS shared, but windows instances cannot.
- EFS Shares can be limited to a **Virtual Private Cloud**.

**EFS & PrivateLink**:
- You can create a **VPC endpoint** to access services from **other cloud accounts**.
- **PrivateLink**: Allows for secure connection between VPCs, services and applications in AWS.

### Amazon FSx
Like a small file sharing server, but in 2 different configurations:
1. **Windows File Server**
2. **Lustre** (the high-performance file system)
- It's **fully managed** and automatically does the prep work, including building the server and joining the active directory.
- Can be deployed to one or multiple **AZ zones**.
- Windows authentication through Active Directory can be self-managed or managed by AWS.

### Integrating On-Prem Storage
- **Storage Gateway**: Software application (**VM**) running on-prem.
  - Provides **3** Types:
    1. **File-based** (also provides an interface to **S3** buckets)
    2. **Volume-based** (SCSI protocol)
    3. **Tape-based** (Virtual tape) 


### Storage Performance
**SSD (General Purpose)**:
- Max **IOPS**: 10 000
- Max **Volume**: 1 GiB - 16 TiB

**Provisioned IOPS SSD**:
- Max **IOPS**: 32 000
- Max **Volume**: 4 - 16 TiB

**HDD Throughput Optimized**:
- Max **IOPS**: 500

**HDD Cold**:
- Max **IOPS**: 250
