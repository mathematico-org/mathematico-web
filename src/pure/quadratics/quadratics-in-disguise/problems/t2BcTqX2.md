---
id: t2BcTqX2
vimeo: 111
answer: -6
---

Let

$$
y = \frac{1-6x+3x^2}{x^2}, \quad x \neq 0
$$

Find the smallest possible value of $y$.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Split this into $3$ fractions:

$$
y = \frac{1}{x^2} - \frac{6x}{x^2} + \frac{3x^2}{x^2}
$$

:::

::: details Hint

After simplifying you get

$$
y = \frac{1}{x^2} - \frac{6}{x} + 3
$$

This is a quadratic in disguise!

:::

::: details Hint

We have

$$
y = \left( \frac{1}{x}\right)^2 - 6 \left(\frac{1}{x}\right) + 3
$$

Let $u = \frac{1}{x}$ and complete the square to find the minimum value.

:::

::: details Solution

We split this into three fractions and then simplify

$$
\begin{aligned}
y
& = \frac{1}{x^2} - \frac{6x}{x^2} + \frac{3x^2}{x^2} \\
& = \frac{1}{x^2} - \frac{6}{x} + 3
\end{aligned}
$$

Now let $u = \frac{1}{x}$ and complete the square

$$
\begin{aligned}
y
& = u^2 - 6u + 3 \\
& = (u - 3)^2 - 9 + 3 \\
& = (u - 3)^2 - 6
\end{aligned}
$$

The minimum value is $6$ and occurs when $u = 3 \Rightarrow x = \frac{1}{3}$.

:::
