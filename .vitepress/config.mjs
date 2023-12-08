import { defineConfig } from 'vitepress'
import { getCourseSidebar } from './lib/sidebar'

export default defineConfig({
  title: 'Mathematico',
  description: 'Learn and revise A Level Maths',
  srcDir: 'src',
  ignoreDeadLinks: true,

  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

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
    logo: '/logo.svg',
    nav: [{ text: 'Pure', link: '/pure/' }],
    socialLinks: [{ icon: 'github', link: '/' }],

    sidebar: {
      '/pure/': getCourseSidebar('pure')
    }
  }
})
