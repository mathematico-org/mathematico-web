---
id: VwHwwX9Z
vimeo: 111
---

The sequence $u_n$ is defined by
$$
u_n = an^2 + bn + c, \quad a,b,c \in \mathbb{Z}
$$

 1. Let $u_1 = k$. Show that the value of the terms $u_{1+k}$ and $u_{1+2k}$ are each a multiple of $k$.

 1. Prove by contradiction that no sequence of the form
    $$
    u_n = an^2 + bn + c, \quad a,b,c \in \mathbb{Z}
    $$
    can be prime for every $n \in \mathbb{N}.$

---

For (a), note that $u_1 = k \Rightarrow a + b + c = k$.

Now, when you calculate
$$
u_{1+k} = a(1+k)^2 + b(1+k) + c
$$
you should be able to spot an $a + b + c$ which you can rewrite as $k$.

Something similar works for $u_{1+2k}$.

---

For (b), suppose that $u_n$ is prime for every $n$. Then that means $u_1 = k$ is prime. It also means $u_{1+k}$ and $u_{1+2k}$ are prime!

---

Use the above hint and part (a) to explain why $u_1 = u_{1+k} = u_{1+2k}$. Why is this impossible? (Remember, the sequence is a quadratic.)
