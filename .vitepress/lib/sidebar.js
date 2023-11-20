import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import matter from 'gray-matter'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const __src = path.join(__dirname, '..', '..', 'src')

export function getCourseSidebar(courseSlug) {
  const sidebar = []

  const __course = path.join(__src, courseSlug)
  const course = matter(fs.readFileSync(path.join(__course, 'index.md')))

  for (let topicSlug of course.data.topics) {
    const __topic = path.join(__course, topicSlug)
    const topic = matter(fs.readFileSync(path.join(__topic, 'index.md')))

    const topicItems = []

    for (let skillSlug of topic.data.skills) {
      const skill = matter(
        fs.readFileSync(path.join(__topic, skillSlug + '/index.md'))
      )

      const skillItems = []
      let i = 1

      for (let problemSlug of skill.data.problems || []) {
        skillItems.push({
          text: 'Problem ' + i++,
          link:
            '/' +
            courseSlug +
            '/' +
            topicSlug +
            '/' +
            skillSlug +
            '/problems/' +
            problemSlug
        })
      }

      topicItems.push({
        text: skill.data.title,
        link: '/' + courseSlug + '/' + topicSlug + '/' + skillSlug + '/',
        items: skillItems,
        collapsed: true
      })
    }

    sidebar.push({
      text: topic.data.title,
      link: '/' + courseSlug + '/' + topicSlug + '/',
      collapsed: true,
      items: topicItems
    })
  }

  return sidebar
}

getCourseSidebar('pure')
