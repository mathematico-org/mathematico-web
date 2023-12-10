---
id: Y2bv6RRb
vimeo: 111
tags:
  - modelling
answer: 1232
---

### Problem 3 <Badge text="modelling" />

Food safety precautions state that, when a certain food is being reheated, it
should **either**:

- reach a temperature of above $75^{\circ}\text{C}$ for at least $30$ seconds

- **or**, reach a maximum core temperature of at least $80^{\circ}\text{C}$

in order to make it safe to eat.

An industrial kitchen models a reheating process using the formula

$$
T = 45 + 2t - \frac{1}{32}t^2, \quad 0 \leq t
$$

where $T$ is the core temperature of the food product, and $t$ is time in
seconds.

1. Determine whether this process should be considered safe, or whether the
   process needs to be altered, explaining your answer.

1. Let $\delta$ equal the duration for which the temperature of the product is
   above $75^{\circ}\text{C}$, and let the maximum temperature of the product be
   $\theta.$

Give the value of $\delta \theta$.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

To see if the first criterion is satisfied, we are interested in solving the
inequality

$$
45 + 2t - \frac{1}{32}t^2 > 75
$$

:::

::: details Hint

To see if the second criterion is satisfied, we need to find the maximum value
of

$$
T = 45 + 2t - \frac{1}{32}t^2
$$

We can do this by completing the square, or by considering the symmetry of the
parabola.

:::

::: details Solution

To see if the first criterion is satisfied, we are interested in solving the
inequality

$$
45 + 2t - \frac{1}{32}t^2 > 75
$$

We find the roots first

$$
\begin{aligned}
45 + 2t - \frac{1}{32}t^2 & = 75 \\
-\frac{1}{32}t^2 + 2t - 30 & = 0 \\
t^2 - 64t + 960 & = 0 \\
(t - 24)(t - 40) & = 0 \\
t & \in \left\{ 24, 40 \right\}
\end{aligned}
$$

Let's make a sketch:

![rectangle](/img/learn/quadratic-inequalities-04.svg)

Looking at the sketch, we see that the temperature is above $75$ for
$40 - 24 = 16$ seconds.

By symmetry, the maximum temperature would occur at the midpoint of $24$ and
$40$, which is $t = 32$, giving

$$
\begin{aligned}
T & = 45 + 2(32) - \frac{1}{32}(32)^2 \\
& = 77
\end{aligned}
$$

Since the duration above $75$ is less than $30$ seconds, and the maximum
temperature is less than $80$, the process is not considered safe and needs to
be altered.

:::
