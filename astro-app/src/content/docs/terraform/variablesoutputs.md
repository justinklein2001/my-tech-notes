---
title: Variables and Outputs
description: Explains how to deal with variables.
---

### Variable Types

**Input Variables**
- **var.<"name">**

```terraform
variable "instance_type" {
    description = "ec2 instance type"
    default     = "t2/micro"
}
```

**Setting Input Variables**

(In order of precedence, **lowest -> highest**)
- Manual entry during plan/apply.
- Default value in declaration block.
- **TF_VAR_<"name">** environment variables.
- **terraform.tfvars** file.
- ***.auto.tfvars** file.
- Command line `-var` or -var-file.

**Local Variables**
- **local.<"name">**

```terraform
locals {
    service_name = "My Service"
    owner        = "Justin"
}
```

**Output Variables**

```terraform
output "instance_ip_addr" {
    value = aws_instance.instance.public_ip
}
```

### Types & Validation

**Primitive Types**:
- **string**
- **number**
- **bool**

**Complex Types**:
- list(<"TYPE">)
- set(<"TYPE">)
- map(<"TYPE">)
- object({<"ATTR NAME"> = <"TYPE">, ...})
- tuple([<"TYPE">,...])

**Validation**:
- Type checking happens automatically.
- Custom conditions can also be enforced.

### Sensitive Data

**Mark variables as sensitive**:
- `Sensitive = true`.
**Pass to terraform apply with**:
- `TV_VAR_variable`.
- `-var` (retrieved from secret manager).

**Can also use external secret store**:
- AWS Secrets Manager.