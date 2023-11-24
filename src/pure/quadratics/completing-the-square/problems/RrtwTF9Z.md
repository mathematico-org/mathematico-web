---
id: RrtwTF9Z
vimeo: 433372710
answer: 468
---

A cuboid has sides of length $2$, $(x+1)$ and $(x+2)$. The volume of the cuboid
is $13$.

The surface area of the cuboid can be given in simplest form as
$a + b \sqrt{c}$, with $a, b, c \in \mathbb{N}$.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

After expressing the information as a quadratic equation, it helps to divide by
$2$ so that the coefficient of $x^2$ becomes $1$.

:::

::: details Solution

By the formula for the volume of a cuboid,

$$
\begin{aligned}
2(x+1)(x+2) & = 13 \\
x^2 + 3x + 2 & = \frac{13}{2} \\
\left(x + \frac{3}{2}\right)^2 - \frac{9}{4} + 2 & = \frac{13}{2} \\
\left(x + \frac{3}{2}\right)^2 & = \frac{27}{4} \\
x & = - \frac{3}{2} \pm \frac{3\sqrt{3}}{2} \\
& = \frac{-3 \pm 3\sqrt{3}}{2}
\end{aligned}
$$

It is not possible that $x = \frac{-3 - 3\sqrt{3}}{2}$ because then $x + 1$, a
side of the cuboid, would be negative. So $x = \frac{-3 + 3\sqrt{3}}{2}$ is the
solution we need.

Therefore, the sides have length

$$
\begin{aligned}
x + 1 & = \frac{3 \sqrt{3} - 1}{2} \\
x + 2 & = \frac{3 \sqrt{3} + 1}{2} \\
\end{aligned}
$$

and the surface area is

$$
\begin{aligned}
& 2 \left( 2 \times \frac{3 \sqrt{3} - 1}{2} + \frac{3 \sqrt{3} - 1}{2} \times \frac{3 \sqrt{3} + 1}{2} + \frac{3 \sqrt{3} + 1}{2} + 2 \right) \\
= {} & 13 + 12 \sqrt{3}
\end{aligned}
$$

:::
