---
id: YX3f0BmY
vimeo: 111
---

The curve
$$
y = \frac{1}{4^x} - 2^{2-x} + 3
$$
is sketched below:

![Curve with minimum point](/img/learn/exp-6.svg)

Find the coordinates of the minimum point of the curve.

---

The first term can be written as
$$
\begin{aligned}
\frac{1}{4^x}
& = \frac{1}{(2^x)^2} \\
& = \left(\frac{1}{2^x}\right)^2
\end{aligned} 
$$
Can you write the second term, $-2^{2-x}$, in terms of $\frac{1}{2^x}$ as well?

---

We have
$$
\begin{aligned}
-2^{2-x}
& = - 2^2 2^{-x} \\
& = - 4 \left( \frac{1}{2^x} \right)
\end{aligned}
$$
With hint (a) in mind also, we can write the equation of the curve as
$$
y = \left(\frac{1}{2^x}\right)^2 - 4 \left( \frac{1}{2^x} \right) + 3
$$

---

This is a quadratic in disguise. Try letting $u = \frac{1}{2^x}$ and complete the square to find the turning point.
