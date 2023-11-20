import path from 'path'
import { fileURLToPath } from 'url'
import { exec, execSync } from 'child_process'
import fs from 'fs'
import matter from 'gray-matter'

function getSubdirs(dir) {
  return fs
    .readdirSync(dir)
    .map(x => path.join(dir, x))
    .filter(x => fs.statSync(x).isDirectory())
}

function getFiles(dir) {
  return fs
    .readdirSync(dir)
    .map(x => path.join(dir, x))
    .filter(x => !fs.statSync(x).isDirectory())
}

const __filename = fileURLToPath(import.meta.url)
const __src = path.dirname(__filename)
const __pure = path.join(__src, 'pure')
const __problems = path.join(__src, 'problems')

const __chapters = getSubdirs(__pure)

for (let __chapter of __chapters) {
  const __topics = getSubdirs(__chapter)

  for (let __topic of __topics) {
    const problems = matter.read(__topic + '/index.md').data.problems || []
    console.log(problems)
    for (let id of problems) {
      const __problem = path.join(__problems, id) + '.md'
      const __out = path.join(__topic, 'problems') + `/${id}.md`
      if (fs.existsSync(__problem)) {
        execSync(`mv ${__problem} ${__out}`)
      }
    }
  }
}
