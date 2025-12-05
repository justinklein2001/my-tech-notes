---
title: Workflows
description: Explains how to use terraform from a dev perspective.
---
### General Workflow
1. Write/update code.
2. Run changes locally (for dev env).
3. Create PR.
4. Run Tests via CI/CD.
5. Deploy to staging via CD (on merge to main).
6. Deploy to production via CD (on release).

**Recommendations**:
1. Have a cron job run `terraform plan` periodically so you know you're safe.

### Multi Account/Project
- Simplify IAM policies for enforcing controls for different environments (and remote TF backends).
- Isolate environments to protect and minimize blast radius.
- Reduce naming conflicts for resources.