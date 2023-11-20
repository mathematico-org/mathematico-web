---
id: t6cyIuzy
vimeo: 111
tags:
  - proof
---

Consider the right-angle triangle with sides of length $a < b < c$, as drawn below:

![Right-angled triangle](/img/learn/quad-2.svg)

If $a,b,c \in \mathbb{N}$ then $a,b,c$ is known as a *Pythagorean triple*.

 1. Prove that there is only one Pythagorean triple consisting of consecutive integers.

 1. Prove that there is no Pythagorean triple where the difference between $a$ and $b$ is half the difference between $b$ and $c$.

---

For (a), you don't need to complete the square. If $a,b,c$ are consecutive then they must be of the form
$$
a, \quad a + 1, \quad a + 2
$$
They must satisfy Pythagoras' theorem, which should enable you to find $a$.

---

For (b), the condition implies that
$$
\begin{aligned}
b - a & = k \\
c - b & = 2k
\end{aligned}
$$
for some $k \in \mathbb{N}$

---

The previous hint tells us that
$$
\begin{aligned}
b & = a + k \\
c & = a + 3k
\end{aligned}
$$
Now consider Pythagoras' theorem - you can use completing the square to find $a$ in terms of $k$, and hence explain why $a$ cannot possibly be an integer.
