<script setup>
const props = defineProps({
  id: {
    type: String,
    default: null,
    required: true
  }
})
</script>

<template>
  <div class="wrapper">
    <iframe
      :src="`https://player.vimeo.com/video/${props.id}`"
      class="v-video"
      width="100%"
      style="border-radius: 8px"
      allow="autoplay; fullscreen"
      allowfullscreen
    />
  </div>
</template>

<style scoped>
iframe {
  border: none !important;
  width: 100%;
  height: 100%;
  max-width: 100%;
}

.wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 8px;
}
</style>
