---
id: qQ0zV8YU
vimeo: 111
tags:
  - proof
---

The periodic sequence $w_n$ is defined by
$$
\begin{aligned}
w_1 & = 1 \\
w_{n+1} & = a + \frac{b}{w_n}
\end{aligned}
$$
where $a,b \neq 0$.

 1. Show that $w_3$ and $w_4$ are given by
    $$
    \begin{aligned}
    w_3 & = \frac{a^2 + ab + b}{a+b} \\[1em]
    w_4 & = \frac{a^3 + a^2b + 2ab + b^2}{a^2 + ab + b}
    \end{aligned}
    $$

 1. Explain why it is not possible for the period of the sequence to be $2$.

 1. Prove that, when $b = -a^2$, the period of the sequence is $3$.

---

For (b), consider both
$$
w_2 = w_1 \quad (\text{period is} 1)
$$
and
$$
w_3 = w_1 \quad (\text{period is} 2)
$$
You should be able to show that the period can't be $2$ because, if $w_3 = w_1$ then the period must be $1$.

---

For (c), it is not sufficient to only show that
$$
b = -a^2
$$
gives us $w_4 = w_1$. You must also show that the period of the sequence is exactly $3$ (i.e. it is neither $1$ nor $2$).
