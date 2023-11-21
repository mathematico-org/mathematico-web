---
id: iiLDpsB3
vimeo: 111
answer: 424
---

There are $16$ doughnuts on a table. Some of them have a chocolate filling, and
some of them have a raspberry filling, and it is impossible to tell which one is
which without eating them!

We do know, however, that there are more raspberry doughnuts than chocolate
doughnuts.

We also know that if two doughnuts are eaten at random, the probability they
have the same filling is $\frac{19}{40}$.

If the number of chocolate doughnuts is $x$, and the number of raspberry
doughnuts is $y$, find the value of

$$
x^3 + y^2
$$

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

You can use a tree diagram.

:::

::: details Hint

Let the number of chocolate doughnuts be $x$, then the number of raspberry
doughnuts must be $16-x.$

:::

::: details Solution

Since any removed doughnut must be eaten, we are sampling without replacement.

The probability of selecting chocolate and then chocolate is

$$
\frac{x}{16} \times \frac{x - 1}{15}
$$

Noting that $y = 16 - x$, the probablity of selecting raspberry and then
raspberry is

$$
\frac{y}{16} \times \frac{y - 1}{15} = \frac{16 - x}{16} \times \frac{15 - x}{15}
$$

So the probablity of selecting two doughnuts with the same filling is the sum of
these:

$$
\begin{aligned}
\frac{x}{16} \times \frac{x - 1}{15} + \frac{16 - x}{16} \times \frac{15 - x}{15} & = \frac{19}{40} \\
\frac{x(x - 1) + (x - 16)(x - 15)}{16 \cdot 15} & = \frac{19}{40} \\
\frac{2x^2 - 32x + 16 \cdot 15}{16 \cdot 15} & = \frac{19}{40} \\
\frac{x^2 - 16x + 8 \cdot 15}{8 \cdot 15} & = \frac{19}{40} \\
\frac{x^2 - 16x + 8 \cdot 15}{15} & = \frac{19}{5} \\
x^2 - 16x + 8 \cdot 15 & = 19 \cdot 3 \\
x^2 - 16x + 63 & = 0 \\
(x - 7)(x - 9) & = 0 \\
x & \in \{ 7, 9 \}
\end{aligned}
$$

There are more raspberry than chocolate, so $x = 7$ and $y = 9$.

:::
