---
id: UznZmeNj
vimeo: 111
answer: 100
---

The solutions of the equation

$$
3(x + 1)(x - 5) = (x+3)(x+5)
$$

in simplest form are

$$
a \pm b \sqrt{c}
$$

Find the value of $abc$.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Expand both sides, collect everything on the left-hand-side.

:::

::: details Solution

We expand and simplify both sides

$$
\begin{aligned}
3(x + 1)(x - 5) & = (x+3)(x+5) \\
3x^2 - 12*x - 15 & = x^2 + 8x + 15 \\
2x^2 - 20x - 30 & = 0 \\
x & = \frac{20 \pm \sqrt{400 - 4(2)(-30)}}{2(2)} \\
& = 5 \pm 2\sqrt{10}
\end{aligned}
$$

:::
