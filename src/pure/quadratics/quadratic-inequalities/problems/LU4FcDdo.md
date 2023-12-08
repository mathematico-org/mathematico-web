---
id: LU4FcDdo
vimeo: 111
answer: 35
---

# Problem 8 <Badge text="Proof" />

A student claims that

> Given any value of $p \in \mathbb{Z}$, there is some $x \in \mathbb{R}$ such
> that
>
> $$
> p = \frac{x^2 - 3x}{x - 4}, \quad x \neq 4
> $$

1.  By considering $p = 4$, prove the student is wrong.

1.  Find the sum of all values of $p$ for which the claim fails.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

For (a), set $p = 4$ and multiply both sides by $x-4$. Use the discriminant.

:::

::: details Hint

For (b), multiply both sides by $x-4$ to get

$$
x^2 - 3x = p(x-4)
$$

Now collect this into a quadratic in terms of $x$.

This equation is unsolvable exactly for those values of $p$ such that the
discriminant is negative.

:::

::: details Solution

By rearranging, we have

$$
\begin{aligned}
p & = \frac{x^2 - 3x}{x - 4} \\
p(x - 4) & = x^2 - 3x \\
px - 4p & = x^2 - 3x \\
x^2 - (p + 3)x + 4p & = 0
\end{aligned}
$$

1. When $p = 4$ this becomes

   $$
   x^2 - 7x + 16 = 0
   $$

   The discriminant is $(-7)^2 - 4(16) = -15$. Since the discriminant is
   negative, this equation has no solutions. Hence, the original equation has no
   solutions in $x$ when $p = 4$. This disproves the student's claim.

1. The equation $x^2 - (p + 3)x + 4p = 0$ has no solutions when it discriminant
   is negative

   $$
   \begin{aligned}
   (p+3)^2 - 4(4p) & < 0 \\
   p^2 + 6p + 9 - 16p & < 0 \\
   p^2 - 10p + 9 & < 0 \\
   (p - 9)(p - 1) & < 0
   \end{aligned}
   $$

   We make a sketch to help

   ![parabola](/img/learn/quadratic-inequalities-09.svg)

   From here, we see that the claim fails for values of $p$ where $1 < p < 9$ so

   $$
   p \in \{ 2, \, 3, \, 4, \, 5, \, 6, \, 7, \, 8 \}
   $$

   are the values of $p$ where the claim fails.

:::
