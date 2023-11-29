---
id: iUCK9xcN
vimeo: 111
answer: -8
---

The roots of

$$
\frac{1}{(x+5)^2} + \frac{2}{x+5} + 3 = 4
$$

can be expressed in the form $a \pm \sqrt{b}$ for some $a, b \in \mathbb{Z}$.

Find the value of $ab$.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Rearranging feels a bit grim, but it simplifies down very nicely.

:::

::: details Hint

Multiply both sides by $(x+5)^2$, then expand and simplify.

:::

::: details Solution

$$
\begin{aligned}
\frac{1}{(x+5)^2} + \frac{2}{x+5} + 3 & = 4 \\
(x + 5)^2 - 2(x + 5) - 1 & = 0 \\
x^2 + 10x + 25 - 2x - 10 - 1 & = 0 \\
x^2 + 8x + 14 & = 0 \\
(x + 4)^2 - 16 + 14 & = 0 \\
x + 4 & = \pm \sqrt{2} \\
x & = -4 \pm \sqrt{2}
\end{aligned}
$$

:::
