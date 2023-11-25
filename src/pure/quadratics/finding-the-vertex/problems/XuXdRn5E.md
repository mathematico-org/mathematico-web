---
id: XuXdRn5E
vimeo: 111
answer: 500
tags:
  - modelling
---

At time $t$ seconds, the height of a fighter plane above a radar base is

$$
h = \frac{5}{3}t^2 - 100t + 2000
$$

If the plane's height falls below $475\text{m}$, the plane will be detected by
the base.

Determine whether or not the plane is detected, and give the minimum height of
the plane below.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

To remove the $\frac{5}{3}$, you can do

$$
h = \frac{5}{3} \left[ t^2 - 60t \right] + 2000
$$

Now complete the square to find the minimum height of the fighter plane.

:::

::: details Solution

By completing the square,

$$
\begin{aligned}
h
& = \frac{5}{3}t^2 - 100t + 2000 \\
& = \frac{5}{3} \left[ t^2 - 60t \right] + 2000 \\
& = \frac{5}{3} \left[ (t - 30)^2 - 900 \right] + 2000 \\
& = \frac{5}{3} (t - 30)^2 -1500 + 2000 \\
& = \frac{5}{3} (t - 30)^2 + 500 \\
\end{aligned}
$$

At time $t = 30$, the minmum height of $500\text{m}$ is reached, and the plane
does not get detected.

:::
