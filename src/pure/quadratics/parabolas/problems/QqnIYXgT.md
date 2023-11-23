---
id: QqnIYXgT
vimeo: 580778576
answer: -6
---

The graph of the parabola

$$
y = ax^2 + bx + c
$$

is sketched below:

![](/img/learn/quad-6.svg)

Find the value of $abc$.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Since the $y$ intercept is $2a$, we can replace $c$ with $2a$

:::

::: details Hint

Since $a$ is a root, we know that

$$
a(a)^2 + b(a) + c = 0
$$

Write something similar for $2a$ and try to solve the equations (you can
subtract them).

:::

:::details Solution

By considering the $y$ intercept, we know that $c = 2a$, so

$$
y = ax^2 + bx + 2a
$$

The roots are $x = a$ and $x = 2a$ so

$$
\begin{aligned}
a(a)^2 + b(a) + 2a & = 0 && \\
a^3 + ab + 2a & = 0 && (i)
\end{aligned}
$$

and

$$
\begin{aligned}
a(2a)^2 + b(2a) + 2a & = 0 && \\
4a^3 + 2ab + 2a & = 0 && (ii)
\end{aligned}
$$

Solving simultaneously to eliminate $b$, we have

$$
\begin{aligned}
(ii) - 2(i):
&& 2a^3 - 2a & = 0 \\
&& 2a(a^2 - 1) & = 0 \\
&& 2a(a - 1)(a + 1) & = 0 \\
&& a & \in \{ 0, 1, -1 \}
\end{aligned}
$$

Clearly $a \neq 0$, otherwise this is not a parabola. Also, the parabola is
convex, so $a > 0$. The only possibility is $a = 1$.

We have already said that $c = 2a$, so $c = 2$.

The equation of the parabola is

$$
\begin{aligned}
y & = x^2 + bx + 2
\end{aligned}
$$

It has a root at $x = 1$, so

$$
\begin{aligned}
0 & = 1 + b + 2 \\
b & = -3
\end{aligned}
$$

:::
