---
id: fiHAyGvg
vimeo: 111
answer: 2393
---

# Problem 3

The solutions of the equation

$$
(x+3)^3 - (x+2)^3 = 61
$$

are $\alpha$ and $\beta$, where $\alpha < \beta$.

Find the value of

$$
\alpha^4 - \beta^3
$$

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

You need to expand. Recall that

$$
\begin{aligned}
(x+3)^3
& = (x+3)(x+3)(x+3) \\
& = (x^2 + 6x + 9)(x+3) \\
& = x^3 + 6x^2 + 9x + 3x^2 + 18x + 27
\end{aligned}
$$

Do similar for $(x+2)^3$, simplify the whole equation with $0$ on the right hand
side, and solve.

:::

::: details Solution

The hint gives us

$$
\begin{aligned}
(x+3)^3
& = (x+3)(x+3)(x+3) \\
& = (x^2 + 6x + 9)(x+3) \\
& = x^3 + 6x^2 + 9x + 3x^2 + 18x + 27 \\
& = x^3 + 9x^2 + 27x + 27
\end{aligned}
$$

Very similarly, we have

$$
(x + 2)^3 = x^3 + 6x^2 + 12x + 8
$$

So our equation becomes

$$
\begin{aligned}
\left( x^3 + 9x^2 + 27x + 27 \right) - \left( x^3 + 6x^2 + 12x + 8 \right) & = 61 \\
3x^2 + 15x + 19 & = 61 \\
3x^2 + 15x - 42 & = 0 \\
x^2 + 5x - 14 & = 0 \\
(x + 7)(x - 2) & = 0 \\
x & \in \{ -7, \, 2 \}
\end{aligned}
$$

:::
