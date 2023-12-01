import { defineConfig } from 'vitepress'
import { getCourseSidebar } from './lib/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Mathematico',
  description: 'Learn and revise A Level Maths',
  srcDir: 'src',
  ignoreDeadLinks: true,

  markdown: {
    math: true
  },

  vite: {
    server: {
      port: process.env.VITE_PORT,
      strictPort: true,
      host: true
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Pure', link: '/pure/' }],

    sidebar: {
      '/pure/': getCourseSidebar('pure')
    },

    socialLinks: [{ icon: 'github', link: '/' }]
  }
})
