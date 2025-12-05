---
title: Operational Excellence in AWS
description: Overview of how to achieve operational excellence in AWS.
---

### Resilient Design
- Provides **reliability**: Assurance that the system is there when you need it.
- Automation of recovery, scaling, backups.
- Implement data-recovery, auto-scaling and backups.
- Test recovery and implement automatic recovery whenever possible.

### Performance Design
- In the cloud, you gain the scalability advantage it offers, with potential increased performance.
- Can be enhanced through deploying solutions into multiple regions, which results in the service being closer to the end users.
- Serverless architectures can increase performances as the process receives the performance it requires.

### Security Pillar
- Implement a strong identity foundation: Principle of least privilege and enforce separation of duties with appropriate authorization.
- Apply security at all-levels, account-level, VPC level, subnet, application.
- Automate security best practices: CloudTrail, so actions are logged.

### 3 Phases of Operational Excellence
1. **Prepare**
   - Understand workloads and expected behaviours.
   - Considerations:
     - Operational priorities,
     - Design for operations.
     - Operational readiness.
2. **Operate**
    - Monitor...
      - Environment health.
      - Discover business and technical insights.
    - Respond with...
      - Security.
      - Reliability.
      - Performance.
      - Cost.
3. **Evolve**
    - Learn from experience.
    - Shared learning.
    - Improve & scale.