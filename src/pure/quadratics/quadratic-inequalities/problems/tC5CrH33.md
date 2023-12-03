---
id: tC5CrH33
vimeo: 441377727
answer: 10
---

Find the sum of the $x \in \mathbb{Z}$ for which points on the parabola

$$
y = x^2 - 4x + 7
$$

lie below the line

$$
y = x + 6
$$

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

You need to solve the inequality

$$
x^2 - 4x + 7 < x + 6
$$

Draw a sketch.

:::

::: details Solution

We need to solve the inequality

$$
\begin{aligned}
x^2 - 4x + 7 & < x + 6 \\
x^2 - 5x + 1 & < 0
\end{aligned}
$$

The roots are

$$
\begin{aligned}
x & = \frac{5 \pm \sqrt{21}}{2} \\
x & \in \left\{ 0.209 \ldots, 4.79 \ldots \right\}
\end{aligned}
$$

We should sketch the parabola $y = x^2 - 5x + 1$ to find the solutions

![quadratic inequality](/img/learn/quadratic-inequalities-01.svg)

We see that the solution to the inequality is

$$
0.209 \ldots < x < 4.79 \ldots
$$

and the integer solutions are $x = 1, 2, 3, 4$.

:::
