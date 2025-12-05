---
title: Organization and Modules
description: Explains how to organize projects in modules.
---

### Modules
**Modules** are containers for multiple resources that are used together.
- Consists of a collection of .tf and/or .tf.json files kept together in a directory.
- The main way to package and reuse resource configurations with Terraform.

**Types of Modules**
**Root Module**: Default module containing all .tf files in the main working directory.
**Child Module**: A separate external module referred to from a .tf file.

**Module Sources**:
- Local Path
```terraform
module "web-app" {
    source = "../web-app"
}
```
- Terraform registry
```terraform
module "consul" {
    source  = "hashicorp/consul/aws"
    version = "0.1.0
}
```
- GitHub, Generic Git
```terraform
# HTTPS
module "example" {
    source = "github.com/hashicorp/your_repo"
}

# SSH
module "example" {
    source = "git@github.com:hashicorp/your_repo.git"
}
```
### Inputs + Meta-Arguments
- Input variables are passed in via **module** block.
```terraform
module "web_app" {
    source = "../web-app-module"

    # Input Variables
    domain  = "justinklein.ca"
    db_name = "mydb"
    db_user = "mysql"
    db_pass = var.db_pass
}
```
### What Makes a Good Module?
- **Raises the abstraction level** from base resource types.
- Groups resources in a logical fashion.
- Exposes input variables to allow necessary customization + composition.
- Provides useful defaults.
- Returns outputs to make further integrations possible.
- 