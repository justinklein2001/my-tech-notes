---
title: Declaration and Initializations
description: Overview of universal initialization & nullptr.
---

### Universal Initialization
- **Brace Initialization**: Can be used with any type.
  ```cpp
  // do this
  vector <int> vec{4,2};
  // instead of this
  vector <int> vec;
  vec.push_back(4);
  vec.push_back(2);
  ```

### Advantages
- Narrowing conventions are **not** allowed.
  ```cpp
  int x = 7.7; // legal, only compile warning
  int x{7.7};  // illegal, won't compile
  ```
- It is **consistent**.
  ```cpp
  vector <int> old_one(4)    // 0,0,0,0
  vector <int> old_one(4,2) // 2,2,2,2
  vector <int> uni{4}      // 4
  vector <int> uni {4,2}  // 4,2
  ```
- Avoids **ambiguity**.
  ```cpp
  Test test(); // object creation or function declaration?
  Test test{}; // object creation!
  ```

### nullptr
- Literal representing a null pointer.
- It has a special type which is compatible with any pointer type, but **cannot** be converted to an **integer**.
  ```cpp
  void func(int);
  void func(int *);
  func(nullptr); // calls func(int *) as expected 
  ```
- The traditional **NULL** has the value of **0**.
- It's type is implementation defined.
  ```cpp
    func(NULL); // Clang: calls func(int *), VC++: calls func(int), GCC: Won't compile
  ```