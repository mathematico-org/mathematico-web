---
id: EjS1cazb
vimeo: 111
answer: 90
---

The product of two consecutive even natural numbers is equal to $2024$. What is
the sum of these integers?

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Let the even numbers be

$$
2n \quad \text{and} \quad 2n + 2
$$

You need to solve

$$
2n(2n+2) = 2024
$$

:::

::: details Hint

Recall that _natural numbers_ are positive.

:::

::: details Solution

Let the even numbers be

$$
2n \quad \text{and} \quad 2n + 2
$$

then we need to solve

$$
\begin{aligned}
2n(2n + 2) & = 2024 \\
4n(n + 1) & = 2024 \\
n(n + 1) & = 506 \\
n^2 + n - 506 & = 0 \\
\end{aligned}
$$

Whilst this can be factorised, it's more convenient to use the formula as $506$
is a large number.

$$
\begin{aligned}
n
& = \frac{-1 \pm \sqrt{1 - 4(1)(-506)}}{2} \\
& = \frac{-1 \pm 45}{2} \\
n & \in \{ -23, \, 22 \} \\
\end{aligned}
$$

However $n \in \mathbb{N}$ so $n = 22$.

The sum of the even numbers is $44 + 46 = 90$.

:::
