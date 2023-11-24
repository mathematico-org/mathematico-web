---
id: WVd3rQrX
vimeo: 111
answer: 12.5
---

One of the roots of the quadratic equation

$$
x^2 - 2mx + (2m+5) = 0, \quad m > 0
$$

is twice as large as the other.

Given that both roots are positive, find their product as an exact decimal.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Completing the square gives you

$$
(x-m)^2 - m^2 + 2m + 5 = 0
$$

so that

$$
x = m \pm \sqrt{m^2 - 2m - 5}
$$

The larger of these roots is twice the smaller.

:::

::: details Hint

Use the previous hint to find $m$, then go back to solve the original equation.

:::

::: details Solution

Completing the square, we get

$$
\begin{aligned}
(x-m)^2 - m^2 + 2m + 5 & = 0 \\
x & = m \pm \sqrt{m^2 - 2m - 5}
\end{aligned}
$$

The larger root is twice the smaller, so

$$
\begin{aligned}
m + \sqrt{m^2 - 2m - 5} & = 2\left(m - \sqrt{m^2 - 2m - 5}\right) \\
m & = 3 \sqrt{m^2 - 2m - 5} \\
m^2 & = 9(m^2 - 2m - 5) \\
8m^2 - 18m - 45 & = 0 \\
(4m - 15)(2m + 3) & = 0 \\
m & = \frac{15}{4}
\end{aligned}
$$

The original equation becomes

$$
\begin{aligned}
x^2 - \frac{15}{2}x + \frac{25}{2} & = 0 \\
2x^2 - 15x + 25 & = 0 \\
(2x - 5)(x - 5) & = 0 \\
x & \in \{ 2.5, 5 \}
\end{aligned}
$$

So the product of the roots is $12.5$.

:::
