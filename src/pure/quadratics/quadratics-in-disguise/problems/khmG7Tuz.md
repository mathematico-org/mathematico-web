---
id: khmG7Tuz
vimeo: 111
tags:
  - proof
---

Prove, without a calculator, that

$$
3^8 - 2^8
$$

is divisible by $5$.

::: details Hint

Note that we have

$$
3^8 - 2^8 = \left( 3^4 \right)^2 - \left( 2^4 \right)^2
$$

which is a difference of two squares.

:::

::: details Hint

So

$$
\begin{aligned}
3^8 - 2^8 & = \left( 3^4 \right)^2 - \left( 2^4 \right)^2 \\
& = \left( 3^4 - 2^4 \right)\left( 3^4 + 2^4 \right)
\end{aligned}
$$

That $3^4 - 2^4$ looks interesting...

:::

::: details Solution

We make several applications of the difference of two squares:

$$
\begin{aligned}
3^8 - 2^8
& = \left( 3^4 \right)^2 - \left( 2^4 \right)^2 \\
& = \left( 3^4 - 2^4 \right) \left( 3^4 + 2^4 \right) \\
& = \left( \left( 3^2 \right)^2 - \left( 2^2 \right)^2 \right) \left( 3^4 + 2^4 \right) \\
& = \left( 3^2 - 2^2 \right) \left( 3^2 + 2^2 \right) \left( 3^4 + 2^4 \right) \\
& = 5\left( 3^2 + 2^2 \right) \left( 3^4 + 2^4 \right)
\end{aligned}
$$

as required!

:::
