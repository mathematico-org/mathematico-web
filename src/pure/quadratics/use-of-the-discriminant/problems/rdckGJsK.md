---
id: rdckGJsK
vimeo: 434072993
tags:
  - proof
---

Prove that there is no choice of real numbers $p$ and $q$ such that

$$
p^2 = 2(p + q - q^2 - pq - 1)
$$

::: details Hint

Collect this into a quadratic in terms of $p$. Get the discriminant in terms of
$q$.

:::

::: details Hint

When you have your expression for the discriminant, can you explain why it is
negative for all values of $q$?

:::

::: details Solution

Let's get this in quadratic form in terms of $p$

$$
\begin{aligned}
p^2 & = 2(p + q - q^2 - pq - 1) \\
p^2 & = 2p + 2q - 2q^2 - 2pq - 2 \\
p^2 - 2p - 2q + 2q^2 + 2pq + 2 & = 0 \\
p^2 + 2p(q - 1) + 2(q^2 - q + 1) & = 0
\end{aligned}
$$

We have to prove that, no matter the choice of $q$, this equation has no roots
in $p$.

Let's consider the discriminant. With

$$
\begin{aligned}
a & = 1 \\
b & = 2(q+1) \\
c & = 2(q^2 - q + 1)
\end{aligned}
$$

we get

$$
\begin{aligned}
\Delta
& = 4(q - 1)^2 - 4(1)(2(q^2 - q + 1)) \\
& = 4(q^2 - 2q + 1 - 2q^2+ 2q - 2) \\
& = 4(-1 - q^2) \\
& = -4(q^2 + 1)
\end{aligned}
$$

Now, $q^2 + 1 \geq 1 > 0$ so $-4(q^2 + 1) < 0$ for every choice of
$q \in \mathbb{R}$.

No matter the choice of $q$, this equation has no solutions in $p$.

:::
