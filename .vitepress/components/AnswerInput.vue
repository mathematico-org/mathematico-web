<script setup>
import { reactive } from 'vue'
import confetti from 'canvas-confetti'

const props = defineProps({
  answer: { type: Number }
})

const state = reactive({
  guess: null
})

function handleSubmit() {
  if (Number(state.guess) === Number(props.answer)) {
    burstConfetti()
  } else {
    state.guess = null
  }
}

function burstConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42']
  })
}
</script>

<template>
  <form action="" @submit.prevent="handleSubmit">
    <input
      v-model="state.guess"
      id="guess"
      name="guess"
      type="text"
      placeholder="Check your answer..."
    />
    <button class="VPButton medium brand">Submit</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

input {
  height: 3rem;
  background-color: var(--vp-custom-block-details-bg);
  padding: 0 20px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  font-size: 14px;
  border: 1px solid var(--vp-button-alt-bg);
}

input:focus {
  border: 1px solid var(--vp-button-alt-active-bg);
}

button {
  height: 3rem;
  border-color: var(--vp-button-alt-border);
  color: var(--vp-button-alt-text);
  background-color: var(--vp-button-alt-bg);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0 20px;
  font-size: 14px;
  display: inline-block;
  border: 1px solid transparent;
  border-left: none;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
}

button:hover {
  background-color: var(--vp-button-alt-hover-bg);
}

button:active {
  background-color: var(--vp-button-alt-active-bg);
}
</style>
