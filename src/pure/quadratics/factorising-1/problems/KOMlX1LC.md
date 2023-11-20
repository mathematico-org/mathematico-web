---
id: KOMlX1LC
vimeo: 573996254
answer: 41600
---

# Problem 2

1.  Expand and completely factorise the expression

    $$
    4(x+2)^2 + 8(x+1) - 4
    $$

1.  Hence, without a calculator, find the value of
    $$
    4 \times 101^2 + 796
    $$

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

For part (a), you might find it easier to take out the factor of $4$ at the very
beginning and work with

$$
4 \left[ (x+2)^2 + 2(x+1) - 1 \right]
$$

:::

::: details Hint

For part (b), the number we want is found by letting $x = 99$ - if we put this
into the factorised form that we found in part (a), this is much easier to work
out.

:::

::: details Solution

1. First, we expand and simplify

   $$
   \begin{aligned}
   & 4(x+2)^2 + 8(x+1) - 4 \\
   = \, & 4 \left[ (x+2)^2 + 2(x+1) - 1 \right] \\
   = \, & 4 \left[ x^2 + 4x + 4 + 2x + 2 - 1 \right] \\
   = \, & 4 \left[ x^2 + 6x + 5 \right] \\
   = \, & 4 (x + 5) (x + 1) \\
   \end{aligned}
   $$

1. By inspection, we notice that $4 \times 101^2 + 796$ is given by
   $4(x+2)^2 + 8(x+1) - 4$ when $x = 99$. This is much easier to caclulate by
   hand in the factorised form we calculated in part (a).
   $$
   4 \times (104) \times (100) = 41600
   $$

:::
