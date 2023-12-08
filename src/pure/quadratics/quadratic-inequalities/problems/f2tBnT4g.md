---
id: f2tBnT4g
vimeo: 111
answer: 7
---

The parabolas

$$
\begin{aligned}
y & = a + bx + x^2 \\
y & = b + ax - x^2,
\end{aligned}
$$

where $a,b \in \mathbb{Z},$ do not intersect. For each value of $a$, how many
distinct values could $b$ take?

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

The quadratic

$$
a + bx + x^2 = b + ax - x^2
$$

must have negative discriminant.

:::

::: details Hint

View your discriminant as a quadratic in terms of $b$ - imagine $a$ is a fixed
constant.

In your sketch, $b$ should be on the horizontal axis.

:::

::: details Solution

Since the curves do not intersect, we require the discriminant of the equation

$$
\begin{aligned}
a + bx + x^2 & = b + ax - x^2 \\
2x^2 + (b - a)x + a - b & = 0
\end{aligned}
$$

to be negative, so

$$
\begin{aligned}
(b - a)^2 - 4(2)(a - b) & < 0 \\
(b - a)^2 - 8(a - b) & < 0 \\
(b - a)^2 + 8(b - a) & < 0 \\
(b - a)(b - a + 8) & < 0
\end{aligned}
$$

Viewing this as a quadratic in terms of $b$, we note that the roots are

$$
\begin{aligned}
b & = a \\
b & = a - 8
\end{aligned}
$$

This enables us to make a sketch

![parabola](/img/learn/quadratic-inequalities-10.svg)

Since $a \in \mathbb{Z}$, we can be confident that there are $7$ values of
$b \in \mathbb{Z}$ between $a - 8$ and $a$, thus making the discriminant
negative and guaranteeing no intersections.

:::
