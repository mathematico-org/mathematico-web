---
id: t6cyIuzy
vimeo: 111
tags:
  - proof
---

Consider the right-angle triangle with sides of length $a < b < c$, as drawn
below:

![Right-angled triangle](/img/learn/quad-2.svg)

If $a,b,c \in \mathbb{N}$ then $a,b,c$ is known as a _Pythagorean triple_.

1.  Prove that there is only one Pythagorean triple consisting of consecutive
    integers.

1.  Prove that there is no Pythagorean triple where the difference between $a$
    and $b$ is half the difference between $b$ and $c$.

::: details Hint

For (a), you don't need to complete the square. If $a,b,c$ are consecutive then
they must be of the form

$$
a, \quad a + 1, \quad a + 2
$$

They must satisfy Pythagoras' theorem, which should enable you to find $a$.

:::

::: details Hint

For (b), the condition implies that

$$
c - b = 2(b - a)
$$

:::

::: details Solution

1. Suppose $a, \, a+1, \, a+2 \in \mathbb{N}$ form a Pythagorean triple. Then

   $$
   \begin{aligned}
   (a+2)^2 & = (a+1)^2 + a^2 \\
   a^2 + 4a + 4 & = a^2 + 2a + 1 + a^2 \\
   a^2 - 2a - 3 & = 0 \\
   (a - 3)(a + 1) & = 0 \\
   a & \in \{ -1, 3 \}
   \end{aligned}
   $$

   So $a = 3$ is the only solution.

1. Suppose $a, b, c \in \mathbb{N}$ is a Pythagorean triple, and that

   $$
   \begin{aligned}
   && c - b & = 2(b - a) \\
   \Rightarrow && c & = 3b - 2a
   \end{aligned}
   $$

   Then, since $a, b, c$ is Pythagorean, we have

   $$
   \begin{aligned}
   c^2 & = b^2 + a^2 \\
   (3b - 2a)^2 & = b^2 + a^2 \\
   9b^2 - 12ab + 4a^2 & = b^2 + a^2 \\
   3b^2 - 12ab + 3a^2 & = 0 \\
   b^2 - 4ab + a^2 & = 0 \\
   (b - 2a)^2 - 4a^2 + a^2 & = 0 \\
   (b - 2a)^2 & = 3a^2 \\
   b - 2a & = \pm \sqrt{3}a \\
   b & = 2a \pm \sqrt{3}a \\
   b & = (2 \pm \sqrt{3})a
   \end{aligned}
   $$

   Now if $a \in \mathbb{N}$, we can't possibly also have $b \in \mathbb{N}$ due
   to the $\sqrt{3}$ on the right-hand side.

   This is a contradiction, so we must conclude that such a Pythagorean triple
   does not exist.

:::
