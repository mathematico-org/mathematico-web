---
id: tQ8OFYHZ
vimeo: 441378286
answer: 6
---

The line $y = mx$ intersects with the parabola

$$
y = x^2 + 1
$$

Find the possible values of $m.$

Use the table below to find your answer based on your solution set.

|           Solution set            |       Answer       |
| :-------------------------------: | :----------------: |
|       $\alpha < m < \beta$        | $\alpha^2 + \beta$ |
|    $\alpha \leq m \leq \beta$     | $\alpha^3 + \beta$ |
|    $m < \alpha$ or $m > \beta$    | $\alpha + \beta^2$ |
| $m \leq \alpha$ or $m \geq \beta$ | $\alpha + \beta^3$ |

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

The equation

$$
x^2 + 1 = mx
$$

has at least one solution.

:::

::: details Solution

The equation

$$
\begin{aligned}
x^2 + 1 & = mx \\
x^2 - mx + 1 & = 0 \\
\end{aligned}
$$

has at least one solution, so

$$
\begin{aligned}
b^2 - 4ac & \geq 0 \\
(-m)^2 - 4(1)(1) & \geq 0 \\
m^2 - 4 \geq 0
\end{aligned}
$$

Noting that the roots are $m \in \{ -2, \,\, 2 \}$, we make a sketch

![parabola](/img/learn/quadratic-inequalities-08.svg)

We see that the solution is

$$
m \leq -2 \quad \text{or} \quad m \geq 2
$$

:::
