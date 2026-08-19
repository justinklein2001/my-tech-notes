---
title: Special Member Functions
description: Overview of the Constructor, Copy Constructor, Assignment Operator and Destructor
---
- Some member functions are **special**.
  - They concern the **management** of objects.
  - Their names are related to the class's name.
  - The compiler will **automatically** insert calls to these member functions when needed.
  - In some classes, the **compiler will create them for us**.
- In traditional C++, these member functions are...
  1. Constructor
  2. Copy Constructor
  3. Assignment Operator
  4. Destructor

### Constructor
- Has the same name as the class.
- Initializes a newly created object using its arguments.
- Performs any initial configuration required.
  ```cpp
  // init object from arguments
  Test(int i, const string& str): i(i), str(str) {
    // allocate memory, connect to the db, etc...
  }
  ```

### Copy Constructor
- Similar to constructor, but uses another object for initialization.
  - Always takes **one** argument.
    - A **reference** to another object of the **same class**.
  ```cpp
  // init object from another Test object
  Test(const Test& other): i(other.i), str(other.str) {
    // do stuff
  }
  ```

### Assignment Operator
- Assigns an existing object from another object
- Always takes **one** argument: 
  - A **reference** to another object of the same class.
- Returns a **reference** to the assigned object:
  - Should be a **non-const reference**, for consistency with built in types.
  ``` cpp
  // Assign object from another Test object
  Test& operator = (const Test& other) {
    i = other.i;
    str = other.str;
    return *this;
  }
  ```

### Destructor
- Called before the class members are released in memory.
- Performs any tidying-up required **before** the object is destroyed.
  ```cpp
  // Prepare object to be released
  ~Test() {
    // release allocated memory, disconnect from db, etc...
  }
  ``` 