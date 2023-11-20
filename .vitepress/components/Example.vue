<script setup>
import { useData } from 'vitepress'
import Vimeo from './Vimeo.vue'

const { frontmatter } = useData()
</script>

<template>
  <slot></slot>

  <Vimeo :id="frontmatter.vimeo" />
</template>
