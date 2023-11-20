---
id: pu2mmiUJ
vimeo: 476940975
---

A right-angled triangle has integer sides of length $a,b,c$ where $a < b < c$ and $a,c$ have no common divisor.

![Right triangle with sides a,b,c](/img/learn/sequences-04.svg)

Given that the sides of the triangle form an arithmetic sequence, find the value of $b.$

---

Since $a, b, c$ is an arithmetic sequence, we must have
$$
b - a = c - b
$$
Rearrange this to find $b$ in terms of $a$ and $c.$

---

From the previous hint, you should have found $b = \frac{a+c}{2}.$

![Right triangle with sides a,(a+c)/2,c](/img/learn/sequences-02.svg)

Substitute this into Pythagoras' Theorem.

---

$$
c^2 - a^2 = (c-a)(c+a)
$$

---

Try to manipulate Pythagoras' theorem to show that
$$
\frac{a}{c} = \frac{3}{5}
$$
Because $a$ and $c$ have no common divisor, that means the fraction $\frac{a}{c}$ is already in simplest terms, so $a = 3, c = 5.$
