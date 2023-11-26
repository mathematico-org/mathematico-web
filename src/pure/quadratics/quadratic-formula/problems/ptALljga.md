---
id: ptALljga
vimeo: 111
answer: 1.2
tags:
  - modelling
---

At time $t$ hours, where $0 \leq t \leq 3,$ two planes $P$ and $Q$ are cruising
at altitudes of

$$
1.1t^2 - 2.3t + 7 \, \text{ miles}
$$

and

$$
6 + 2.4t - 1.2t^2 \, \text{ miles}
$$

respectively.

Find the total duration, in hours, for which the difference in altitude between
the planes is less than $1$ mile, giving your answer to two significant figures.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

To find when $P$ is $1$ mile above $Q$, you need to solve

$$
(1.1t^2 - 2.3t + 7) - (6 + 2.4t - 1.2t^2) = 1
$$

You also need to consider the case when $Q$ is above $P$.

:::

::: details Solution

When $P$ is $1$ mile above $Q$, we have

$$
\begin{aligned}
(1.1t^2 - 2.3t + 7) - (6 + 2.4t - 1.2t^2) & = 1 \\
2.3t^2 - 4.7t & = 0 \\
t(2.3t - 4.7) & = 0 \\
t & \in \left\{ 0, \, 2.0434 \ldots \right\}
\end{aligned}
$$

So $t = 0$ and $t = 2.04$ are two solutions.

When $Q$ is $1$ mile above $P$, we have

$$
\begin{aligned}
(6 + 2.4t - 1.2t^2) - (1.1t^2 - 2.3t + 7) & = 1 \\
2.3t^2 - 4.7t - 2 & = 0
\end{aligned}
$$

We need the quadratic formula this time:

$$
\begin{aligned}
t & = \frac{4.7 \pm \sqrt{4.7^2 - 4(2.3)(-2)}}(4.6) \\
t & \in \{ 0.6041 \ldots, \, 1.4393 \ldots \}
\end{aligned}
$$

$P$ is initially above $Q$, then below $Q$, then above $Q$ again. The path of
$P$ is convex and the path of $Q$ is concave. The situation must look something
like this

![Plane paths](/img/learn/quadratic-formula-01.svg)

The duration when the difference in altitudes is less than $1$ mile is

$$
\begin{aligned}
(0.6041 \ldots - 0) + (2.0434 \ldots - 1.4393 \ldots) = 1.2 \, \text{hours} \, (3 \text{ s.f.})
\end{aligned}
$$

:::
