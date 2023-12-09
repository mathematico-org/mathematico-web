---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Mathematico'
  text: 'Learn and revise'
  tagline: Everything you need to ace your exams
  image:
    src: '/logo.svg'
    alt: Mathematico
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Generated exercises
    details: Keep practising until you have every skill totally dialled
  - title: 1000s of problems
    details: Challenging problems with hints and solutions to get you exam-ready
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>

import { data as skills } from './skills.data'
console.table(skills)

</script>
