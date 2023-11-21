---
id: G8ZF2sot
vimeo: 432525775
answer: -2304
---

Solve the equations

1.  $2^{x^{2}} = 16^{x+3}$

1.  $9^{x^{2}} = 3^{5x-3}$

1.  $8^{x^{2}} = \frac{4^{4x}}{16}$

1.  $\left( 2^x \right)^{2} = 2^{x^{2}}$

Let $P$ be the product of all non-zero solutions.

Find $48P$.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

For part (a), we know that $16 = 2^4$, so we can write

$$
\begin{aligned}
2^{x^2} & = \left( 2^4 \right)^{(x+3)} \\
2^{x^2} & = 2^{4(x+3)}
\end{aligned}
$$

which is true if (and only if)

$$
x^2 = 4(x+3)
$$

Parts (b), (c), (d) can be approached in a similar way.

:::

::: details Solution

1. Going by the hint, we have

   $$
   \begin{aligned}
   2^{x^2} & = \left( 2^4 \right)^{(x+3)} \\
   2^{x^2} & = 2^{4(x+3)} \\
   x^2 & = 4(x+3) \\
   x^2 - 4x - 12 & = 0 \\
   (x - 6)(x + 2) & = 0 \\
   x & \in \{ -2, 6 \}
   \end{aligned}
   $$

1. Again, we aim to get the same base on both sides:

   $$
   \begin{aligned}
   \left( 3^2 \right)^{x^2} & = 3^{5x - 3} \\
   3^{2x^2} & = 3^{5x - 3} \\
   2x^2 & = 5x - 3 \\
   2x^2 - 5x + 3 & = 0 \\
   (2x - 3)(x - 1) & = 0 \\
   x & \in \left\{ \frac{3}{2}, 1 \right\}
   \end{aligned}
   $$

1. We aim to express both sides in base $2$:

   $$
   \begin{aligned}
   \left( 2^3 \right)^{x^{2}} & = \frac{ \left( 2^2 \right)^{4x} }{2^4} \\
   2^{3x^2} & = 2^{8x - 4} \\
   3x^2 & = 8x - 4 \\
   3x^2 - 8x + 4 & = 0 \\
   (x - 2)(3x - 2) & = 0 \\
   x & \in \left\{ 2, \frac{2}{3} \right\}
   \end{aligned}
   $$

1. Don't be fooled by the notation: use the laws of exponents.
   $$
   \begin{aligned}
   2^2x & = 2^{x^2} \\
   2x & = x^2 \\
   x^2 - 2x & = 0 \\
   x(x - 2) & = 0 \\
   x & \in \left\{ 0, 2 \right\}
   \end{aligned}
   $$

:::
