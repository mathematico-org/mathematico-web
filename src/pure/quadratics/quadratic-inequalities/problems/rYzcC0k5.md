---
title: rYzcC0k5
vimeo: 441377819
answer: 6.83
---

A rectangle has a width of $k + 2$ and a height of $k - 2,$ where $k$ is a real
number.

![rectangle](/img/learn/quadratic-inequalities-02.svg)

The area of the rectangle is smaller than or equal to its perimeter.

The range of possible values of $k$ is of the form

$$
\alpha < k \leq \beta
$$

Find the value of $\alpha + \beta$ to three significant figures.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

The area is

$$
(k+2)(k-2)
$$

and the perimeter is

$$
2(k+2) + 2(k-2)
$$

:::

::: details Hints

Remember that $k-2$ and $k+2$ are _lengths_, so they must be positive.

:::

::: details Solution

The area is smaller than or equal to the perimeter, so

$$
\begin{aligned}
(k + 2)(k - 2) & \leq 2(k + 2) + 2(k - 2) \\
k^2 - 4 & \leq 4k \\
k^2 - 4k - 4 \leq 0
\end{aligned}
$$

The roots are

$$
k = 2 \pm 2\sqrt{2}
$$

We also note that $k - 2$ is a _length_ and therefore must be positive, so we
have the additional constraint that $k > 2$.

We represent this on a sketch:

![rectangle](/img/learn/quadratic-inequalities-03.svg)

Values of $k$ in the shaded area must be excluded, so we see that the solution
is

$$
2 < k \leq 2 + 2\sqrt{2}
$$

:::
