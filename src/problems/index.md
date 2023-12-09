<script setup>

import { data } from '/problems.data.js'

const problems = data.map(problem => {
  const parts = problem.url.split("/")
  return {
    ...problem,
    course: parts[1],
    topic: parts[2],
    skill: parts[3]
  }
})

</script>

# Problems

<table>
  <tr>
    <th>Problem</th>
    <th>Course</th>
    <th>Topic</th>
    <th>Skill</th>
    <th>Done</th>
  </tr>
  <tr
    v-for="problem in problems"
    :key="problem.frontmatter.id"
  >
    <td style="text-align:center;">
      <a :href="problem.url">{{ problem.frontmatter.id }}</a>
    </td>
    <td>{{ problem.course }}</td>
    <td>{{ problem.topic }}</td>
    <td>{{ problem.skill }}</td>
<td>
    
:white_check_mark:
    
</td>
  </tr>
</table>
