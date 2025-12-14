---
title: Custom Styling & Reusability
description: Overview on all major directives.
---

#### tailwindcss directives:
**theme directive**: Add elements to your theme.
  ```css
  @import "tailwindcss"

  @theme {
    --color-chestnut: #973F29
  }
  ```
**base directive**: Modify the base tailwind config.
  ```css
  @layer base {
    h1: {
        color: green;
    }
  }
  ```
**components directive**: Style components.
  ```css
  @layer components {
    .card {
        background-color: green;
    }
  }
  ```
**utilities directive**: Atomic styles for individual components.
  ```css
  @utility content-auto {
    content-visibility: auto;
  }
  ```
  ```html
  <div class="content-auto"></div>
  ```
**apply directive**: Inserts tailwind css into regular css.
  ```css
  .select-dropdown {
    @apply rounded-b-lg shadow-md;
  }
  ```