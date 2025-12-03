---
title: Additional Storage Services
description: Deep-dive into Amazon S3.
---

### S3: Simple Storage Service

**Block Storage**: Used on local networks (ie. **Fibre channels**).
    
- AWS can use block storage with virtual machines within the AWS cloud using EBS.

**File Storage**: AWS treats files as **objects** in **S3**.


### Selecting Storage? Consider...
- **Size**, **performance** and **cost**.
- S3 is **object** storage
  - It is **automatically** distributed across at least **3** availability zones in the given region (**except** the **1A** S3 type, which is just **1** zone, and is the **least** expensive.)

### What About Security?
- S3 supports **encryption** and automatic data classification.
- You can also do big data analytics directly against stored data.

### Getting Data Into S3
- **API** (directly through **code**)
- **Amazon Direct Connect** (**VPN** into AWS)
- **Storage Gateway** (**sync** local data into AWS)
- **Kinesis Firehose** (Large **datasets** into S3)
- **Transfer Acceleration** (Move data optimally from **different regions**)
- **Snow Family** (**Shipping** hard drives to AWS)
  - **Snowball**: Petabyte
  - **Snowball Edge**: 100 TB
  - **Snowmobile**: Exabyte

### S3 Terminology
**Buckets**: **Container** you put objects in.

**Regions**: You put buckets in regions.

**Objects**: Equivalent to a **file**.

**Keys**: Instead of a **filename**, it's a key.

**Object URLs**: **Link** to object.

**Eventual Consistency**: Takes time to allow **consistency** across **all** distributed availability zones.

**S3 works great for static website hosting.**

### Common S3 Operations
- **Creating** and **deleting** **buckets**.
- Write, read, delete objects.
- **Managing** object properties.
- **Listing** keys in buckets.

### REST Interface
- Stands for **Representational State Transfer**.
- Achieved through the **S3 API**.
  - Maps **CRUD** (**Create, Read, Update, Delete**) operations from **HTTP** methods.
    - Ie **create -> PUT/POST**, **read -> GET**

### S3 Advanced Features

**Prefixes and delimiters**:
- No folders in S3, **prefixes** in **keys** are used to **simulate** file **hierarchy**.

### Storage Classes 
Listed from **most** expensive to **least** expensive.
1. Amazon S3 **Standard** 
2. Amazon S3 **Infrequent Access (IA)** Storage
3. Amazon **Reduced Redundancy** Storage (**RRs**)
4. **Glacier**

When you put a file into S3...
- After **60 days** of not being used it is moved to **infrequent access**.
- After another **60 days** it is moved to **glacier**.

### Encryption (2 Types)
1. **Server-Side Encryption**: upload **256** **bit** encryption (**automatic decryption**).
2. **Versioning**: **OFF** by default, **can't be disabled** once enabled.

### Additional Advanced Features
- **Multi-Factor Authentication Delete:** **Requires** MFA to delete.
- **Multi-Part Upload**: Faster **batched** uploads.
- **Ranged GET**: Get objects only from **specific regions**.
- **Cross-Region Replication**: Same data in multiple regions.
- **Logging**: All changes are converted to **event notifications**.


### Buckets

Buckets names need to be **unique** across **all** AWS accounts (**globally unique**).

**Bucket Level Properties**:
1. **Static Website Hosting**
   - Can use the bucket as a **website** with an **unfriendly URL** (use **DNS redirect**). 
2. **Default Encryption**
   - **AES-256**: Server-side encryption with S3-keys.
   - **KMS**: Service to manage encryption keys.
3. **Bucket-Level Permissions**
   - These are **inherited** by all objects in the bucket.
   - **Account** permissions (AWS accounts).
   - **Public accessible** permissions.
   - Bucket-policy (**JSON**-formatted permissions).
   - All have list, read and write permissions.

**Bucket Lifecycle**:
- If you want some objects to have a lifecycle rules and not others in a bucket, you can leverage **prefix/tags**.
- You can also add transitions to bucker standards (Ie IA -> Glacier).

**Deleting Buckets**:
- The **minimum size** for an S3 object is **0 bytes**.
- When you **delete** an object, it is "**marked for deletion**", and can be **removed**.