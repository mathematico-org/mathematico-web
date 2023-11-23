---
id: LLL6xb11
vimeo: 580759637
answer: 1008
tags:
  - modelling
---

The cross-section of a straight section of river is modeled as a parabola. The
maximum depth of the _riverbed_ is measured to be $4 \text{m}$, and the
perpendicular distance from one bank to the other at the highest point is
$10 \text{m}$.

An ecologist makes a sketch of the riverbed on a set of axes, which is given
below:

![River bed parabola](/img/learn/quad-7.svg)

The curve of the riverbed may be modeled by the equation

$$
y = p(x-q)^2
$$

where $p$ and $q$ are constants.

1. Find the values of $p$ and $q$

1. When the water has a maximum depth of $1.96 \text{m}$, what is the
   perpendicular distance from the shoreline at the left bank to the shoreline
   at the right bank?

1. When the perpendicular distance between the shorelines is $6 \text{m},$ what
   is the maximum depth of the water?

Let the answers to (b) and (c) be $x$ and $y$.

Give the value of

$$
100xy
$$

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

To find $q$, notice that the parabola has only one root, and that this occurs
exactly halfway along the width of the riverbed.

To find $p$, notice that the point $(10,4)$ lies on the parabola.

:::

::: details Hint

For (b), the diagram should look like this

![River bed parabola 2](/img/learn/quad-7-1.svg)

Note that $P$ and $Q$ have a $y$ coordinate of $1.96$

:::

::: details Hint

For (c), the diagram looks like this

![River bed parabola 3](/img/learn/quad-7-2.svg)

You can use the symmetry to find the $x$ coordinates of the shoreline (where the
surface of the water meets the riverbank). Once you have the $x$ coordinates,
find the $y$ coordinates using the equation of the curve.

:::

::: details Solution

1. The parabola has only one root, when $x = 5$ (we determine this by symettry).
   The equation $p(x - q)^2 = 0$ is only solved by $x = q$, and so we conclude
   that $q = 5$ and $y = p(x - 5)^2$.

   When $x = 0, y = 4$ and so

   $$
   \begin{aligned}
   4 & = p(0 - 5)^2 \\
   25p & = 4 \\
   p & = \frac{4}{25}
   \end{aligned}
   $$

1. The situation described looks like this:

   ![River bed parabola 2](/img/learn/quad-7-1.svg)

   When $y = 1.96$, we have

   $$
   \begin{aligned}
   1.96 & = \frac{4}{25}(x - 5)^2 \\
   49 & = 4(x - 5)^2 \\
   x - 5 & = \pm \sqrt{\frac{49}{4}} \\
   x & = 5 \pm \frac{7}{2}
   \end{aligned}
   $$

   The $x$ coordaintes of $P$ and $Q$ are $\frac{3}{2}$ and $\frac{17}{2}$ so
   the distance between them is $7$.

1. We're now dealing with this situation

   ![River bed parabola 3](/img/learn/quad-7-2.svg)

   By considering the symmetry, we see that the $x$ coordinates where the water
   meets the riverbed are $5 \pm 3$. Substituting either of these into the
   equation of the parabola will give us $h$, for example

   $$
   \begin{aligned}
   h
   & = \frac{4}{25}(8 - 5)^2 \\
   & = \frac{36}{25}
   \end{aligned}
   $$

:::
