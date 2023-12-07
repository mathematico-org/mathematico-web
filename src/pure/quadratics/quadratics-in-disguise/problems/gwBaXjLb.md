---
id: gwBaXjLb
vimeo: 111
answer: 3
---

Find the sum of all real solutions of the equation

$$
3^{2x} - 4 \times 3^{x+1} + 27 = 0
$$

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

This can be written as

$$
\left( 3^x \right)^2 - 4 \times 3 \times 3^x + 27 = 0
$$

:::

::: details Hint

Let $u = 3^x$ and solve

$$
u^2 - 12u + 27
$$

:::

::: details Solution

The equation can be written as

$$
\left( 3^x \right)^2 - 4 \times 3 \times 3^x + 27 = 0
$$

Now let $u = 3^x$ to get

$$
\begin{aligned}
u^2 - 12u + 27 & = 0 \\
(u - 9)(u - 3) & = 0 \\
\end{aligned}
$$

The solutions are

$$
\begin{aligned}
3^x & = 9 \\
x & = 2
\end{aligned}
$$

and

$$
\begin{aligned}
3^x & = 3 \\
x & = 1
\end{aligned}
$$

:::
