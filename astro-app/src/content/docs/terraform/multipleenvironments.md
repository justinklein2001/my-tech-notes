---
title: Managing Multiple Environments
description: Explains how to manage multiple envs in terraform.
---

Sometimes you need to deploy not only to production, but to staging or development. How do you handle this?

### Two Main Approaches to Multiple Environments
1. **Workspaces**
   - Multiple named sections within a single backend.
   - `terraform workspace new dev`
2. **File Structure**
   - Directory layout provides separation, modules provide reuse
 ```
    _modules
        main.tf
        variables.tf
    dev
        main.tf
    production
        main.tf
```
   - Further separation (at logical component groups, such as compute, networking etc..) is useful for larger projects.
     - Isolate things that change frequently from those which don't.
   - Referencing resources across configurations is possible using terraform_remote_state.