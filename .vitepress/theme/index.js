// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import Example from '../components/Example.vue'
import Exercise from '../components/Exercise.vue'
import Vimeo from '../components/Vimeo.vue'
import AnswerInput from '../components/AnswerInput.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Example', Example)
    app.component('Exercise', Exercise)
    app.component('Vimeo', Vimeo)
    app.component('AnswerInput', AnswerInput)
  }
}
