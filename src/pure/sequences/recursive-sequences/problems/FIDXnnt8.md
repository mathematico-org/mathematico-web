---
id: FIDXnnt8
vimeo: 474838637
---

The most famous recursive sequence is probably the Fibonacci sequence:

$$
\begin{aligned}
f_1 & = 1 \\
f_2 & = 1 \\
f_{n+1} & = f_n + f_{n-1}
\end{aligned}
$$

 1. Work out $f_3, f_4, f_5$ and $f_6$

 1. Define a new sequence $g_n$ by
    $$
    \begin{aligned}
    g_1 & = 1 \\
    g_{n+1} & = 1 + \frac{1}{g_n}
    \end{aligned}
    $$
    Find $g_2, g_3, g_4$ and $g_5$

 1. What is the relationship between these two sequences? Can you explain why?

---

To get started with (a), let $n = 1$ to get $f_3 = f_2 + f_1$.

Then let $n = 2$ to get $f_4 = f_3 + f_2.$

Keep going until you get to $f_6.$
