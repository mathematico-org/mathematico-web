---
id: DfNMBuIs
vimeo: 580816528
answer: 257
---

The roots of the parabola
$$
y = (2x+1)(2x-3)
$$
along with the points $P$ and $Q$ form a trapezium, as shown in the diagram.

![Parabola with trapezium](/img/learn/quad-5.svg)

The $x$ coordinates of $P$ and $Q$ are $p$ and $q$ respectively, and it is known that $p,q \in \mathbb{Z}$.

Given that the area of the trapezium is $12.5,$

 1. Show that $p = 1 - q$

 1. Show that $(2q+1)^2(2q-3) = 25$.

 1. By considering factorisations of $25,$ find the value of $q$, and hence find the coordinates of $P$ and $Q$.

---

By symmetry, the midpoint of $P$ and $Q$ is the same as the midpoint of the roots. (The location of the roots isn't too hard to find because the equation of the parabola is already in factorised form.)

---

Here are the dimensions of the trapezium

![Trapezium](/img/learn/quad-5-1.svg)

Note that the height of the trapezium can by given by the $y$ coordinate of the point $Q$ (that is, by substituting $x=q$ into the equation of the parabola).

---

Notice that $(2q+1)^2(2q-3)$ is of the form $\text{odd}^2 \times \text{odd}$. The only way this could equal $25$ is if we factorise it in the form either $5^2 \times 1$ or $1^2 \times 25$. Of these two possibilities, and because the diagram tells us $q>0,$ only
$$
\begin{aligned}
& (2q+1)^2(2q-3) = 5^2 \times 1 \\
\Rightarrow \quad & 2q+1 = 5 \quad \text{and} \quad 2q-3 = 1
\end{aligned}
$$
makes sense.

---

Give the value of
$$
x_P^3 + y_P^3 + x_Q^3 + y_Q^3
$$
