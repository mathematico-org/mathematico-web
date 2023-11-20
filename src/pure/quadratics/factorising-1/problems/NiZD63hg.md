---
id: NiZD63hg
vimeo: 431923284
answer: -7777
---

# Problem 4

The solutions to the equation

$$
x^2u - x^2 - ux + x + 6 - 6u = 0
$$

are $u = \alpha, x = \beta$ or $x = \gamma$, where $\alpha, \beta, \gamma$ are
all distinct.

Find the value of

$$
(\beta \gamma)^5 - \alpha
$$

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Focus on factorising the $u$ out of three of the terms first. Then you can get
an expression of the form

$$
(u - 1)( \, \ldots \, )
$$

which should yield to simple factorisation.

:::

::: details Solution

Factorising out $u$ first, we get

$$
\begin{aligned}
& x^2u - x^2 - ux + x + 6 - 6u \\
= {} & u \left( x^2 - x - 6 \right) - \left(x^2 - x - 6 \right) \\
= {} & (u - 1)\left( x^2 - x - 6 \right) \\
= {} & (u - 1)(x - 3)(x + 2)
\end{aligned}
$$

:::
