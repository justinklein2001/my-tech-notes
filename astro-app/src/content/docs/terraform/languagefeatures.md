---
title: Language Features
description: Explains the language features of terraform.
---

### Expressions + Functions

**Expressions**:
- Template strings
- Operators (!, -, *, /, %, >, ==, etc...)
- Conditionals (cond ? true: false)
- For ([for o in var.list: o.id])
- Splat (var.list[*].id)
- Dynamic Blocks
- Constraints (Type & Version).

**Functions**:
- Numeric
- String
- Collection
- Encoding
- Filesystem
- Date & Time.
- Hash & Crypto
- IP Network
- Type Conversion

### Meta-Arguments

**depends_on**
- Terraform automatically generates dependency graph based on references.
- If two resources depend on each other (but not each others data), `depends_on` specifies that dependency to enforce ordering.
- For example, if software on the instance needs access to S3, trying to create the `aws_instance` would fail if attempting to create it before the `aws_iam_role_policy`.

```terraform
resource "aws_instance" "example" {
    depends_on = [
        aws_iam_role_policy.example
    ]
}
```

**count**
- Allows for creation of multiple resources/modules from a single block.
- Useful when the multiple necessary resources are nearly identical.

**for_each**
- Allows for creation of multiple resources/modules from a single block.
- Allows more control to customize each resource than count.

```terraform
locals {
    subnet_ids = toset([
        "subnet-abcd",
        "subnet-1234"
    ])
}

resource "aws_instance" "server" {
    for_each  = local.subnet_ids
    subnet_id = each.key
}
```

**lifecycle**
- A set of meta arguments to control terraform behaviour for specific resources.
  - `create_before_destroy` can help with zero downtime deployments.
  - `ignore_changes` prevents Terraform from trying to revert metadata being set elsewhere.
  - `prevent_destroy` causes Terraform to reject any plan which would destroy this resource.

```terraform
lifecycle {
    create_before_destroy = true
    ignore_changes = [
        tags
    ]
}
```

### Provisioners
Perform action on local or remote machine.
- file
- local-exec
- remote-exec
- vendor
  - chef
  - puppet