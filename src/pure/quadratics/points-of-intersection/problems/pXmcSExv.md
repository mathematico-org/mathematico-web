---
id: pXmcSExv
vimeo: 435458200
answer: 1784
---

The line $y = 2x - 2$ intersects the parabola

$$
y = 2x^2 +11x + c
$$

at two distinct points. One of those points is $(-5,-12)$ and the other is
$(p, q)$.

Find the value of

$$
128c(p^3 + q^3)
$$

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

$(-5,-12)$ lies on the parabola, so it satisfies its equation. Substitute the
point into the equation to find $c$.

:::

::: details Solution

Given that $(-5, -12)$ lies on the parabola, we know that

$$
\begin{aligned}
-12 & = 2(-5)^2 + 11(-5) + c \\
-12 & = 50 - 55 + c \\
c & = -7
\end{aligned}
$$

so the equation of the parabola is

$$
y = 2x^2 + 11x - 7
$$

The points of intersection are the solutions of

$$
\begin{aligned}
2x - 2 & = 2x^2 + 11x - 7 \\
2x^2 + 9x - 5 & = 0 \\
(2x - 1)(x + 5) & = 0 \\
x & \in \left\{ \frac{1}{2}, \, -5 \right\}
\end{aligned}
$$

So $p = \frac{1}{2}$ and

$$
\begin{aligned}
q
& = 2p - 2 \\
& = 1 - 2 \\
& = -1
\end{aligned}
$$

:::
