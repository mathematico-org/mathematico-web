---
id: m9nHPSRq
vimeo: 111
answer: 26
---

The solutions of the equation

$$
(x^2 + 2x + 1)^2 - 3(x+1)^2 - 4 = 0, \quad x \in \mathbb{R}
$$

are $\alpha$ and $\beta$. Find the value of

$$
\alpha^3 + \beta^3
$$

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Note that

$$
x^2 + 2x + 1 = (x+1)^2
$$

:::

::: details Hint

So the equation becomes

$$
\left((x + 1)^2\right)^2 - 3(x+1)^2 - 4 = 0
$$

:::

::: details Hint

Let

$$
u = (x+1)^2
$$

and solve

:::

::: details Solution

Notice that $x^2 + 2x + 1 = (x + 1)^2$, so

$$
\begin{aligned}
(x^2 + 2x + 1)^2 - 3(x+1)^2 - 4 & = 0 \\
(x + 1)^4 - 3(x+1)^2 - 4 & = 0
\end{aligned}
$$

Now let $u = (x + 1)^2$

$$
\begin{aligned}
u^2 - 3u - 4 & = 0 \\
(x - 4)(u + 1)& = 0 \\
u & \in \{ -1, \,\, 4 \}
\end{aligned}
$$

Notice that $(x + 1)^2 = -1$ is not possible (a real number squared cannot be
negative), so we only need to consider

$$
\begin{aligned}
(x + 1)^2 & = 4 \\
x + 1 & = \pm 2 \\
x & = 1 \pm 2 \\
x & \in \{ -1, \,\, 3 \}
\end{aligned}
$$

:::
