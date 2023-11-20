---
id: x6JLZF5x
vimeo: 432527680
answer: 4
---

# Problem 6

A right-angled triangle has a hypotenuse of length $2x - 3.$ The other two sides
have lengths of $x$ and $x-1.$

![Right angled triangle](/img/learn/quad-14.svg)

Find the value of $x.$

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

By Pythagoras' Theorem,

$$
x^2 + (x-1)^2 = (2x-3)^2
$$

:::

::: details Solution

By Pythagoras' Theorem,

$$
\begin{aligned}
x^2 + (x-1)^2 & = (2x-3)^2 \\
x^2 + x^2 - 2x + 1 & = 4x^2 - 12x + 9 \\
2x^2 - 10x + 8 & = 0 \\
x^2 - 5x + 4 & = 0 \\
(x - 1)(x - 4) & = 0 \\
x & \in \{ 1, 4 \}
\end{aligned}
$$

However, $x = 1$ does not make sense as a solution, since then the side of
length $x - 1$ would be $0$ and the side of length $2x - 3$ would be $-1$,
neither of which make sense.

Therefore, $x = 4$ is the only solution.

:::
