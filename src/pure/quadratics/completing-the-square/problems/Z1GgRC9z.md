---
id: Z1GgRC9z
vimeo: 433376038
answer: 3
---

The complete square form of the quadratic

$$
x^2 + bx + c
$$

is

$$
(x+c)^2 + b
$$

In simplest form, the roots are given by

$$
m \pm \sqrt{n}, \quad m,n \in \mathbb{N}
$$

Given that $bc \neq 0$, find the value of $m + n$.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

You could complete the square on $x^2 + bx + c$, or you could expand
$(x+c)^2 + b$ and compare coefficients.

:::

::: details Hint

The condition $bc \neq 0$ implies that $b \neq 0$ and $c \neq 0$.

:::

::: details Solution

We'll stay true to the topic of study and complete the square

$$
\begin{aligned}
x^2 + bx + c
& = \left(x + \frac{b}{2}\right)^2 - \frac{b^2}{4} + c \\
& = \left(x + \frac{b}{2}\right)^2 - \frac{b^2 - 4c}{4} \\
\end{aligned}
$$

Comparing this with $(x+c)^2 + b$ we see that

$$
\frac{b}{2} = c \Rightarrow b = 2c
$$

and

$$
\begin{aligned}
- \frac{b^2 - 4c}{4} & = b \\
b^2 - 4c & = -4b \\
4c^2 - 4c & = -8c \\
c^2 - c & = -2c \\
c^2 + c & = 0 \\
c(c + 1) & = 0
c & \in \{ 0, -1 \}
\end{aligned}
$$

However $bc \neq 0$, so $c = -1$ and $b = 2c = -2$.

Putting these into the complete square form to find the roots, we get

$$
\begin{aligned}
(x - 1)^2 - 2 & = 0 \\
(x - 1)^2 & = 2 \\
x & = 1 \pm \sqrt{2}
\end{aligned}
$$

:::
