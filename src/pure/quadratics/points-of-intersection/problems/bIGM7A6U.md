---
id: bIGM7A6U
vimeo: 111
answer: 3.5
---

The curves shown have equations

$$
\begin{aligned}
y & = x^2 - 8x + 16 \\
y & = 8x - x^2 - 12
\end{aligned}
$$

The area of the depicted rectangle can be expressed in the form $2^k$

![](/img/learn/quad-36.svg)

Find the value of $k$ as an exact decimal.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

To find the height of the rectangle, we need to
[find the vertex](/pure/quadratics/finding-the-vertex/) of the concave parabola.

:::

::: details Hint

To find the base, we need the $x$ coordinates of the points of intersection

$$
x^2 - 8x + 16 = 8x - x^2 - 12
$$

:::

::: details Solution

To find the height of the rectangle, we need the vertex of the concave parabola.
We can find it by completing the square

$$
\begin{aligned}
y
& = - \left[ x^2 - 8x \right] - 12 \\
& = - \left[ \left( x - 4 \right)^2 - 16 \right] - 12 \\
& = 4 - (x - 4)^2
\end{aligned}
$$

So the vertex is at $(4, 4)$, and the height of the rectangle is $4$.

For the width of the rectangle, we need the points of intersection between the
parabolas:

$$
\begin{aligned}
x^2 - 8x + 16 & = 8x - x^2 - 12 \\
2x^2 - 16x + 28 & = 0 \\
x^2 - 8x + 14 & = 0 \\
(x - 4)^2 & = 2 \\
x & = 4 \pm \sqrt{2}
\end{aligned}
$$

So the width of the rectangle is

$$
\left( 4 + \sqrt{2} \right) - \left( 4 - \sqrt{2} \right) = 2\sqrt{2}
$$

The area of the rectangle is therefore

$$
4 \times 2\sqrt{2} = 2^{\frac{7}{2}}
$$

:::
