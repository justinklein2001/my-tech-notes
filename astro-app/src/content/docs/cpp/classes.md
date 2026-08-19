---
title: Classes
description: Overview of Classes in C++
---
- A class is a **compound** data structure.
- They have **member functions** as well as **data members**.
  - We choose which member functions to have, what their names are, what they do and when they are called.
  - Members determine the behaviour of objects of the class.
  - They are called to perform operations on an object.
- By **default**, access to class members is **private**.
  - Only objects of the class can access a private member.
- Class members can be made **public**.
  - A public member can be accessed by any code in the program.

### Public and Private Members
- The **public** members provide the **interface** of the class.
  - AKA **what it does**.
- The **private** members provide the **implementation** of the class.
  - AKA **how it does it**.
- A **struct** is the same as a class, except all the members are **public by default**.

### Member Function Implementation
- Member functions are implemented as **global** functions.
- When a member function is called on an object, the object is passed by **address** in a hidden argument.
  ```cpp
  Test test;
  test.func(1,2.0, "three"); // Called as Test::func(&test,1,2.0,"three")
  ```
- The **pointer** to the object is available as **this** in the function.
- Dereferencing **this** gives access to members of the object.
  ```cpp
  // in the body of Test::func()
  this->i = 1; // or just i = 1
  // "this" is equivalent to &test

  ```