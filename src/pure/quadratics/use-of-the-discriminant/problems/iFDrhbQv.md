---
id: iFDrhbQv
vimeo: 434726140
answer: -2
---

The parabola

$$
y = 4x^2 + 4(2k+1)x + 2k^2 + 4k + 9
$$

is sketched below.

![Parabola with one x intercept](/img/learn/quad-22.svg)

Find the sum of all possible values of $k$.

::: details Hint

There's only one root, so $\Delta = 0$.

Only one of the values of $k$ you get is valid. Can you decide which one?

:::

::: details Hint

Notice that the root occurs when $x$ is positive - this allows you to eliminate
one value of $k$.

:::

::: details Solution

The diagram tells us there is only one root, so

$$
\begin{aligned}
b^2 - 4ac & = 0 \\
16(2k + 1)^2 - 4(4)(2k^2 + 4k + 9) & = 0 \\
(2k + 1)^2 - 2k^2 - 4k - 9 & = 0 \\
4k^2 + 4k + 1 - 2k^2 - 4k - 9 & = 0 \\
2k^2 - 8 & = 0 \\
k & = \pm 2
\end{aligned}
$$

When $k = 2$, the root is given by

$$
\begin{aligned}
4x^2 + 4(2k+1)x + 2k^2 + 4k + 9 & = 0 \\
4x^2 + 20x + 25 & = 0 \\
x & = \frac{-5}{2}
\end{aligned}
$$

This does not make sense with respect to the diagram, since the root shown is
positive.

However, when $k = -2$, the root is given by

$$
\begin{aligned}
4x^2 + 4(2k+1)x + 2k^2 + 4k + 9 & = 0 \\
4x^2 - 12x + 9 & = 0 \\
x & = \frac{3}{4}
\end{aligned}
$$

This does make sense.

So the only possible value of $k$ is $k = -2$.

:::
