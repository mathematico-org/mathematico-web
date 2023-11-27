---
id: pG5aD7TX
vimeo: 111
tags:
  - proof
---

Prove that the equation

$$
(x-p)(x-q) = r^2
$$

has at least one real solution in $x$ for any choice of $p,q,r \in \mathbb{R}.$

::: details Hint

Collect it into a quadratic in terms of $x$ and consider the discriminant.

:::

::: details Solution

We begin by expanding and collecting

$$
\begin{aligned}
x^2 - px - qx + pq & = r^2 \\
x^2 -(p + q)x + pq - r^2 & = 0
\end{aligned}
$$

The discriminant is

$$
\begin{aligned}
& (p+q)^2 - 4(pq - r^2) \\
= {} & p^2 + 2pq + q^2 - 4pq + 4r^2 \\
= {} & p^2 - 2pq + q^2 + 4r^2 \\
= {} & (p - q)^2 + 4r^2
\end{aligned}
$$

This expression is the sum of two squares which must be positive for all choices
of $p, q, r \in \mathbb{R}$.

:::
