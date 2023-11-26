---
id: m3JLfIhU
vimeo: 111
answer: 19
---

The roots of the equation

$$
x + 4 = \frac{k}{x}
$$

are $\alpha$ and $\beta$.

Given that $\alpha = \sqrt{5} - 2$, find the value of
$\alpha^2 + \beta^2 + k^2$.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

It's best to multiply by $x$ to get

$$
x^2 + 4x - k = 0
$$

Now substitute $x = \sqrt{5} - 2$ to find the value of $k.$

:::

::: details Hint

Once you know $k,$ this becomes a quadratic which you can solve using the
formula.

:::

::: details Solution

Let's simplify first

$$
\begin{aligned}
x + 4 & = \frac{k}{x} \\
x^2 + 4x & = k \\
x^2 + 4x - k & = 0
\end{aligned}
$$

We know that $x = \sqrt{5} - 2$ solves the equation, so

$$
\begin{aligned}
(\sqrt{5} - 2)^2 - 4(\sqrt{5} - 2) & = k \\
9 - 4\sqrt{5} + 4\sqrt{5} - 8 & = k \\
k & = 1
\end{aligned}
$$

Our original equation is therefore

$$
\begin{aligned}
x^2 + 4x - 1 & = 0 \\
x & = \frac{-4 \pm \sqrt{16 - 4(1)(-1)}}{2} \\
& = -2 \pm \sqrt{5}
\end{aligned}
$$

So $\alpha^2 + \beta^2 + k^2 = 19$

:::
