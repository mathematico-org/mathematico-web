---
id: kIAI23um
vimeo: 580716120
answer: 11
tags:
  - modelling
---

A golfer chips a golf ball from ground level. The path of the golf ball follows
the shape of a parabola.

![Parabola](/img/learn/quad-9.svg)

As it descends, it just clears the top of a fence. The fence is $2\text{m}$ tall
and is at a distance of $8\text{m}$ from the golfer. The ball then travels a
further $3\text{m}$ before hitting the ground at the same horizontal level as it
was when first struck.

You are given that the path of the ball may be modeled by

$$
h = kx(x-d)
$$

where $h$ is the height of the ball, $x$ is the horizontal distance traveled,
and $d,k$ are non-zero constants.

1.  Find the values of $d$ and $k$.

1.  Given that the ball just clears a shrub of height $1.5\text{m}$ as it is
    ascending, find the horizontal distance from the golfer to the shrub.

1.  Find the greatest height reached by the golf ball.

Let the answers to (b) and (c) be $x$ and $y$. Give the value of

$$
\sqrt{24xy}
$$

::: details Hint

Overall, the diagram for this problem should look like this:

![Annotated parabola](/img/learn/quad-10.svg)

:::

::: details Hint

To find $d$, notice that $x=11$ is one of the roots of the parabola.

To find $k$, notice that the point $(8,2)$ lies on the parabola. Substitute this
into the equation of the parabola and rearrange.

:::

::: details Solution

The diagram showing all the given information looks like this:

![Annotated parabola](/img/learn/quad-10.svg)

1. When $x = 11, h = 0$, and so

   $$
   \begin{aligned}
   0 & = 11k(11 - d) \\
   11 - d & = 0 \\
   d & = 11
   \end{aligned}
   $$

   We also know that when $x = 8, h = 2$ so

   $$
   \begin{aligned}
   h & = kx(x - 11) \\
   2 & = 8k(8 - 11) \\
   2 & = -24k \\
   k & = -\frac{1}{12}
   \end{aligned}
   $$

1. Letting $h = 1.5$, we find

   $$
   \begin{aligned}
   1.5 & = -\frac{1}{12} x (x - 11) \\
   -18 & = x(x - 11) \\
   & = x^2 - 11x \\
   x^2 - 11x + 18 & = 0 \\
   (x - 9)(x - 2) & = 0 \\
   x & \in \{ 2, 9 \}
   \end{aligned}
   $$

   However, since the ball is _ascending_ we must have $x = 2$.

1. Consider that the roots are $x = 0$ and $x = 11$, by symmetry the highest
   point will occur when $x = 5.5$, so
   $$
   \begin{aligned}
   h
   & = -\frac{1}{12} \times 5.5 \times (5.5 - 11) \\
   & = \frac{121}{48}
   \end{aligned}
   $$

<Vimeo :id="$frontmatter.vimeo" />

:::
