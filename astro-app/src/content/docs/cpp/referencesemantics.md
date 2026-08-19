---
title: Reference & Value Semantics
description: Why C++ doesn't have garbage collection.
---

### Reference Semantics
- Some languages default to using pass by reference.
  - AKA when an object is initialized from another object, or passed as a function argument, a reference is used.
- With this, the original variable cannot be destroyed until all other objects which are using it's memory have been destroyed.
  
### Garbage Collectors
- To manage the lifetimes of all of these objects, the language provides a garbage collector.
  - The program keeps track of all objects within it.
  - It also keeps track of which objects are using another object's memory.
  - The program periodically stops executing and goes through all the objects and decides which memory allocations it is safe to release.
    - This is added overhead, requires more processing and memory.
    - It can't execute any instructions while the garbage collector is running.
  - This also means memory cannot be released immediately.
  - We cannot predict the order/timing of when objects are destroyed.

### C++ Specific Semantics
- Uses <b>pass by value</b> by default.
- If we want reference semantics, we can have them.
  - Heap allocated objects can exist beyond the end of the scope (think malloc or smart pointers).