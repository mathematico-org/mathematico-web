---
id: QJeqgF2Y
vimeo: 435458050
answer: 10
---

The two parabolas shown have equations

$$
y = x^2 + 2ax + p
$$

and

$$
y = -x^2 + 2bx + q
$$

The vertex of each parabola lies upon the other.

![Intersecting parabolas](/img/learn/quad-25.svg)

Given that the area of the triangle $ABC$ is $1000,$ find the value of $a + b.$

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Complete the square to find the coordinates of $A$ and $B.$ You don't actually
need the coordinates of $C,$ you can find the base and height of the triangle
just by using $A$ and $B$ and symmetry.

:::

::: details Hint

The vertex $B$ lies on $y = x^2 + 2ax + p,$ so the coordinates of $B$ must
satisfy this equation. This helps you get rid of $p$ and $q$ from the problem.

:::

::: details Hint

Don't expand out,

$$
(a+b)(a^2 + b^2 + 2ab)
$$

but notice that

$$
a^2 + 2ab + b^2 = (a+b)^2
$$

:::

::: details Solution

Let's complete the square to find an expression for $A$

$$
\begin{aligned}
y
& = x^2 + 2ax + p \\
& = \left( x + a \right)^2 - a^2 + p
\end{aligned}
$$

so we have $A(-a, \, p - a^2)$.

Let's do simimlar for $B$

$$
\begin{aligned}
y
& = - \left[ x^2 - 2bx \right] + q \\
& = -\left[ \left( x - b \right)^2 - b^2 \right] + q \\
& = b^2 + q - \left( x - b \right)^2
\end{aligned}
$$

so we have $B(b, \, q + b^2)$.

---

Considering the symmetry of the triangle, its base can be given by

$$
2(b - (-a)) = 2(a + b)
$$

It's height is given by

$$
\begin{aligned}
& (q + b^2) - (p - a^2) \\
= {} & q - p + a^2 + b^2
\end{aligned}
$$

so the area is

$$
(a + b)(q - p + a^2 + b^2) = 1000 \quad (i)
$$

---

The vertex $B$ lies on $y = x^2 + 2ax + p,$ so the coordinates of $B$ must
satisfy this equation

$$
\begin{aligned}
y & = x^2 + 2ax + p \\
q + b^2 & = b^2 + 2ab + p \\
q & = 2ab + p \\
q - p & = 2ab
\end{aligned}
$$

---

We substitute this into the area of the triangle to get

$$
\begin{aligned}
(a + b)(q - p + a^2 + b^2) & = 1000 \\
(a + b)(2ab + a^2 + b^2) & = 1000 \\
(a + b)(a + b)^2 & = 1000 \\
(a + b)^3 & = 1000 \\
a + b & = 10
\end{aligned}
$$

:::
