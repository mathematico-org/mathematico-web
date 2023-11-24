---
id: wXiy9dTA
vimeo: 111
answer: 143
---

Find the product of all integer values of $n$ such that

$$
n^2 - 24n + 147
$$

is a square number.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Assume that $m, n \in \mathbb{Z}$ and

$$
n^2 - 24n + 147 = m^2
$$

Complete the square on the left-hand side.

:::

::: details Hint

Aim to get your equation in the form

$$
a^2 - b^2 = c
$$

and factorise the left-hand side into two brackets.

What can you conclude from the possible factorisations of $c$ into two integers?

:::

::: details Solution

Assume that $m, n \in \mathbb{Z}$ and

$$
\begin{aligned}
n^2 - 24n + 147 & = m^2 \\
(n - 12)^2 + 3 & = m^2 \\
m^2 - (n - 12)^2 & = 3 \\
(m - n + 12)(m + n - 12) & = 3
\end{aligned}
$$

Notice that $3$ has been factored into two integers. There are four possible
cases:

**Case 1**

$$
\begin{aligned}
m - n + 12 & = 1 \\
m + n - 12 & = 3
\end{aligned}
$$

In this case, $m = 2, n = 13$.

**Case 2**

$$
\begin{aligned}
m - n + 12 & = 3 \\
m + n - 12 & = 1
\end{aligned}
$$

In this case, $m = 2, n = 11$.

**Case 3**

$$
\begin{aligned}
m - n + 12 & = -1 \\
m + n - 12 & = -3
\end{aligned}
$$

In this case, $m = -2, n = 11$.

**Case 4**

$$
\begin{aligned}
m - n + 12 & = -3 \\
m + n - 12 & = -1
\end{aligned}
$$

In this case, $m = -2, n = 13$.

:::
