---
title: Introduction to tailwindCSS
description: Overview of utility-first approach and the JIT.
---
- It's a **utility-first** ideology, not a framework.
- Instead of leveraging pre-built components, it leverages small, reusable utility classes.
- It has its own ecosystem of supported component libraries.

### How it works
- It's a predefined CSS rule - Instead of writing monolithic custom CSS blocks, extrapolate each CSS property to its own class, that can be assigned within an html components class.

### Why not use pure CSS?
- Can't use pseudo classes.
- Can't access media-queries.
- Cannot be reused.

### Margins vs Paddings:

**Margins**: external spacing, pushes the element away from others.

**Padding**: internal spacing, pushed objects in-towards nested elements.

### Centering a Div (classic!)
```html
<div class="flex justify-center items-center"></div>
```

### Just-In-Time Compiler (JIT)
- Generates styles on command.
- Tailwind only includes the styles your project actually uses.
- Keeps your final CSS small and efficient.

**Adding custom CSS to the compiler**
```css
element-[value]
text-[20px]
```
