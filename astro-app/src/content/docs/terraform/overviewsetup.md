---
title: Overview and Setup
description: Explains how to setup Terraform to work with a cloud provider (AWS)
---

### Terraform Architecture
Consists of two main components:

**Terraform Core**: 
- The engine that processes configuration files and manages the Terraform **state** file.
- Takes Terraform State & Config, then works with providers to map the configuration to each cloud provider, achieving the desired state.

**Terraform Providers**:
- Plugins for Terraform Core that allow it to interact with specific cloud providers and services (in which there are several).
- Maps config and state information to appropriate API calls.

### Installing Terraform (Ubuntu 25.10)

``` bash
sudo apt-get update && sudo apt-get install -y gnupg software-properties-common
wget -O- https://apt.releases.hashicorp.com/gpg | \
gpg --dearmor | \
sudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg > /dev/null
wget -O- https://apt.releases.hashicorp.com/gpg | \
gpg --dearmor | \
sudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg > /dev/null
gpg --no-default-keyring \
--keyring /usr/share/keyrings/hashicorp-archive-keyring.gpg \
--fingerprint
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com noble main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt install -y terraform
```

### Authenticating Terraform in the Cloud
- Create a new user that is purposely built for Terraform, and give it only the permissions they need to provision your desired resources.
- You need to install the Cloud Providers CLI

**AWS**:
```bash
aws configure
ACCESS KEY ID: "INPUT HERE FROM IAM ROLE"
SECRET KEY ID: "INPUT HERE FROM IAM ROLE"
```

## Initializing Terraform
- The main file is always called `main.tf`, where you specify what needs to be provisioned.
- In the directory of the `main.tf` file, run the following commands to get up and running: 
``` bash
terraform init # initialize backend
terraform plan # compare Cloud API for what is deployed vs what is specified in the main.tf file
terraform apply # actually provision the resources
terraform destroy # tear the resources down
```