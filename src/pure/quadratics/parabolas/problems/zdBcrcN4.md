---
id: zdBcrcN4
vimeo: 580743329
answer: 729
---

Let $p, q > 0$ be real numbers. The triangle formed by the roots and the lowest
point on the parabola

$$
y = px^2 - 2pqx
$$

forms an equilateral triangle.

Find the value of

$$
(pq)^{12}
$$

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

The factorised form of the parabola's equation is

$$
y = px(x-2q)
$$

This should enable you to find the roots and vertex in terms of $p$ and $q$.

You should definitely draw a diagram!

:::

::: details Hint

Here is the diagram

![Parabola with triangle](/img/learn/quad-15.svg)

:::

::: details Hint

Since the triangle is equilateral, you know that all sides of the triangle are
equal.

Therefore, the distance between the roots is equal to the distance from the
origin to the vertex.

To make use of this information, you will need Pythagoras.

:::

::: details Solution

We have

$$
\begin{aligned}
y & = px^2 - 2pqx \\
& = px(x - 2q) \\
\end{aligned}
$$

so the roots are $x = 0$ and $x = 2q$. This means the vertex occurs when
$x = q$, so

$$
\begin{aligned}
y & = pq^2 - 2pq^2 \\
& = -pq^2
\end{aligned}
$$

Since $p > 0$ the parabola is convex.

With this information, we can draw an accurate diagram:

![Parabola with triangle](/img/learn/quad-15.svg)

Since the triangle is equilateral, the sides of the triangle have the same
length, let's call it $\ell$.

Clearly, the base of the triangle has length $2q$, so $\ell = 2q$ and
$\ell^2 = 4q^2$.

On the other hand, consider the other two sides. We use Pythagoras', noting that
the dashed line has length $pq^2$, to find that

$$
\begin{aligned}
\ell^2 & = q^2 + (pq^2)^2 \\
& = q^2 + p^2 q^4 \\
& = q^2(1 + p^2 q^2)
\end{aligned}
$$

By equating these two expressions for $\ell^2$, we find that

$$
\begin{aligned}
q^2(1 + p^2 q^2) & = 4q^2 \\
1 + p^2 q^2 & = 4 \\
(pq)^2 & = 3 \\
pq & = \sqrt{3}
\end{aligned}
$$

So $(pq)^{12} = 3^6 = 729$.

:::
