<script setup>
import { onMounted, reactive, ref } from 'vue'
import rudimentService from '../services/rudiment'

const props = defineProps({
  id: { type: String, default: '' }
})

const el = ref(null)

const rudiment = reactive({
  fetching: true,
  problem: '',
  hint: '',
  solution: '',
  instruction: '',
  answer: null
})

async function fetchRudiment() {
  rudiment.fetching = true
  const data = await rudimentService.get(props.id)
  Object.assign(rudiment, data)
  console.log(rudiment)
  rudiment.fetching = false
}

onMounted(() => {
  fetchRudiment()
})
</script>

<template>
  <ClientOnly>
    <div class="rudiment" ref="el">
      <div
        class="problem"
        v-if="!rudiment.fetching"
        v-katex
        v-html="rudiment.problem"
      />

      <div
        class="problem"
        v-if="!rudiment.fetching"
        v-katex
        v-html="rudiment.instruction"
      />

      <AnswerInput :answer="rudiment.answer" />

      <details class="details custom-block" :key="rudiment.hint">
        <summary>Hint</summary>
        <div v-katex v-html="rudiment.hint" />
      </details>

      <details class="details custom-block" :key="rudiment.solution">
        <summary>Solution</summary>
        <div v-if="!rudiment.fetching" v-katex v-html="rudiment.solution" />
      </details>

      <button @click="fetchRudiment">New exercise</button>
    </div>
  </ClientOnly>
</template>

<style scoped>
.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  height: 3rem;
  width: 100%;
  border-color: var(--vp-button-alt-border);
  color: var(--vp-button-alt-text);
  background-color: var(--vp-button-alt-bg);
  border-radius: 8px;
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
