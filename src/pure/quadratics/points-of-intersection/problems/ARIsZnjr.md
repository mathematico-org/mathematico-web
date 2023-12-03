---
id: ARIsZnjr
vimeo: 111
answer: 0
---

The curves

$$
\begin{aligned}
y & = px^2 + 2qx + p \\
y & = 2q + px - qx^2
\end{aligned}
$$

intersect exactly once.

Find the sum of all possible values of $\frac{p}{q}$.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

The algebra gets worse before it gets better - stick with it!

:::

::: details Solution

Consider the equation

$$
\begin{aligned}
px^2 + 2qx + p & = 2q + px - qx^2 \\
(p + q)x^2 + (2q - p)x + p - 2q & = 0
\end{aligned}
$$

Exactly one intersection means exactly one solution to this equation.

Next, let's look at the discriminant, whose value must be $0$

$$
\begin{aligned}
(2q - p)^2 - 4(p + q)(p - 2q) & = 0 \\
4q^2 - 4pq + p^2 - 4(p^2 - pq- 2q^2) & = 0 \\
4q^2 - 4pq + p^2 - 4p^2 + 4pq + 8q^2 & = 0 \\
12q^2 - 3p^2 & = 0 \\
3p^2 & = 12q^2 \\
\frac{p^2}{q^2} & = \frac{12}{3} \\
\frac{p}{q} & = \pm 2
\end{aligned}
$$

:::
