---
id: qibOXDtZ
vimeo: 111
tags:
  - proof
---

The cubic curve $C$ has equation
$$
y = ax^3 + bx^2 + cx + d, \quad a \neq 0
$$
The tangent to the cubic at the point where $x = k$ is $\ell$.

Prove that, if $x = k$ is the point of inflection of the cubic, then $\ell$ and $C$ intersect *only* at the point of tangency.

---

It is not enough to draw a sketch. We need the equation of $\ell$.

---

To find $\ell$, use
$$
y - y_0 = m(x - x_0)
$$
with
$$
\begin{aligned}
x_0 & = k \\
y_0 & = f(k) \\
m & = f'(k)
\end{aligned}
$$

---

Ugly as it may be, the equation of $\ell$ is
$$
y = (3ak^2 + 2bk + c)x + d - bk^2 - 2ak^3
$$
The intersections with $C$ occur when
$$
ax^3 + bx^2 + cx + d = (3ak^2 + 2bk + c)x + d - bk^2 - 2ak^3
$$

---

Since $x = k$ is a root of the equation in the previous hint, we know $(x-k)$ is a factor. How are your long division skills?
