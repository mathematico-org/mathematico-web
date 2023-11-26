---
id: fqy3uCbr
vimeo: 111
answer: 78.125
tags:
  - modelling
---

You require to build a pen out of chain-link fencing. The fencing costs $£40$
per meter and you have a budget of $£2000$. The pen is to be rectangular in
shape, with two partitions parallel to two sides of the rectangle, thus forming
three separate areas.

![](/img/learn/quad-33.svg)

What is the maximum possible total area for the pen?

Give your answer as an exact decimal in $\text{m}^2$.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Let the height be $a$ and the width be $b$:

![](/img/learn/quad-34.svg)

:::

::: details Hint

In forming the pen, you use $4a + 2b$ meters of fencing. How many meters of
fencing can you buy?

:::

::: details Solution

Let the height be $a$ and the width be $b$:

![](/img/learn/quad-34.svg)

So we use $4a + 2b$ meters of fencing.

With $£2000$ we can purchase $2000/40 = 50$ meters of fencing.

So $4a + 2b = 50$, or $2a + b = 25$.

The area of the pen is

$$
\begin{aligned}
ab & = a(25 - 2a) \\
& = 25a - 2a^2 \\
& = -2\left[ a^2 - \frac{25a}{2} \right] \\
& = -2\left[ \left(a - \frac{25}{4}\right)^2 - \frac{625}{16} \right] \\
& = -2 \left(a - \frac{25}{4}\right)^2 + \frac{625}{8}
\end{aligned}
$$

So the maximum area is $\frac{625}{8} = 78.125$.

:::
