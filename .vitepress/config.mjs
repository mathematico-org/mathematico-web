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

    nav: [
      {
        text: 'Learn',
        items: [
          {
            text: 'Pure',
            link: '/pure/'
          }
        ]
      },
      {
        text: 'Problems',
        link: '/problems/'
      },
      {
        text: 'Past papers',
        link: '/past-papers/'
      }
    ],

    socialLinks: [{ icon: 'github', link: '/' }],

    sidebar: {
      '/pure/': getCourseSidebar('pure'),
      '/blog/': [{ text: 'Integrating e', link: '/blog/240923-integrating-e' }]
    }
  }
})
