---
id: UBlkleV9
vimeo: 441378240
answer: 5.83
---

The quadratic equation

$$
x^2 + (k+1)x + 2k = 0
$$

does not have distinct roots.

Find the range of possible value of $k.$

Use the table below to find your answer based on your solution set.

|           Solution set            |       Answer       |
| :-------------------------------: | :----------------: |
|       $\alpha < k < \beta$        | $\alpha^2 + \beta$ |
|    $\alpha \leq k \leq \beta$     | $\alpha^3 + \beta$ |
|    $k < \alpha$ or $k > \beta$    | $\alpha + \beta^2$ |
| $k \leq \alpha$ or $k \geq \beta$ | $\alpha + \beta^3$ |

Give your answer to $3$ significant figures.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

The wording implies that there is either $1$ or $0$ roots.

:::

::: details Hint

$$
b^2 - 4ac \leq 0
$$

:::

::: details Solution

The wording implies that there is either $1$ or $0$ roots.

This means the discriminant satisfies

$$
\begin{aligned}
b^2 - 4ac & \leq 0 \\
(k + 1)^2 - 4(1)(2k) & \leq 0 \\
k^2 + 2k + 1 - 8k & \leq 0 \\
k^2 - 6k + 1 & \leq 0
\end{aligned}
$$

By the quadratic formula, we find the roots of $k^2 - 6k + 1$ are

$$
\begin{aligned}
k & = 3 \pm 2\sqrt{2}
\end{aligned}
$$

and so we make a sketch

![parabola](/img/learn/quadratic-inequalities-07.svg)

From here we see that the solution is

$$
3 - 2\sqrt{2} \leq k \leq 3 + 2\sqrt{2}
$$

:::
