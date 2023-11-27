---
id: vIcWdyP9
vimeo: 434071098
answer: -1
---

Find the smallest $k \in \mathbb{Z}$ such that the equation

$$
x^2 - 2x - (k + 1) = 0
$$

has two distinct solutions.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

The equation has two distinct solutions if and only if

$$
b^2 - 4ac > 0
$$

:::

::: details Solution

Since there are two distinct solutions, we have

$$
\begin{aligned}
b^2 - 4ac & > 0 \\
4 + 4(k + 1) & > 0 \\
k + 1 & > -1 \\
k & > -2
\end{aligned}
$$

So the smallest integer possible is $k = -1$.

:::
