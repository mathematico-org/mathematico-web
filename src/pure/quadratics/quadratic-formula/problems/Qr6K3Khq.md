---
id: Qr6K3Khq
vimeo: 111
answer: 3.97
tags:
  - modelling
---

When placed $r$ meters apart, the gravitational force, $F,$ between two
particles with masses $m_1$ and $m_2$ is given by

$$
F = \frac{G m_1 m_2}{r^2}
$$

where $G = 6.674 \times 10^{-11}$ is known as the gravitational constant, and
$F$ is measured in Newtons.

Two particles are placed $1.75 \, \text{m}$ apart, and the force between them is
measured as $1.9 \times 10^{-9} \, \text{N}.$ Given that one particle is
$18\,\text{kg}$ heavier than the other, find the mass of the lighter particle.

Give your answer in $\text{kg}$, correct to three significant figures.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Let the lighter particle have mass $m,$ so the heavier particle has mass
$m + 18$. Substitute all of the information into the formula and solve the
resulting quadratic.

:::

::: details Solution

Let the lighter particle have mass $m,$ so the heavier particle has mass
$m + 18$. Then the formula gives

$$
\begin{aligned}
1.9 \times 10^{-9} & = \frac{6.674 \times 10^{-11} \times m (m + 18)}{1.75^2} \\
m(m + 18) & = \frac{1.9 \times 10^{-9} \times 1.75^2}{6.674 \times 10^{-11}} \\
& = 87.185 \ldots \\
m^2 + 18m - 87.185 \ldots & = 0
\end{aligned}
$$

Now by the quadratic formula

$$
\begin{aligned}
m & = \frac{-18 \pm \sqrt{18^2 - 4(1)(-87.185 \ldots)}}{2} \\
& = 3.97 \, (3 \text{ s.f.})
\end{aligned}
$$

:::
