---
title: Layouts & Flex-box
description: Overview on positioning layouts.
---

### Position
- Defines where an element appears, relative to its container or the viewport.
- There's **relative** - relative from it's normal position.
- There's **absolute** - moves it to the nearest parent.
- There's **fixed** - sticks the element to the viewport (even through scroll).
- There's **sticky** - like fixed up until a certain point.

### Display -> Flexbox
- Determines how an element behaves in terms of layout and visibility.
- There's **block** - takes up the full-width.
- There's **inline** - no width or height, goes along with text.
- There's **flex** - enables flexbox.
  ```html
  <div class="flex items-center justify-center"></div>
  <div class="flex flex-col"></div>
  ```
- There's **grid** - enables grid properties.
  ```html
  <div class="grid gird-cols-3 gap-2 mt-2">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  ```

### Good Practice
- [Flex Froggy](https://flexboxfroggy.com/)
- [Grid Garden](https://cssgridgarden.com/)

