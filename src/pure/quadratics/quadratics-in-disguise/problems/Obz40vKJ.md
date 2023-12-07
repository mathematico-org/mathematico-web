---
id: Obz40vKJ
vimeo: 111
answer: 1296
---

The equation

$$
\left( x^2 + 3x + 2 \right)^2 - 8\left( x^2 + 3x + 1 \right) + 4 = 0
$$

has $n$ solutions, and the sum of these solutions is $S$.

Find $S^n$.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

This is _almost_ a quadratic in disguise... we just need to make a minor
adjustment

:::

::: details Hint

Try this:

$$
\left( x^2 + 3x + 2 \right)^2 - 8\left( [x^2 + 3x + 2] - 1 \right) + 4 = 0
$$

:::

::: details Hint

So the equation becomes:

$$
\left( x^2 + 3x + 2 \right)^2 - 8\left( x^2 + 3x + 2 \right) + 12 = 0
$$

Now let

$$
u = x^2 + 3x + 2
$$

and keep solving!

:::

::: details Solution

We make an adjustment by sticking a $+1$ in the second bracket. After expanding
out, this means we've put in a $-8$ and so we need to $+8$ outside the bracket
to balance.

$$
\begin{aligned}
\left( x^2 + 3x + 2 \right)^2 - 8\left( x^2 + 3x + 1 \right) + 4 & = 0 \\
\left( x^2 + 3x + 2 \right)^2 - 8\left( x^2 + 3x + 2 \right) + 8 + 4 & = 0 \\
\left( x^2 + 3x + 2 \right)^2 - 8\left( x^2 + 3x + 2 \right) + 12 & = 0 \\
\end{aligned}
$$

Now let $u = x^2 + 3x + 2$

$$
\begin{aligned}
u^2 - 8u + 12 & = 0 \\
(u - 6)(u - 2) & = 0
\end{aligned}
$$

So we get

$$
\begin{aligned}
u & = 6 \\
x^2 + 3x + 2 & = 6 \\
x^2 + 3x - 4 & = 0 \\
(x + 4)(x - 1) & = 0 \\
x & \in \{ -4, \,\, 1 \}
\end{aligned}
$$

and

$$
\begin{aligned}
u & = 2 \\
x^2 + 3x + 2 & = 2 \\
x^2 + 3x & = 0 \\
x(x + 3) & = 0 \\
x & \in \{ -3, \,\, 0 \}
\end{aligned}
$$

So the full solution set is

$$
x \in \{ -4, \,\, -3, \,\, 0, \,\, 1 \}
$$

:::
