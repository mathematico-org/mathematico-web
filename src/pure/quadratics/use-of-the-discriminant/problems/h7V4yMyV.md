---
id: h7V4yMyV
vimeo: 434071036
answer: -1.5
---

Given that the quadratic

$$
(r+1)x^2 + 2rx + (r-3) = 0
$$

has no real solutions, find the range of possible values of $r$.

Your answer should be of the form $r < \alpha$ for some $\alpha \in \mathbb{Q}$.
Give the value of $\alpha$ as an exact decimal.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

$$
b^2 - 4ac < 0
$$

:::

::: details Solution

Since the equation has no real solutions, we have

$$
\begin{aligned}
b^2 - 4ac & < 0 \\
4r^2 - 4(r+1)(r-3) & < 0 \\
4r^2 - 4r^2 + 8r + 12 & < 0 \\
2r + 3 & < 0 \\
r & < -\frac{3}{2}
\end{aligned}
$$

:::
