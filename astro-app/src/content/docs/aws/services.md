---
title: Amazon Services
description: Overview of additional services that are good to know.
---

### Media Content Delivery

1. **Elastic Transcoder**
   - Media Transcoding.
     - Jobs: Do Transcoding.
   - Pipelines: Queues manage jobs.
   - Presets: Settings to convert media.
   - Notifications: SNS used to notify of job stats.
   - Transcoded files placed in original bucket.
2. **Translate**:
   1. Integrates into applications for localization.
   2. On-demand language translations.
   3. Encoder: Reads source text.
   4. Decoder: Outputs translated texts.
   5. Supports: Arabic, Chinese, Czech, English, French.
3. **Elemental Media Stone**:
   - Vide origination and storage service.
   - COntainers, folders, endpoint, object, policy.
   - Great for live video streams.
   - Just for video storage - use S3.
4. **Transcribe**:
    - Speech-to-text, auto captions.
5. **Rekognition**:
   - Image and video analysis.

### Desktop and App Streaming

**Workspaces**: Virtual desktops in AWS (Linux, Windows).
   - Persistent storage, virtual D-drive.
   - Based on Windows Server virtualization.

**AppStream**: Virtual applications in AWS.

**ElastiCache**: In-memory caching for databases.

### AWS Solutions
- Pre-configured AWS architect plans that solve common problems.

### AWS Transit Gateway
- Interconnect multiple VPC's through one gateway.

### AWS Backup
- Central location to backup everything in the cloud, as well as on-prem servers.
