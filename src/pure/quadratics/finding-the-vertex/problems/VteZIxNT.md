---
id: VteZIxNT
vimeo: 111
answer: 48
---

The vertex of the parabola

$$
y = x^2 + bx + 5
$$

lies upon the straight line

$$
x + y = -1
$$

Let the two possible values of $b$ be $b_1$ and $b_2$.

Find the value of

$$
b_1b_2^2 + b_2b_1^2
$$

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

You should begin completing the square by writing

$$
\left(x + \frac{b}{2} \right)^2 - \ldots
$$

:::

::: details Hint

The $x$ and $y$ coordinate of the vertex satisfy

$$
x + y = -1
$$

:::

::: details Solution

In complete square form,

$$
\begin{aligned}
y
& = \left(x + \frac{b}{2} \right)^2 - \frac{b^2}{4} + 5 \\
& = \left(x + \frac{b}{2} \right)^2 + \frac{20 - b^2}{4}
\end{aligned}
$$

and so the vertex has coordinates

$$
\left( - \frac{b}{2}, \frac{20 - b^2}{4} \right)
$$

These coordinates satisfy $x + y = -1$, so

$$
\begin{aligned}
- \frac{b}{2} + \frac{20 - b^2}{4} & = -1 \\
-2b + 20 - b^2 & = -4 \\
b^2 + 2b - 24 & = 0 \\
(b + 6)(b - 4) & = 0 \\
b & \in \{ -6, 4 \}
\end{aligned}
$$

:::
