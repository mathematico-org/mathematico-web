---
title: Binomial expansion
id: Ig4Q1TLd
vimeo: 111
problems:
  - f0FkD9fd
  - RQcYJi5D
  - jhVua2SV
  - pHW0qvQC
  - NJ8HYL4T
  - rXXkPP8P
  - otyEKwzr
  - lO7CG0p4
  - IkSxQVA4
---

Expanding something like
$$
(a+b)^5
$$
would be possible, but boring.
Consider
$$
(a+b)(a+b)(a+b)(a+b)(a+b)
$$
Terms of the form, for example,
$$
a^3b^2
$$
are obtained by choosing a $b$ from $2$ of the brackets (and thus an $a$ from the remaining $3$ brackets). So $a^3b^2$ would turn up
$$
5C3 = \binom{5}{3}
$$
times.

## General formula

Generally, we have
$$
(a+b)^n = \binom{n}{0} a^n + \binom{n}{1} a^{n-1}b + \binom{n}{2} a^{n-2}b^2 + \ldots + \binom{n}{n-1}ab^{n-1} + \binom{n}{n}b^n
$$
This formula looks pretty scary, but it makes a lot more sense once you've seen some examples.

---

 1. Use the binomial expansion formula to expand
    $$
    (a+b)^5
    $$


 1. Use the binomial expansion formula to expand
    $$
    (2 + 3x)^4
    $$

 1. Expand and simplify
    $$
    \left(\frac{1}{p} - \sqrt{p}\right)^5
    $$
