---
id: ovqPZaGz
vimeo: 435458162
answer: 2
---

The parabola

$$
y = x^2
$$

intersects the line $y = mx$ at $A$ and $y = -mx$ at $B$.

![](/img/learn/quad-24.svg)

Given that the area of the triangle $ABC$ is $8$, find the value of $m.$

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Express the coordinates of $A$ and $B$ in terms of $m.$ The area of the triangle
is

$$
\frac{1}{2} \times \text{base} \times \text{height}
$$

:::

::: details Solution

Find an expression for $A$

$$
\begin{aligned}
mx & = x^2 \\
x^2 - mx & = 0 \\
x(x - m) & = 0 \\
x & \in \{ 0, m \} \\
A & = (m, m^2)
\end{aligned}
$$

By symmetry, $B = (-m, m^2)$.

The length $AB$ is $m - (-m) = 2m$, and the height of the triangle is $m^2$
(i.e. the $y$ coordinate of $A$ and $B$), so the area is given by

$$
\begin{aligned}
\frac{(2m)(m^2)}{2} & = 8 \\
m^3 & = 8 \\
m & = 2
\end{aligned}
$$

:::
