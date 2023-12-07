---
id: UITAtqCi
vimeo: 111
tags:
  - proof
---

A student writes the below argument:

> Consider
>
> $$
> ax^4 + bx^2 + c = 0
> $$
>
> If
>
> $$
> b^2 - 4ac > 0
> $$
>
> then the equation has four, distinct, real solutions.

Find a counterexample to the student's claim.

::: details Hint

Whilst it is true that

$$
\begin{aligned}
x^2 = \alpha \quad & \Rightarrow \quad x = \pm \sqrt{\alpha} \\
x^2 = \beta \quad & \Rightarrow \quad  x = \pm \sqrt{\beta}
\end{aligned}
$$

might provide four solutions, what if $\alpha < 0$?

:::

::: details Solution

Consider, for example, $(u + 1)(u + 2) = u^2 + 3u + 2$. With $u = x^2$ this
suggests the equation

$$
x^4 + 3x^2 + 2 = 0
$$

$b^2 - 4ac = 1 > 0$ but the solutions would be given by

$$
\begin{aligned}
x^2 & = -1 \\
x^2 & = -2
\end{aligned}
$$

neither of which are possible for $x \in \mathbb{R}$.

So $x^4 + 3x^2 + 2 = 0$ has no real solutions!

:::

::: tip

There are infinitely many possible counterexamples - you just need to give one
and it does not need to be the one in the solution.

:::
