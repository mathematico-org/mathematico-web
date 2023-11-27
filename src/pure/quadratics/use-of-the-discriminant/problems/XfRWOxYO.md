---
id: XfRWOxYO
vimeo: 111
tags:
  - proof
---

A parabola $P$ is drawn in the $xy$ plane. The vertex of the parabola is
$(p,q)$, where $q < 0$.

Given that the parabola is convex, prove that the parabola intersects the $x$
axis in two distinct points.

::: warning

You might think that this is obvious, but there are plenty of seemingly obvious
statements in mathematics which turn out to be false on closer inspection - an
algebraic proof is needed!

:::

::: details Hint

Because the parabola is convex, the complete square form of its equation must be

$$
y = a(x-p)^2 + q
$$

where $a > 0$ and $q < 0$.

:::

::: details Solution

Because the parabola is convex, the complete square form of its equation must be

$$
y = a(x-p)^2 + q
$$

where $a > 0$ and $q < 0$.

We expand and simplify

$$
\begin{aligned}
y
& = a(x^2 - 2px + p^2) + q \\
& = ax^2 - 2apx + ap^2 + q
\end{aligned}
$$

The discriminant is

$$
\begin{aligned}
& 4a^2p^2 - 4a(ap^2 + q) \\
= {} & 4a^2p^2 - 4a^2p^2 - 4aq \\
= {} & -4aq
\end{aligned}
$$

Since $a > 0$ and $q < 0$, the expression $-4aq > 0$ and therefore there must be
two distinct roots.

:::
