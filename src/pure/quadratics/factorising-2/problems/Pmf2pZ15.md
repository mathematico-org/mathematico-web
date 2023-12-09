---
id: Pmf2pZ15
vimeo: 431923326
tags:
  - proof
---

### Problem 9 <Badge text="proof" />

Let $p,q \in \mathbb{N}$ be distinct prime numbers.

Prove that

$$
x^2 + px + qx + x + pq
$$

cannot be factorised in the form

$$
(x + \alpha)(x + \beta)
$$

where $\alpha, \beta \in \mathbb{N}$

::: details Hint

Suppose, for contradiction, that it is possible. Then $\alpha, \beta$ are
positive integers such that both

$$
\begin{aligned}
\alpha + \beta & = p + q + 1 \\
\alpha \beta & = pq
\end{aligned}
$$

:::

::: details Hint

You should explain why both $\alpha = pq, \, \beta = 1$ and
$\alpha = p, \, \beta = q$ are impossible choices. It is important that $p$ and
$q$ are _distinct_ and _prime_!

:::

::: details Solution

Suppose, for contradiction, that it is possible. Then $\alpha, \beta$ are
positive integers such that both

$$
\begin{aligned}
\alpha + \beta & = p + q + 1 \\
\alpha \beta & = pq
\end{aligned}
$$

Now, because $p$ and $q$ are prime numbers, ther are two cases to consider.

**Case 1:** $\alpha = p, \beta = q$. In this case

$$
\begin{aligned}
\alpha + \beta & = p + q + 1 \\
p + q & = p + q + 1 \\
0 & = 1
\end{aligned}
$$

This is a clear contradiction.

**Case 2:** $\alpha = pq, \beta = 1$. In this case

$$
\begin{aligned}
\alpha + \beta & = p + q + 1 \\
pq + 1 & = p + q + 1 \\
pq & = p + q \\
pq - p & = q \\
p(q - 1)& = q
\end{aligned}
$$

We have shown that $q = p(q - 1)$. But $q$ is prime, so either $p$ or $q - 1$
must equal $1$. However, $p$ is prime so cannot be $1$, therefore
$q - 1 = 1 \Rightarrow q = 2$.

In this case, recall that we had

$$
\begin{aligned}
pq + 1 & = p + q + 1 \\
2p + 1 & = p + 3 \\
p & = 2
\end{aligned}
$$

This is a contradiction because $p$ and $q$ are distinct, so cannot both equal
$2$.

We've considered all cases and each case results in a contradiction. We must
conclude that the original hypothesis is incorrect, i.e. the expression cannot
be factored as claimed.

:::
