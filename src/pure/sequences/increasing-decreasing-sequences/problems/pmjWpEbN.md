---
id: pmjWpEbN
vimeo: 475417867
---

A student is studying the sequence
$$
u_n = n^2 - 200n + 10000
$$
Their working is shown below.

<blockquote>

We have
$$
\begin{aligned}
u_{1} & = 9801 \\
u_{2} & = 9604 \\
u_{3} & = 9409 \\
u_{4} & = 9216 \\
u_{5} & = 9025 \\
& \vdots
\end{aligned}
$$
This clearly shows that
$$
u_1 > u_2 > u_3 > u_4 > u_5 > \ldots
$$
and so the sequence $u_n$ is decreasing.
</blockquote>

Prove that the student is wrong, and give the first pair of terms in the sequence where $u_{n+1} \geq u_n.$

---

It is not enough to say that the difference between the terms is getting smaller.

Instead, try completing the square on $u_n.$

---

Completing the square will allow you to find the minimum value of the sequence (see <nuxt-link to="skills/pure/quadratics/finding-the-vertex">finding the vertex</nuxt-link>). After the minimum point, the sequence must start increasing.
