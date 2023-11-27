---
id: gSh86xeA
vimeo: 434071160
answer: -6
---

The equation

$$
\frac{x^2}{m+2} = 1 - x
$$

has a unique solution in $x.$

Find the sum of all possible values of $m$.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Once you have found your values of $m$, check back with the original equation to
see if they make sense.

:::

::: details Solution

Let's get it in quadratic form

$$
\begin{aligned}
\frac{x^2}{m+2} & = 1 - x \\
x^2 & = (1 - x)(m + 2) \\
x^2 & = m + 2 - mx - 2x \\
x^2 + (m+2)x - (m+2) & = 0
\end{aligned}
$$

Since there is only one root, we have

$$
\begin{aligned}
b^2 - 4ac & = 0 \\
(m+2)^2 - 4(1)(m+2) & = 0 \\
(m + 2)(m + 2 - 4) & = 0 \\
m & = \pm 2
\end{aligned}
$$

However, $m = -2$ is impossible, because otherwise the denominator of
$\frac{x^2}{m+2}$, which appears in the original equation, would be $0$.

So the only answer is $m = 2$.

:::
