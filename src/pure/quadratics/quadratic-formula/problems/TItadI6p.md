---
id: TItadI6p
vimeo: 433733306
answer: 0.148
tags:
  - modelling
---

An advertising screen is going to be installed in a shopping centre. The LCD
part of screen is $6.5\text{m}$ wide and $2.5\text{m}$ tall, and is surrounded
by a plastic chassis which is $x\text{m}$ wide on three edges of the screen, and
$2x \text{m}$ wide on the bottom edge.

![Advertising screen](/img/learn/quad-18.svg)

It is known that the total area of the screen (the LCD and the chassis) is
$20\text{m}^{2}$.

Find the value of $x$ in meters to $3$ significant figures.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

The total height of the screen is $3x + 2.5$ and the total width is $2x + 6.5$

:::

:::details Solution

The total height of the screen is $3x + 2.5$ and the total width is $2x + 6.5$,
so the total area is

$$
\begin{aligned}
(3x + 2.5)(2x + 6.5) & = 20 \\
6x^2 + 24.5x + 16.25 & = 20 \\
6x^2 + 24.5x - 3.75 & = 0 \\
24x^2 + 98x - 15 & = 0
\end{aligned}
$$

so by the quadratic formula

$$
\begin{aligned}
x & = \frac{-98 \pm \sqrt{9604 - 4(24)(-15)}}{48} \\
& = \frac{-49 \pm \sqrt{2761}}{24}
\end{aligned}
$$

We discard the negative solution, and find $x$ to be $0.148\text{m}$

:::
