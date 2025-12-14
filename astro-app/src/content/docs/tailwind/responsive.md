---
title: Media Queries & Responsive Design
description: Overview on media queries.
---
- Uses **pre-defined** components width, by default they set a default min-width (mobile first).
  ```html
  <div class="md:block hidden">
    <p class="text-white">I appear on screen wider than 768px</p>
  </div>
    <div class="max-sm:bg-amber-500 md:bg-amber-700">
    <p class="text-white">I appear on screen wider than 768px</p>
  </div>
  ```
  - Don't use `sm:` to target mobile, it's already **mobile-first**.
  - These tags aren't for **screen-size**, but for **breakpoints**.

### Dark Mode
- Supports dark mode **natively**.
```html
<div class="dark:bg-black text-black: dark:text-white"></div>
```