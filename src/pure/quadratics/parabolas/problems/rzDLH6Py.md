---
id: rzDLH6Py
vimeo: 434696992
answer: 6174
---

The parabola with equation

$$
y = 3x^2 + 9x - 30
$$

intersects the $x$-axis at the points $A$ and $B$.

Let the length of $AB$ be $\ell$, and the coordinates of the minimum point be
$(x,y)$.

Find the value of

$$
16xy\ell
$$

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Find the coordinates of $A$ and $B$ by solving $3x^2 + 9x - 30 = 0.$

:::

::: details Solution

![Parabola](/img/learn/parabolas-01.svg)

To find $A$ and $B$, we need the roots:

$$
\begin{aligned}
3x^2 + 9x - 30 & = 0 \\
x^2 + 3x - 10 & = 0 \\
(x + 5)(x - 2) & = 0 \\
x & \in \{ -5, 2 \}
\end{aligned}
$$

So $A(-5, 0)$ and $B(2, 0)$ and $\ell = 7$.

The $x$ coordinate of the minimum point is $\frac{-5 + 2}{2} = -1.5$.

The $y$ coordinate is

$$
\begin{aligned}
y
& = 3(-1.5)^2 + 9(-1.5) - 30 \\
& = -36.75
\end{aligned}
$$

So we have

$$
\begin{aligned}
16xy\ell & = 16(-1.5)(-36.75)(7) \\
& = 6174
\end{aligned}
$$

:::
