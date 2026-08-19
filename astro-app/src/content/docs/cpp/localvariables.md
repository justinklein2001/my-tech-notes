---
title: Local Variables & Function Arguments
description: Overview of pass by reference, address and value.
---

### Local Variables
- They only exist inside a <b>scope</b>.
  - <b>scope</b>: Defined within a pair of <b>braces</b>.
  ```cpp
  {            // start of scope
        int i; // allocate memory for i
        ...    // use i
  }            // end of scope, release memory used by i
  ```

### Pass By Value
- By default, a variable which is passed into a function is <b>copied</b>, as is it's <b>return</b> value.
- This is effectively taking <b>double</b> the memory, as memory is consumed by the original variable and the one copied from it.
    ```cpp
    int func(int y) {   // y is a copy of what is passed into func
        return y;       // copies y into the function's return value
    }
    ```

### Pass By Address
- Involves <b>declaring</b> the function parameter as a <b>pointer</b>, and then supplying the function with a <b>reference</b> to the original variable.
- No double allocation of memory is involved.
    ```cpp
    void func(int* y) { // y will be a pointer to the caller's variable x
        *y = 1;
    }

    int x = 0;
    func(&x);           // x will now have the value 1
    ```

### Pass By Reference
- Acts like a pointer which is <b>automatically dereferenced</b> when used.
    ```cpp
    void func(int &y) { // y will be a reference to the caller's variable x
        y = 1;
    }

    int x = 0;
    func(x)             // x will now have the value 1
    ```

### Pass By Const Reference
- For <b>read-only</b> access to <b>class objects</b>, usually more efficient than pass by value.
  ```cpp
  class MyClass {...};

  void func(const MyClass &mc) { // mc will be a reference to the caller's object
    // do stuff
  }

  MyClass my_class;
  func(my_class) // pass object to func
  ```