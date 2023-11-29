import renderMathInElement from 'katex/contrib/auto-render'

const options = {
  delimiters: [
    { left: '$$', right: '$$', display: true },
    { left: '$', right: '$', display: false }
  ]
}

const vKatex = {
  mounted: el => {
    renderMathInElement(el, options)
  }
}

export default vKatex
