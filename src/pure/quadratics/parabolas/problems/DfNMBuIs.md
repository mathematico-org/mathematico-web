---
id: DfNMBuIs
vimeo: 580816528
answer: -5
---

The roots of the parabola

$$
y = (2x+1)(2x-3)
$$

along with the points $P$ and $Q$ form a trapezium, as shown in the diagram.

![Parabola with trapezium](/img/learn/quad-5.svg)

The $x$ coordinates of $P$ and $Q$ are $p$ and $q$ respectively, and it is known
that $p,q \in \mathbb{Z}$.

Given that the area of the trapezium is $12.5,$ find $pqh$, where $h$ is the
height of the trapezium.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

By symmetry, the midpoint of $P$ and $Q$ is the same as the midpoint of the
roots. Use this to find a relationship between $p$ and $q$.

:::

::: details Hint

Note that the height of the trapezium can by given by the $y$ coordinate of the
point $Q$ (that is, by substituting $x=q$ into the equation of the parabola).

:::

::: details Hint

Here are the dimensions of the trapezium

![Trapezium](/img/learn/quad-5-1.svg)

Use the area of the trapezium to show that

$$
(2q + 1)^2(2q - 3) = 25
$$

:::

::: details Hint

Recall that $q \in \mathbb{Z}$. This means that $(2q+1) \in \mathbb{Z}$ and
$(2q - 3)$ \in \mathbb{Z}$.

The equation $(2q + 1)^2(2q - 3) = 25$ therefore implies that $25$ has been
factored into $\text{odd}^2 \times \text{odd}$. There's only two ways to do
that, and only one of them makes sense given the diagram!

:::

::: details Solution

The roots of the parabola are $x = -\frac{1}{2}$ and $x = \frac{3}{2}$. The
midpoint of the roots is $\frac{1}{2}$. By symmetry, $p$ and $q$ have the same
midpoint, so

$$
\begin{aligned}
\frac{p + q}{2} & = \frac{1}{2} \\
p & = 1 - q
\end{aligned}
$$

Now let's consider the area of the trapezium

![Trapezium](/img/learn/quad-5-1.svg)

By the formula for the area of a trapezium, we find that

$$
\begin{aligned}
12.5 & = \frac{1}{2} [2 + (q - p)] h && \\
25 & = (2 + q - p) h && (i)
\end{aligned}
$$

Note that $h$ is given by the $y$ coordinate of $Q$ (or $P$, but let's focus on
getting things in terms of $q$). So $h = (2q + 1)(3q - 2)$. We also have
$p = 1 - q$. Substituting this information into $(i)$ we get

$$
\begin{aligned}
[2 + q - (1 - q)] (2q + 1)(3q - 2) & = 25 \\
(2q + 1)^2(3q - 2) & = 25
\end{aligned}
$$

This implies $25$ has been factored into a square multiplied by an integer. The
only ways to do this are $1^2 \times 25$ or $5^2 \times 1$. We can't have
$2q + 1 = 1$ because the diagram implies $q > \frac{3}{2}$, so we must have

$$
\begin{aligned}
2q + 1 & = 5 \\
q & = 2
\end{aligned}
$$

This also implies

$$
\begin{aligned}
p & = 1 - q \\
& = 1 - 2 \\
& = -1
\end{aligned}
$$

and

$$
\begin{aligned}
h & = (2q + 1)(2q - 3) \\
& = 5
\end{aligned}
$$

We conclude that $pqh = -5$.

:::
