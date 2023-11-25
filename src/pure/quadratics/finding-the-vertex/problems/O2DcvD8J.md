---
id: O2DcvD8J
vimeo: 111
answer: 207360
tags:
  - modelling
---

A farmer is building a pen. The farmer uses $120\text{m}$ of fencing and builds
a pen in the following shape:

![Farmer pen](/img/learn/quad-17.svg)

Find the value of $Aab$, where $A$ is the minimum possible area of the pen, and
$a, b$ are the dimensions for which this minimum occurs.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

The perimeter of the shape is given by the expression

$$
4a + 2b
$$

:::

::: details Solution

Considering the perimeter, we have

$$
\begin{aligned}
&& 4a + 2b & = 120 \\
\Rightarrow && b & = 60 - 2a
\end{aligned}
$$

Substituting this into the area, we get

$$
\begin{aligned}
a^2 + b^2
& = a^2 + (60 - 2a)^2 \\
& = a^2 + 3600 - 240a + 4a^2 \\
& = 5a^2 - 240a + 3600 \\
& = 5 \left[ a^2 - 48a \right] + 3600 \\
& = 5 \left[ \left( a - 24 \right)^2 - 576 \right] + 3600 \\
& = 5 \left( a - 24 \right)^2 + 72
\end{aligned}
$$

The minimum area for the pen is $720$ and it occurs when $a = 24$ and $b = 12$.

:::
