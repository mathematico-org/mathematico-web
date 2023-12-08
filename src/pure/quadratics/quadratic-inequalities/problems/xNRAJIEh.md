---
id: xNRAJIEh
vimeo: 441378182
answer: -85
---

The quadratic equation

$$
x^2 + kx + 5 = 0
$$

has at least one solution.

Find the range of possible values of $k.$

Use the table below to find your answer based on your solution set.

|           Solution set            |       Answer       |
| :-------------------------------: | :----------------: |
|       $\alpha < k < \beta$        | $\alpha^2 + \beta$ |
|    $\alpha \leq k \leq \beta$     | $\alpha^3 + \beta$ |
|    $k < \alpha$ or $k > \beta$    | $\alpha + \beta^2$ |
| $k \leq \alpha$ or $k \geq \beta$ | $\alpha + \beta^3$ |

Give your answer to the nearest integer.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Consider the discriminant.

:::

::: details Hint

$$
b^2 - 4ac \geq 0
$$

:::

::: details Solution

Since the equation has real roots (meaning at least one solution), we know the
discriminant satisfies

$$
\begin{aligned}
b^2 - 4ac & \geq 0 \\
k^2 - 4(1)(5) & \geq 0 \\
k^2 - 20 & \geq 0
\end{aligned}
$$

We draw a sketch

![parabola](/img/learn/quadratic-inequalities-06.svg)

From the sketch, we see that the solution is

$$
k \leq -2\sqrt{5} \quad \text{or} \quad k \geq 2\sqrt{5}
$$

:::
