---
id: IroHjMuO
vimeo: 111
answer: 1280
tags:
  - modelling
  - proof
---

A square-based cuboid is to be formed from pieces of steel tubing and then
wrapped in fabric. The total length of steel tubing used is $64\text{m}$.

An engineer draws a diagram to model the situation.

![Cuboid diagram](/img/learn/quad-23.svg)

1.  The fabric costs $£7.50\text{ m}^2$. What is the maximum cost of covering
    the cuboid?

1.  Prove that $A$ achieves its maximum value when the cuboid is a cube.

Give your answer to (a) in £ below.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

The total amount of tubing used in the engineer's diagram is

$$
8x + 4y = 64
$$

:::

::: details Hint

The total surface area of the cuboid is

$$
A = 2x^2 + 4xy
$$

:::

::: details Solution

The total amount of tubing used in the engineer's diagram is

$$
\begin{aligned}
8x + 4y & = 64 \\
2x + y & = 16 \\
y & = 16 - 2x
\end{aligned}
$$

The total surface area of the cuboid is

$$
\begin{aligned}
A & = 2x^2 + 4xy \\
& = 2x^2 + 4x(16 - 2x) \\
& = 2x^2 + 64x - 8x^2 \\
& = 64x - 6x^2 \\
& = -6 \left[ x^2 - \frac{32}{3}x \right] \\
& = -6 \left[ \left(x - \frac{16}{3} \right)^2 - \frac{256}{9} \right] \\
& = \frac{512}{3} - 6 \left(x - \frac{16}{3} \right)^2
\end{aligned}
$$

The maximum area is $\frac{512}{3}$ and so the maximum cost is

$$
\frac{512}{3} \times £7.50 = £1280
$$

This maximum occurs when $x = \frac{16}{3}$, in which case

$$
\begin{aligned}
y
& = 16 - 2x \\
& = 16 - \frac{32}{3} \\
& = \frac{16}{3}
\end{aligned}
$$

which is to say, the cuboid is a cube.

:::
