---
id: fWkStihD
vimeo: 580830872
answer: 2180
---

The parabola drawn below has a $y$ intercept of $4$. The roots occur at
$x = \alpha$ and $x = \beta$ where $\alpha < 0 < \beta$. The roots and the $y$
intercept form a triangle of area $12$,

![Parabola](/img/learn/quad-4.svg)

Given that the parabola has the form

$$
y = ax^2 - ax + b
$$

Find the value of $80(\alpha^3 + \beta^3)$.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

To find $b$, look at the $y$ intercept, noting that $x=0$ at this point.

:::

::: details Hint

Consider the area of a triangle to work out the value of $\beta - \alpha$.

:::

::: details Hint

Since $\alpha, \beta$ are roots of the quadratic, we know that

$$
\begin{aligned}
a\beta^2 - a\beta + 4 & = 0 \\
a\alpha^2 - a\alpha + 4 & = 0
\end{aligned}
$$

Try subtracting these equations from each other.

:::

::: details Solution

By considering the $y$ intercept, we know that $b = 4$.

$\beta - \alpha$ represents the base of the given triangle. The area is $12$ and
the height is $4$, so

$$
\begin{aligned}
\frac{1}{2} \times (\beta - \alpha) \times 4 & = 12 \\
\beta - \alpha & = 6
\end{aligned}
$$

We know that $\alpha$ and $\beta$ are the roots, so

$$
\begin{aligned}
a \beta^2 - a \beta + 4 & = 0 \\
a \alpha^2 - a \alpha + 4 & = 0
\end{aligned}
$$

Subtracting these equations gives

$$
\begin{aligned}
a \beta^2 - a \beta - a \alpha^2 + a \alpha & = 0 \\
\beta^2 - \alpha^2 - \beta + \alpha & = 0 \\
(\beta - \alpha)(\beta + \alpha) - (\beta - \alpha) & = 0 \\
6(\beta + \alpha) - 6 & = 0 \\
\beta + \alpha & = 1
\end{aligned}
$$

We have shown that

$$
\begin{aligned}
\beta - \alpha & = 6 \\
\beta + \alpha & = 1
\end{aligned}
$$

Adding the equations, we get

$$
\begin{aligned}
2 \beta & = 7 \\
\beta & = \frac{7}{2}
\end{aligned}
$$

Subtracting them, we get

$$
\begin{aligned}
-2\alpha & = 5 \\
\alpha & = -\frac{5}{2}
\end{aligned}
$$

In the end, $80(\alpha^3 + \beta^3) = 2180$.

:::
