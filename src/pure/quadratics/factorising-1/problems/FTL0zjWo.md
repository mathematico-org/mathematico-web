---
id: FTL0zjWo
vimeo: 573990473
answer: 600
---

# Problem 1

Solve the equations

1.  $(x+3)(7-x) = 25$

1.  $x = 30x^{-1} - 1$

1.  $(2x-1)(x+3) = 7 + 2x + x^2$

You should find a total of $5$ solutions. Find the product of these $5$
solutions and give your answer below.

<AnswerInput :answer="$frontmatter.answer" />

:::details Hint

For each equation, you need to get it in the form

$$
x^2 + bx + c = 0
$$

first.

:::

:::details Hint

For (b), recall that $30x^{-1}$ means $\frac{30}{x}$, so we have

$$
x = \frac{30}{x} - 1
$$

You should multiply both sides by $x$ to simplify first.

:::

::: details Solution

1. First we need to expand out the left-hand side

   $$
   \begin{aligned}
   -x^2 + 4x + 21 & = 25 \\
   x^2 - 4x + 4 & = 0 \\
   (x - 2)^2 & = 0 \\
   x & = 2
   \end{aligned}
   $$

1. We must multiply by $x$ first

   $$
   \begin{aligned}
   x & = \frac{30}{x}  - 1 \\
   x^2 & = 30 - x \\
   x^2 + x - 30 & = 0 \\
   (x + 6)(x - 5) & = 0 \\
   x & \in \{ -6, 5 \}
   \end{aligned}
   $$

1. Again, the key is to expland and simplify:
   $$
   \begin{aligned}
   (2x-1)(x+3) & = 7 + 2x + x^2 \\
   2x^2 + 5x - 3 & = 7 + 2x + x^2 \\
   x^2 + 3x - 10 & = 0 \\
   (x + 5)(x - 2) & = 0 \\
   x & \in \{ -5, 2 \}
   \end{aligned}
   $$

:::
