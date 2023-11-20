<script setup>
const props = defineProps({
  id: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <p>{{ props.id }}</p>
</template>
