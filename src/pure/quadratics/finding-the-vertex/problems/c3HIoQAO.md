---
id: c3HIoQAO
vimeo: 111
answer: -20
---

Express

$$
5x^2 - 2x + 1
$$

in the form

$$
\frac{(ax+b)^2 + c}{5}
$$

where $a, b, c \in \mathbb{Z}$

Give the value of $abc$

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

After completing the square, you should see the expression

$$
\left(x - \frac{1}{5} \right)^2
$$

If you collect the contents of the bracket into a single fraction, you get

$$
\left( \frac{5x-1}{5} \right)^2
$$

:::

::: details Solution

We begin by completing the square:

$$
\begin{aligned}
& 5x^2 - 2x + 1 \\
= {} & 5 \left[ x^2 - \frac{2}{5}x \right] + 1 \\
= {} & 5 \left[ \left(x - \frac{1}{5}\right)^2 - \frac{1}{25} \right] + 1 \\
= {} & 5 \left(x - \frac{1}{5}\right)^2 - \frac{1}{5} + 1 \\
= {} & 5  \left(\frac{5x - 1}{5}\right)^2 + \frac{4}{5} \\
= {} & \frac{(5x - 1)^2}{5} + \frac{4}{5} \\
= {} & \frac{(5x - 1)^2 + 4}{5}
\end{aligned}
$$

:::
