---
id: FKx3bAng
vimeo: 432527931
answer: 452
---

### Problem 2

Solve the equations

1.  $2x^3 - 2x^2 - 12x = 0$

1.  $6x^3 - 3x^2 - 45x = 0$

The sum of the squares of the solutions to (a) and (b) is equal so $S$.

Give the value of

$$
16S
$$

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

For each equation, it is possible to factorise out an $x$ (and maybe also a
common factor out of the coefficients).

:::

::: details Hint

For example, the first equation can be written as

$$
2x(x^2 - x - 6) = 0
$$

:::

::: details Hint

Each equation has exactly three solutions (you can't divide by $x$)

:::

::: details Solution

1. We begin by factoring out $2x$:

   $$
   \begin{aligned}
   2x(x^2 - x - 6) & = 0 \\
   2x(x - 3)(x + 2) & = 0 \\
   x & \in \{ -2, 0, 3 \}
   \end{aligned}
   $$

   Note that $x = 0$ is a solution.

1. We factor out $3x$ at the beginning:
   $$
   \begin{aligned}
   3x(2x^2 - x - 15) & = 0 \\
   3x \frac{(2x - 6)}{2} (2x + 5) & = 0 \\
   3x (x - 3) (2x + 5) & = 0 \\
   x & \in \left\{ -\frac{5}{2}, 0, 3 \right\}
   \end{aligned}
   $$

:::
