---
id: G5eZMLCi
vimeo: 111
answer: -2
---

The roots of the equation

$$
2^{2x+1} - 9 \times 2^{x} + 4 = 0
$$

are $a$ and $b$.

Find $ab$.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

This can be written

$$
2 \times \left( 2^x \right)^2 - 9 \times 2^{x} + 4 = 0
$$

:::

::: details Hint

Let $u = 2^x$ and solve

$$
2u^2 - 9u + 4 = 0
$$

:::

::: details Solution

The equation can be written as

$$
2 \times \left( 2^x \right)^2 - 9 \times 2^{x} + 4 = 0
$$

Now let $u = 2^x$ to get

$$
\begin{aligned}
2u^2 - 9u + 4 & = 0 \\
(2u - 1)(u - 4) & = 0
\end{aligned}
$$

The solutions are

$$
\begin{aligned}
u & = \frac{1}{2} \\
2^x & = \frac{1}{2} \\
& = 2^{-1} \\
x & = -1
\end{aligned}
$$

and

$$
\begin{aligned}
u & = 4 \\
2^x & = 4 \\
x & = 2
\end{aligned}
$$

:::
