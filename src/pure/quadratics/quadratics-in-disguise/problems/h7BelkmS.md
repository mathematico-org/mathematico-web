---
id: h7BelkmS
vimeo: 111
answer: 64
---

The solution to the inequality

$$
x + 8 < 6\sqrt{x}
$$

is of the form $\alpha < x < \beta$.

Find the value of $\alpha \beta$.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Rearrange into the form

$$
x - 6\sqrt{x} + 8 < 0
$$

:::

::: details Hint

This is

$$
\left(\sqrt{x}\right)^2 - 6\sqrt{x} + 8 < 0
$$

so let $u = \sqrt{x}$

:::

::: details Hint

Sketch

$$
y = u^2 - 6u + 8
$$

and look for parts of the parabola below the $x$ axis

:::

::: details Solution

We rearrange, then let $u = \sqrt{x}$

$$
\begin{aligned}
x + 8 & < 6\sqrt{x} \\
x - 6\sqrt{x} + 8 & < 0 \\
u^2 - 6u + 8 & < 0 \\
(u - 4)(u - 2) & < 0
\end{aligned}
$$

We make a sketch

![parabola sketch](/img/learn/quadratics-in-disguise.svg)

We find that

$$
\begin{aligned}
2 < u & < 4 \\
2 < \sqrt{x} & < 4 \\
4 < x & < 16 \\
\end{aligned}
$$

:::
