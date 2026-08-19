---
title: Array, String & Vector
description: Overview of arrays, dynamic arrays, std::string and std::vector.
---

### Array
- Am indexed block of contiguous memory, inherited from C.
- It can be allocated on the program's stack, but only if the number of elements is **fixed** and known at **compile** time.
  ```cpp
  int arr[5];         // allocated on the stack
  int arr[nElements]; // not allowed in C++, unless nElements is a const
  ```

### Dynamic Array
- Array allocated on the heap, this is done if:
  - We do not know the number of elements at compile time.
  - We want to be able to vary the number of elements.
  - The array's memory needs to be **explicitly** released when no longer needed.
  ```cpp
  int *pArr = new int[nElements];
  delete [] pArr;
  ```

### C-Style String
- An array of **const char**, each character in the string is an element in the char array.
- **Null-character** terminated.
- **String literals** are C-style strings.
  ```cpp
  const char *str = "Hello"; //equivalent to const char str = {'H','e','l','l','o','\0'};
  ```

### std::string
- It's a class.
- It has a member function which is a dynamic array.
- It also has a member which stores the number of elements in the array.
  ```cpp
  class std::string {
    char *data; // block of contiguous memory
    size_t n;   // number of elements in the array
  }
  ```
- std::string objects behave like a **dynamic array**, but is used like a **local variable**.
  ```cpp
  std::string hello{"Hello"}; // allocates storage on the heap in the constructor.
  ```
- Released in the destructor at the end of the scope.
- Correctly handles copying and  assigning objects by allocating a memory block.
- **Automatically** reallocates the memory block when need.

### std::string Interface
- Subscript notation `[]` is supported.
- Elements are indexed, starting from 0
- `size()` member functions return the number of elements.

### std::vector
- Similar to `std::string`, but can store data of any **single type**.
- The **type** of data is a **parameter** of the class.
  ```cpp
  std::vector<int> vec {3,2,1);
  ```
- The `std::vector` class has a member which is a dynamic array.
  ```cpp
  class std::vector<int> {
    int *data;  // block of contiguous memory
    size_t n;   // Number of elements in the array
  }
  ```

### std::vector Interface
- Subscript notation `[]` is supported.
- Elements are indexed, starting from 0
- `size()` member functions return the number of elements.
- `push_back()` adds a new element at the **back** of the vector.
  ```cpp
  vector <int> vec{4,1};
  vec.push_back(0);
  ```