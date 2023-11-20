---
id: hkxJ6WI4
vimeo: 574014063
answer: 15625
---

# Problem 8

The equation

$$
\left( x^2 + x - 1 \right)^{\left( x^2 - 7x + 12 \right)} = 1
$$

has $n$ distinct solutions.The sum of these solutions is $S$.

Give the value of

$$
S^n
$$

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Possibilities include:

- $1^u$ where $u$ is anything
- $u^0$ where $u \neq 0$
- $(-1)^u$ where $u$ is an even number

:::

::: details Solution

**Case 1**

In the first case, we consider $x^2 + x - 1 = 1$. Solving this gives

$$
\begin{aligned}
x^2 + x - 1 & = 1 \\
x^2 + x - 2 & = 0 \\
(x + 2)(x - 1) & = 0 \\
x & \in \{ -2, 1 \}
\end{aligned}
$$

**Case 2**

In the second case, we consider $x^2 + x - 1 \neq 0$ and $x^2 - 7x + 12 = 0$.

$$
\begin{aligned}
x^2 - 7x + 12 & = 0 \\
(x - 4)(x - 3) & = 0 \\
x & \in \{ 3, 4 \}
\end{aligned}
$$

We note that $x^2 + x - 1 \neq 0$ when $x \in \{3, 4\}$ so both of these
solutions are valid.

**Case 3**

Finaly, we consider $x^2 + x - 1 = -1$ and $x^2 - 7x + 12$ is even.

$$
\begin{aligned}
x^2 + x - 1 & = -1 \\
x^2 + x & = 0 \\
x(x + 1) & = 0 \\
x & \in \{ -1, 0 \}
\end{aligned}
$$

It turns out that $x^2 - 7x + 12$ is in fact even for $x \in \{ -1, 0 \}$ and so
both solutions are valid.

The total solution set is

$$
x \in \{ -2, \, 1, \, 3, \, 4, \, -1, \, 0 \}
$$

:::
