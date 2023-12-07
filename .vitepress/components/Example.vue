<script setup>
import { useData } from 'vitepress'
import Vimeo from './Vimeo.vue'

const { frontmatter } = useData()
</script>

<template>
  <div class="tip custom-block">
    <slot></slot>
  </div>

  <Vimeo :id="frontmatter.vimeo" />
</template>
