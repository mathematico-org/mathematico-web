---
id: bgvOJNVt
vimeo: 111
answer: 5
---

The roots of the quadratic

$$
x^2 + (k+2)x + k, \quad k < 0
$$

are $\alpha$ and $\beta$.

Given that $\beta$ is $3$ larger than $\alpha$, find the value of

$$
\frac{\beta^2}{\alpha^2}
$$

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

We have

$$
\begin{aligned}
a & = 1 \\
b & = (k+2) \\
c & = k
\end{aligned}
$$

:::

::: details Hint

The larger root minus the smaller root is equal to $3$.

:::

::: details Solution

The formula gives the roots as

$$
\begin{aligned}
x
& = \frac{-(k+2) \pm \sqrt{(k+2)^2 - 4k}}{2} \\
& = \frac{-(k+2) \pm \sqrt{k^2 + 4}}{2}
\end{aligned}
$$

The larger root minus the smaller root is equal to $3$, so

$$
\begin{aligned}
\frac{-(k+2) + \sqrt{k^2 + 4}}{2} - \frac{-(k+2) - \sqrt{k^2 + 4}}{2} & = 3 \\
\sqrt{k^2 + 4} & = 3 \\
k^2 + 4 & = 9 \\
k & = \pm \sqrt{5}
\end{aligned}
$$

But $k < 0$, so $k = -\sqrt{5}$.

To find the roots, we must solve

$$
\begin{aligned}
x^2 + (k+2)x + k & = 0 \\
x^2 + (2 - \sqrt{5})x - \sqrt{5} & = 0 \\
\end{aligned}
$$

We of course use the formula

$$
\begin{aligned}
x & = \frac{-(2 - \sqrt{5}) \pm \sqrt{(2 - \sqrt{5})^2 - 4(1)(-\sqrt{5})}}{2} \\
x & = \frac{\sqrt{5} - 2 \pm 3}{2} \\
x & \in \left\{ \frac{\sqrt{5} - 5}{2}, \,\, \frac{\sqrt{5} - 1}{2} \right\}
\end{aligned}
$$

:::
