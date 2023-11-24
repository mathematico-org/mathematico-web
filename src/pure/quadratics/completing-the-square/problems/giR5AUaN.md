---
id: giR5AUaN
vimeo: 111
answer: 2521
tags:
  - modelling
---

A ball is dropped from the top of a building of height $63 \text{m}.$ At time
$t$ seconds after being dropped, the ball has traveled a distance of

$$
4.9t^2 \, \text{m}
$$

At the same time the ball is dropped, an elevator at the bottom of the building
starts to ascend at a constant speed of $0.7\text{ms}^{-1}$.

If the ball and elevator pass each other at time $T$ seconds,

1.  Show that

    $$
    7T^2 + T - 90 = 0
    $$

1.  Hence, use completing the square to show that
    $$
    T = \frac{\sqrt{k} - 1}{14}
    $$
    for some integer $k.$

Give the value $k$.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

The distance traveled by the elevator after $t$ seconds will be

$$
\begin{aligned}
\text{distance} \, & = \, \text{speed} \, \times \, \text{time} \\
& = 0.7t
\end{aligned}
$$

:::

::: details Hint

At the correct moment, the distances traveled by the ball and the elevator must
add together to give the height of the building:

![Ball falling from building](/img/learn/quad-3.svg)

:::

::: details Solution

The distance traveled by the elevator after $t$ seconds will be

$$
\begin{aligned}
\text{distance} \, & = \, \text{speed} \, \times \, \text{time} \\
& = 0.7t
\end{aligned}
$$

At the correct moment, the distances traveled by the ball and the elevator must
add together to give the height of the building:

![Ball falling from building](/img/learn/quad-3.svg)

1. So we get

   $$
   \begin{aligned}
   4.9T^2 + 0.7T & = 63 \\
   49T^2 + 7T & = 630 \\
   7T^2 + T - 90 & = 0 \\
   \end{aligned}
   $$

1. Solving for $T$

   $$
   \begin{aligned}
   T^2 + \frac{1}{7}T - \frac{90}{7} & = 0 \\
   \left( T + \frac{1}{14} \right)^2 - \frac{1}{196} - \frac{90}{7} & = 0 \\
   \left( T + \frac{1}{14} \right)^2 & = \frac{2521}{196} \\
   T & = - \frac{1}{14} \pm \sqrt{\frac{2521}{196}} \\
   T & = \frac{\sqrt{2521} - 1}{4}
   \end{aligned}
   $$

   (Note we discarded a solution since clearly $T > 0$.)

:::
