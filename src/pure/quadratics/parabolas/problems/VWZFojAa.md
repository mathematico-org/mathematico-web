---
id: VWZFojAa
vimeo: 580697928
answer: 8704
---

In the image below, $P$ and $Q$ each have a $y$ coordinate of $3$.

![Triangle drawn in parabola](/img/learn/quad-8.svg)

The parabola has equation

$$
y + 9 = x^2 + 4x
$$

The area of $\triangle PQR$ is $A$, and the perimeter can be given in the form

$$
p(1 + \sqrt{q})
$$

where $q$ is prime.

Find the value of

$$
Apq
$$

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

To find $P$ and $Q$, set $y = 3$ and solve for $x$.

:::

::: details Hint

To find the perimeter, you will need to use Pythagoras' Theorem

:::

::: details Solution

At $P$ and $Q$ we have $y = 3$, so

$$
\begin{aligned}
12 & = x^2 + 4x \\
x^2 + 4x - 12 & = 0 \\
(x + 6)(x - 2) & = 0 \\
x & \in \{ -6, 2 \}
\end{aligned}
$$

and that means $P(-6, 3)$ and $Q(2, 3)$.

At $R$, we have $x = \frac{-6 + 2}{2} = -2$ and so $y = x^2 + 4x - 9 = -13$.
Thus $R(-2, -13)$.

![Parabola with triangle](/img/learn/parabolas-02.svg)

The height of the triangle is $3 - (-13) = 16$ and the base is $2 - (-6) = 8$.

The area is given by $\frac{16 \times 8}{2} = 64$.

For the perimeter, we need the length of the other two sides of the triangle.

By Pythagoras, this is

$$
\sqrt{4^2 + 16^2} = 4\sqrt{17}
$$

and so the perimeter is

$$
8 + 4\sqrt{17} + 4\sqrt{17} = 8(1 + \sqrt{17})
$$

:::
