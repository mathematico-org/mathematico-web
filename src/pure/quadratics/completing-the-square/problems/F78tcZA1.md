---
id: F78tcZA1
vimeo: 111
answer: 12.5
tags:
  - modelling
---

Two cars are traveling on a straight section of dual carriageway in parallel,
opposite directions. The perpendicular distance between the cars is a constant
$4$ meters. Initially, the horizontal distance between the cars is
$1 \text{km}$.

![](/img/learn/quad-31.svg)

Given that each car is traveling at $20 \text{ms}^{-1}$, find the time taken
until the actual distance between the cars is first equal to $500 \text{m}$.

Give your answer correct to one decimal place.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

After $t$ seconds have passed, notice that each car has traveled $20t$ meters.
Let the remaining horizontal distance be called $x$, and the actual distance be
$\ell$:

![](/img/learn/quad-32.svg)

We want to find the $t$ such that $\ell = 500$.

:::

::: details Hint

Express $x$ in terms of $t$. Notice that $x, \ell$ and $4\text{m}$ form a right
angled triangle so that

$$
\ell^2 = x^2 + 4^2
$$

:::

::: details Solution

After $t$ seconds have passed, notice that each car has traveled $20t$ meters.
Let the remaining horizontal distance be called $x$, and the actual distance be
$\ell$:

![](/img/learn/quad-32.svg)

We want to find the $t$ such that $\ell = 500$. Notice that

$$
x = 1000 - 40t
$$

By Pythagoras, we have

$$
\begin{aligned}
x^2 & = \ell^2 - 16 \\
(1000 - 40t)^2 & = 500^2 - 16 \\
1000 - 40t & = \pm \sqrt{249984} \\
40t & = 1000 \pm 24\sqrt{434} \\
t & = 25 \pm \frac{3}{5} \sqrt{69}
\end{aligned}
$$

We want the _first_ time $\ell = 50$, so we need the smaller of the two
solution, which is $12.5 \, (1 \text{ d.p.})$

:::
