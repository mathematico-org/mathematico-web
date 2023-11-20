---
id: vfaMK3hS
vimeo: 574025189
answer: 28
---

# Problem 9

From youngest to oldest, the children in a family are Alfie, Beth, and Cyril.
Alfie is two years younger than Beth. In two years' time, Cyril will be twice as
old as Beth.

Given that the product of Alfie and Cyril's ages is $80,$ how old are each of
the three children?

Find the sum of their ages.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Let their ages by $a, b$ and $c$

We are told that

$$
a = b - 2
$$

:::

::: details Hint

In _two years' time_, Cyril will be $c+2$, and Beth will be $b+2$ years old

:::

::: details Solution

Let their ages by $a, b$ and $c$.

Alfie is two years younger than Beth, so $a = b -2$.

In two years' time, Cyril will be twice as old as Beth, so

$$
\begin{aligned}
c + 2 & = 2(b + 2) \\
c & = 2b + 4 - 2 \\
c & = 2(b + 1)
\end{aligned}
$$

Therefore,

$$
\begin{aligned}
ac & = 80 \\
2(b + 1)(b - 2) & = 80 \\
(b + 1)(b - 2) & = 40 \\
b^2 - b - 2 & = 40 \\
b^2 - b - 42 & = 0 \\
(b + 6)(b - 7) & = 0 \\
b & \in \{ -6, 7 \}
\end{aligned}
$$

However, $b > 0$ so $b = 7$ is the only solution.

This also tells us that $a = b - 2 = 5$ and $c = 2(b + 1) = 16$.

:::
