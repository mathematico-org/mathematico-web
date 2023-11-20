---
title: Integration by parts
id: EEsd777D
vimeo: 111
problems:
  - znji2Rem
  - ZYbgDuuM
  - iWYN4KRq
  - oMfQynvI
  - PctKKVTJ
  - ZhRv8ep6
  # - y6mnI6wz
  # - q8EkRoZx
  # - EpHhIaHR
  # - bwn4Igyq
---

Integration by parts allows us to integrate a product of two functions.

Recall that the product rule allows us to differentiate products of functions. Suppose
$$
h(x) = f(x)g(x)
$$
then
$$
h'(x) = f'(x)g(x) + f(x)g'(x)
$$
But, because integration is the opposite of differentiation, this means
$$
\begin{aligned}
\int h'(x) \, dx & = \int f'(x)g(x) + f(x)g'(x) \, dx \\
h(x) & = \int f'(x)g(x) \, dx + \int f(x)g'(x) \, dx \\
f(x)g(x) & = \int f'(x)g(x) \, dx + \int f(x)g'(x) \, dx \\
\end{aligned}
$$
If we rearrange this, we finally get the integration by parts formula:
$$
\int f'(x)g(x) \, dx = f(x)g(x) - \int f(x)g'(x) \, dx
$$
Let's see how this formula works with an example.

---

Use integration by parts to find

 1. $$
    \int x \sin(2x) \, dx
    $$

 1. $$
    \int - \frac{3v}{8(v+2)^7} \, dv
    $$
