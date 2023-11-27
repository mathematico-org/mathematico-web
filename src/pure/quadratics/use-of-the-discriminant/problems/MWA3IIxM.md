---
id: MWA3IIxM
vimeo: 111
answer: 2032
tags:
  - modelling
---

A car is purchased. Over the next $80$ years, the value of the car is expected
to decline, and then increase as it becomes a vintage collector's item.

The value $\text{£}V$ of the car $t$ years after purchase is modeled by the
formula

$$
V = 7t^2 - 650t + 20000, \quad 0 \leq t \leq 80
$$

1.  How much did the car cost when it was newly purchased?

1.  Prove that the value of the car never reaches $\text{£}4500$

1.  If the car is bought at the beginning of the year $2020,$ during which other
    year will the car attain the same value as it has at the beginning of the
    year $2100$?

Give the answer to part (c) below.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

For (b), consider the discriminant of the equation

$$
V = 4500
$$

(Remember that you need to rearrange to get $0$ on one side before you can use
the discriminant.)

:::

::: details Hint

For (c), the value of the car in the year $2100$ is given when $t = 80$.

:::

::: details Solution

1. When $t = 0, V = £20000$

1. Suppose that $V = 4500$. Then

   $$
   \begin{aligned}
   7t^2 - 650t + 20000 & = 4500 \\
   7t^2 - 650t + 15500 & = 0 \\

   \end{aligned}
   $$

   Now consider the discriminant

   $$
   \begin{aligned}
   \Delta
   & = 650^2 - 4(7)(-15500) \\
   & = -11500 \\
   & < 0
   \end{aligned}
   $$

   Since the discriminant is negative, there is no real solution, and so no time
   $t$ at which the value of the car is $£4500$.

1. The year $2010$ occurs when $t = 80$, so the value is

   $$
   \begin{aligned}
   V & = 7(8)^2 - 650(8) + 20000 \\
   & = £12800
   \end{aligned}
   $$

   Thus, we need to solve

   $$
   \begin{aligned}
   7t^2 - 650t + 20000 & = 12800 \\
   7t^2 - 650t + 7200 & = 0
   t
   & = \frac{650 \pm \sqrt{650^2 - 4(7)(7200)}}{2(7)} \\
   & = \frac{650 \pm 220900}{14}
   \end{aligned}
   $$

   We are unsurprised to see that one of the solutions is $t = 80$. We are
   interested in the other solution, $t = 12.857 \ldots$.

   So the car will attain the value $£12800$ at some point in the year $2032$.

::: warning

Although $t = 12.857\ldots$ rounds to $13$, so you might think the answer is
$2033$, this is not the case. The car attains the value of $£12800$ roughly
$12.9$ years after the beginning of $2020$ - at this time, the year will be
$2032$ (almost, but not quite, $2033$).

:::
