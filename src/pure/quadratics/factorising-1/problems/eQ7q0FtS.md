---
id: eQ7q0FtS
vimeo: 574003528
answer: 594
tags:
  - modelling
---

### Problem 5 <Badge text="modelling" />

A window is made from a wooden frame of thickness $1-x$ and $9$ square glass
panes of width $10+x$, where $0 < x < 1$.

![Window diagram](/img/learn/quad-1.svg)

Find a fully factorised expression for the total area of the wooden frame only.

The expression can be given in the form

$$
-k(x+a)(x-b), \quad a,b,k \in \mathbb{N}
$$

Give the value of

$$
(a+1)(b+1)(k+1)
$$

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

The total height of the square window is

$$
4(1-x) + 3(10+x)
$$

and so the total area of the window is this value squared.

If we subtract the $9$ glass panes, we are left with the area of the wooden
frame.

:::

::: details Hint

After expanding and simplifying everything, you should get

$$
-8 x^{2} - 248 x + 256
$$

Remove a common factor of $-8$ before continuing with the factorisation.

:::

::: details Solution

The total height of the square window is

$$
4(1-x) + 3(10+x) = 34 - x
$$

and so the total area of the window is

$$
(34 - x)^2 = x^2 - 68x + 1156
$$

To get the area of the wooden frame only, we subtract the $9$ glass panels:

$$
\begin{aligned}
& x^2 - 68x + 1156 - 9(10 + x)^2 \\
= {} & x^2 - 68x + 1156 - 9\left( x^2 + 20x + 100 \right) \\
= {} & -8x^2 - 248x + 256 \\
= {} & -8 \left( x^2 + 31x - 32 \right) \\
= {} & -8 (x + 32) (x - 1)
\end{aligned}
$$

:::
