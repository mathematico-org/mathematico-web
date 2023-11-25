---
id: HQhiTemY
vimeo: 111
answer: 320
tags:
  - modelling
---

A piece of wire is $80\text{cm}$ in length. The wire is going to be cut into two
pieces. One piece will be turned into a circle, and one piece will be turned
into a square.

![](/img/learn/quad-35.svg)

If we want to minimise the sum of the areas of the square and the circle, what
should be the length of the piece of wire we use to form the circle?

The answer can be given in the form $\frac{m \pi}{\pi + n}$. Give the value of
$mn$.

::: details Hint

Suppose the piece of wire used for the circle is of length $x$. Then the
remaining piece that forms the square is of length $80 - x$.

:::

::: details Hint

If the circle has radius $r$, then $2\pi r = x$.

If the length of one edge of the square is $y$, then $4y = 80 - x$.

Use these to express the area of each shape in terms of $x$.

:::

::: details Solution

Suppose the piece of wire used for the circle is of length $x$. Then the
remaining piece that forms the square is of length $80 - x$.

If the circle has radius $r$, then $2\pi r = x$, and its area is

$$
\begin{aligned}
\pi r ^2
& = \pi \left( \frac{x}{2\pi} \right)^2 \\
& = \pi \frac{x^2}{4\pi^2} \\
& = \frac{x^2}{4\pi}
\end{aligned}
$$

If the length of one edge of the square is $y$, then $4y = 80 - x$, and its area
is

$$
\begin{aligned}
y^2
& = \left(\frac{80 - x}{4} \right)^2 \\
& = \frac{x^2 - 160x + 6400}{16}
\end{aligned}
$$

The total area of the shapes is therefore

$$
\begin{aligned}
& \frac{x^2}{4\pi} + \frac{x^2 - 160x + 6400}{16} \\
= {} & \frac{1}{16\pi} \left[ (4 + \pi)x^2 - 160 \pi x + 6400 \pi \right] \\
= {} & \frac{4 + \pi}{16\pi} \left[x^2 - \frac{160 \pi}{4 + \pi} x \right] + 400 \\
= {} & \frac{4 + \pi}{16\pi} \left[ \left(x - \frac{80 \pi}{4 + \pi} \right)^2 - \frac{6400 \pi^2}{(4 + \pi)^2} \right] + 400 \\
= {} & \frac{4 + \pi}{16\pi} \left(x - \frac{80 \pi}{4 + \pi} \right)^2 - \frac{400 \pi^2}{4 + \pi} + 400 \\
\end{aligned}
$$

We see that the minimum of the sum of the areas occurs when

$$
x = \frac{80 \pi}{4 + \pi}
$$

:::
