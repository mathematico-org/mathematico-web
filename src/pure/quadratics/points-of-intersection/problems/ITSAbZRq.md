---
id: ITSAbZRq
vimeo: 111
answer: 1
---

The parabola $y = 2 - x^2$ and the line $y = 2x + 4$ are drawn in the plane.

The points $P$ and $Q$ lie on the parabola and the line respectively, such that
$PQ$ is a vertical line. The length of $PQ$ is $d$.

Find the smallest possible value of $d$.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Since $Q$ lies above $P$, the distance $d$ is given by the $y$ coordinate of $Q$
minus the $y$ coordinate of $P$

![Line and parabola](/img/learn/points-of-intersection-01.svg)

:::

::: details Hint

$$
d = (2x + 4) - (2 - x^2)
$$

:::

::: details Solution

We have

$$
\begin{aligned}
d
& = y_Q - y_P \\
& = (2x + 4) - (2 - x^2) \\
& = x^2 + 2x + 2
\end{aligned}
$$

First we note that $\Delta = 4 - 4(1)(2) < 0$ so we never have $d = 0$, which is
to say that the parabola and line never intersect.

Let's find the minimum value of $d$ by considering the complete square form

$$
\begin{aligned}
d
& = x^2 + 2x + 2 \\
& = (x + 1)^2 - 1 + 2 \\
& = (x + 1)^2 + 1
\end{aligned}
$$

So when $x = -1$, $d$ achieves its minimum value of $1$.

:::
