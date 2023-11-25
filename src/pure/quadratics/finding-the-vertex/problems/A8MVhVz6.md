---
id: A8MVhVz6
vimeo: 434726077
answer: 24
---

You are given that

$$
x + y = 6
$$

Find the minimum possible value of

$$
2x^2 + y^2
$$

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

$$
x + y = 6 \Rightarrow y = 6 - x
$$

:::

::: details Hint

Substitute $y = 6 - x$ into $2x^2 + y^2,$ then complete the square to find the
minimum value.

:::

::: details Solution

We have

$$
x + y = 6 \Rightarrow y = 6 - x
$$

So

$$
\begin{aligned}
2x^2 + y^2
& = 2x^2 + (6 - x)^2 \\
& = 2x^2 + x^2 - 12x + 36 \\
& = 3x^2 - 12x + 36 \\
& = 3\left[ x^2 - 4x \right] + 36 \\
& = 3\left[ (x - 2)^2 - 4 \right] + 36 \\
& = 3(x - 2)^2 + 24 \\
\end{aligned}
$$

We see that the minimum value is $24$ and occurs when $x = 2$ and $y = 4$.

:::
