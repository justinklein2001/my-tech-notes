---
title: Pointers & Memory
description: Overview of how pointers work in memory.
---

### Pointers
- A **pointer** is a variable whose **value** is an **address** in memory.
  - This can be either on the **stack** or on the **heap**.
- To create a pointer variable, we put a * after the type name.
  ```cpp
  int *p;
  ```
- To initialize a pointer variable, we assign an **address* to it.
  ```cpp
  int i = 1;
  int *p1 = &i; // p1 is a pointer to int, value is address of i

  cout << p1 << endl;  // Displays address of i
  cout << *p1 << endl; // Displays the value of i
  ```

### Pointers and Heap Memory
- The **new** operator allocated memory on the **heap** and returns the address of the memory.
    ```cpp
    int *p2 = new int; // p2 points to new alloc from the heap
    ```
- This will call teh default constructor for the class.
- For a built-in type, the data will be left uninitialized.
- We can also get initialized memory.
  ```cpp
  int *p3 = new int{36}; // >= C++ 11
  int *p4 = new int(36); // older versions
  ```

### Heap Allocated Memory
- Memory from the heap will remain allocated to the program until it is released.
  - If the programmer does not **explicitly** release it, the memory will **remain allocated** until the program is released.
- The operating system **restricts** the amount of memory a program can **allocate**.
  - If a program uses too much memory, the operating system may refuse to allocate any more memory.

### Memory Leak
- Failing to release memory when it is no longer needed causes a memory leak.
  ```cpp
  void badfunc() {
    int *p4 = new int{42}; // Allocate memory in function
    // ...
    return; // Return without releasing memory
  } // memory leak!
  ```

### Releasing Memory
- The **delete** operator releases memory that was allocated by **new**.
  ```cpp
  delete p;
  ```
- This will call the **destructor** for the object(s) in memory, then release the allocated memory.
  - The **p** variable will still exist, but represents memory that is **no longer accessible by the program.
    - It's a dangling pointer.
    - Attempting to access it will result in **undefined behaviour**.
- **For every new operation, there should be a matching delete operation**.

### Array Allocation
- We can allocate a **block** of memory and **access it as if it were an array**.
  ```cpp
  int *pa = new int[20];
  for (int i=0; i< 20; i++){
    pa[i] = i;
  }
  ```
- In this case, we need to use a **special** form of **delete** to release memory.
  ```cpp
  delete [] pa;
  ```
- Using the other form results in **undefined behaviour**.